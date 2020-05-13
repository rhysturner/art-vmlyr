

<template>
  <div class="container">
      <!-- Insta: "{{ this.grams[0].media_url }}" -->
      <!-- <img src={this.grams[0].media_url} alt="Smiley face" height="42" width="42"> -->
      <!-- <h1>
        <a :href="instapage">@{{ username }} on instagram</a>
      </h1> -->
    <div id="gallery">
      <template v-if="grams.length > 0">
        <div class="artwork slide-fade-enter-active" v-for="item in grams" :key="item.message" >
          <!-- <div v-for="(gram, index) in grams"> -->
          <a :href="item.permalink" target="_blank">
            <img :src="item.media_url" :alt="item.caption" />
          </a>
        </div>
      </template>
      <div v-else class="loading"></div>
      <div v-if="error" class="error">Sorry, the Instagrams couldn't be fetched.</div>
      <button @click="getMoreGrams">Load More</button>
    </div>
  </div>
</template>

<script>
exports = module.exports = {
  data() {
    return {
      access_token:
        "IGQVJVU3RtNGRVLTduQ0NoU3d4VjZAibWItX1poNWRuZAmNpSkFFNjd6NnpFQXVaWlI1OFJYS09heVBsQUhiTEh5NVBqZAmpmS3h3cHpvX18zem03dDU2WVM4V2psWVh1MTF3UmpHWE9R",
      url:
        "https://graph.instagram.com/17841400460890340/media?fields=id,media_url,username,timestamp,caption,media_type,permalink,thumbnail_url",
      username: "rhysturner",
      grams: [],
      next_url: "",
      error: false
    };
  },
  props: {},
  computed: {
    instapage() {
      return "https://www.instagram.com/" + this.username;
    }
  },
  methods: {
    start() {
      console.log("start gallery");
    },
    getGrams() {
      console.log("getGrams");
      axios
        .get(this.url + "&access_token=" + this.access_token)
        .then(({ data }) => {
          this.grams = data.data;
          console.log(this.grams);
          this.username = data.data[0].username;
          this.next_url = data.paging.next;
          console.log("this.next_url",this.next_url);

        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    },
    getMoreGrams() {
      console.log("this.next_url",this.next_url);      
      axios
        .get(this.next_url)
        .then(({ data }) => {
          this.grams = this.grams.concat(data.data);
          this.next_url = data.paging.next;
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    }
  },
  mounted() {
    this.start();
  },
  created() {
    this.getGrams();
  }
};
</script>

<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
#gallery {
  
  // position: absolute;
  // top: 0px;
  // left: 0px;
  // overflow-x: scroll;
  display: flex;
}
.container{
  // display: flex;
  
}
.artwork{
  position: relative;
  // float: left;
  // align-items: center;
  align-content: flex-end;
  border: 1em solid black;
}
img {
  width: 7em;
  height: auto;
}
</style>