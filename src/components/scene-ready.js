/**
 * Dispatch an event when scene is ready
 */

/**
 * Module dependencies
 */

// const { publish } = require('../utils/events');

/**
 * Expose
 */

exports = module.exports = {
  init () {
    publish('scene-ready', this.el.sceneEl);
  }
};
