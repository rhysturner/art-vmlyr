<template>
  <div class="container">
    <div class="nav">
      <nav>
        <ul>
          <li>
            <router-link to="/virtual-gallery">Virtual Gallery</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/win">Win</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="content">
      <div ref="box" class="box">
        <h1>Demo VMLYANDR gallery</h1>
      </div>
      <div class="main">
        <section>welcome</section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  padding: 1em;
  position: absolute;
  width: 100%;
  height: 100%;
  // background: white;
  // background: #112b88;
  // z-index: 99999; // use 999 to display VR overlay
  // overflow: auto;
}
</style>
