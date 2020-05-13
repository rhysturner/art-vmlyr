<template>
  <a-scene>
    <a-assets>
            <a-asset-item id="trees-obj" src="../../object/models/trees/trees.obj"></a-asset-item>
            <a-asset-item id="trees-mtl" src="../../object/models/trees/trees.mtl"></a-asset-item>
            
      <a-asset-item id="demo1" src="../../object/models/nooks-cranny/source/Nook.obj"></a-asset-item>
      <a-asset-item id="demo2" src="../../object/models/tree.gltf"></a-asset-item>
      <a-asset-item id="demo3" src="../../object/models/trees/trees.gltf"></a-asset-item>
      <a-asset-item id="bottle" src="../../WaterBottle.gltf"></a-asset-item>
     
      <img id="texture" src="../../public/object/img/textures/frame-texture.png" />
      <img id="artwork1" src="../../public/object/img/artwork/01-mona-lisa.jpg" />
      <img id="artwork2" src="../../public/object/img/artwork/02-u-ltima-cena-da-vinci.jpg" />
      <img id="artwork3" src="../../public/object/img/artwork/03-van-gogh-starry-night.jpg" />
      <img id="artwork4" src="../../public/object/img/artwork/04-edvard-munch.jpg" />
      <img id="artwork5" src="../../public/object/img/artwork/05-meisje-met-de-parel.jpg" />
      <img id="artwork6" src="../../public/object/img/artwork/06-guernica.jpg" />
      <img
        id="artwork7"
        src="../../public/object/img/artwork/07-sandro-botticelli-la-nascita-di-venere.jpg"
      />
      <img id="artwork8" src="../../public/object/img/artwork/08-the-night-watch.jpg" />
      <img id="artwork9" src="../../public/object/img/artwork/09-persistenceofmemory.jpg" />
      <img id="artwork10" src="../../public/object/img/artwork/10-whistlers-mother-high-res.jpg" />

      <video id="big-bucky" autoplay loop="true" src="../../public/object/video/bucky.mp4"></video>
      
      <script id="level-0" type="text/html">
        <a-scene>
          <!-- <a-entity gltf-model="#bottle" scale="10 10 10"  position="0 1 0"></a-entity> -->
          <a-entity gltf-model="#demo3" scale="1 1 1"  position="0 1 0"></a-entity>
        </a-scene>
      </script>

      <script id="trees-obj-demo" type="text/html">
        <a-scene>
          <!-- <a-entity obj-model="obj: #demo1;"></a-entity> -->
          <a-entity obj-model="obj: #trees-obj; mtl: #trees-mtl" position="0 1 0"></a-entity>
        </a-scene>
      </script>

      <script id="level-1" type="text/html">
        <a-entity>
          <a-video src="#big-bucky" width="16" height="9" position="0 7 -20"></a-video>
          <a-box src="#artwork1" position="0 2 -5" rotation="45 45 45" scale="2 2 2" animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"></a-box>
          <a-box src="#texture" position="2 4 5" rotation="45 45 45" scale="2 2 2" animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"></a-box>
          <a-plane src="#artwork2" height="4" width="4" rotation="0 -90 0" position="4 3 4"></a-plane>
          <a-plane src="#artwork3" height="4" width="4" rotation="0 -90 0" position="4 3 8"></a-plane>
          <a-plane src="#artwork4" height="4" width="4" rotation="0 -90 0" position="4 3 16"></a-plane>
          <a-plane src="#artwork5" height="4" width="4" rotation="0 -90 0" position="4 3 24"></a-plane>
          <a-plane src="#artwork6" height="4" width="4" rotation="0 -90 0" position="4 3 28"></a-plane>
          <a-plane src="#artwork7" height="4" width="4" rotation="0 -90 0" position="4 3 32"></a-plane>
          <a-plane src="#artwork8" height="4" width="4" rotation="0 -90 0" position="4 3 36"></a-plane>
          <a-plane src="#artwork9" height="4" width="4" rotation="0 -90 0" position="4 3 40"></a-plane>
          <a-plane src="#artwork10" height="4" width="4" rotation="0 -90 0" position="4 3 44"></a-plane>
          <a-entity geometry="primitive: plane; width: 4; height: 1" material="src: #texture; repeat: 20 2"></a-entity>
        </a-entity>
      </script>

    </a-assets>

    <a-entity environment="preset: forest" />
    <!-- <a-entity environment="preset: default" /> -->

    <a-entity template="src: #trees-obj-demo"></a-entity>
    <!-- <a-entity template="src: #level-0"></a-entity> -->

    <a-entity camera="active: true" look-controls wasd-controls position="0 1.6 0">
      <a-entity
        cursor="fuse: true; fuseTimeout: 500"
        position="0 0 -1"
        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
        material="color: black; shader: flat; opacity: 0.3"
      />
    </a-entity>
    <div id="marker"></div>
    <div id="mesh"></div>
  </a-scene>
</template>



<script>
const { THREE } = require("aframe");

const classics = [
  "artwork1",
  "artwork2",
  "artwork3",
  "artwork4",
  "artwork5",
  "artwork6",
  "artwork7",
  "artwork8",
  "artwork9",
  "artwork10"
];

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
      console.log("start gallery", document.querySelector("a-scene").object3D);
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
          console.log("this.next_url", this.next_url);
          this.createRooms();
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    },
    getMoreGrams() {
      console.log("this.next_url", this.next_url);
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
    },
    createRooms() {
      console.log("createRooms");
      let i;
      for (i = 0; i < 5; i++) {
        // text += "The number is " + i + "<br>";
        console.log("createRooms", i, this.grams[i].media_url);
        this.createArtwork(i, this.grams[i].media_url);
      }
    },
    createArtwork(i, url) {
      var texture = new THREE.TextureLoader().load(url);
      var material = new THREE.MeshBasicMaterial({ map: texture });
      var geometry = new THREE.BoxGeometry(i * 4, 1, 1);
      document
        .querySelector("a-scene")
        .object3D.setObject3D("mesh", new THREE.Mesh(geometry, material));
      // let meshViss = document.getElementById("mesh");
    },
    classicsGallery() {
      for (i = 0; i < 5; i++) {}
    }
  },
  mounted() {
    // this.start();
  },
  created() {
    // this.getGrams();
  }
};
</script>
