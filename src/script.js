/**
 * Component entrypoint
 */

/**
 * Module dependencies
 */

const Vue = require('vue/dist/vue.min');
const Vuex = require('vuex');
const VueRouter = require('vue-router').default;
const { sync } = require('vuex-router-sync');
const aframe = require('aframe');

const TimelineLite = 'gsap';

/**
 * Register A-Frame plugins
 */

require('aframe-environment-component');
require('aframe-template-component');

/**
 * Register A-Frame components
 */

Object.entries(require('./components/*.js')).forEach(([ name, component ]) => {
  aframe.registerComponent(name, component);
});


/**
 * Adjustments
 */

Vue.config.productionTip = false;

/**
 * Install vue plugins
 */

Vue.use(Vuex);
Vue.use(VueRouter);

/**
 * Init store
 */

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});

/**
 * Init router
 */

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./views/Home.vue') },
    { path: '/about', component: require('./views/About.vue') },
    { path: '/gallery', component: require('./views/Gallery.vue') },
    { path: '/virtual-gallery', component: require('./views/VirtualGallery.vue') },
    { path: '/win', component: require('./views/Win.vue') }
  ]
});

/**
 * Sync route changes
 */

sync(store, router);

/**
 * Init application
 */

function start () {
  /**
   * Redirect mobile users to DJ page
   */

  // if (isMobile()) {
  // { path: '*', redirect: '/home' }
  //   alert('is mobile');
  //   router.replace({ path: '*', redirect: '/dj' });
  // }

  return new Vue({
    el: '#app',
    store,
    router
  });

  
}

/**
 * Start Vue app when DOM is loaded
 */

document.addEventListener('DOMContentLoaded', start);
