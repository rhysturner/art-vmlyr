/**
 * Object that represents a player
 */

/**
 * Module dependencies
 */

const { THREE } = require('aframe');

/**
 * Expose
 */

exports = module.exports = {
  schema: {
    message: {type: 'string', default: 'Hello, World!'},
    id: {type: 'number', default: 1},
    url: {type: 'string', default: "../../public/object/img/textures/frame-texture.png"}
  },
  init () {
    console.log(this.data.message);    
    // var scene = this.el.sceneEl;  // THREE.Scene
    // console.log("createRooms", scene,); 
    console.log("[artwork-entity] id:",this.data.id, "url:",this.data.url, "message", this.data.message);
     
    this.el.setObject3D('marker', new THREE.Mesh(
      new THREE.ConeGeometry( .5, 1, 3 ),
      new THREE.MeshPhongMaterial({color: 0xFF1493})
    ));
    this.el.setObject3D('mesh', new THREE.Mesh(
      new THREE.PlaneGeometry(4, 2),
      new THREE.TextureLoader().load(this.data.url),
      new THREE.MeshBasicMaterial({ map: texture }),
      new THREE.BoxGeometry(this.data.id * 4, 1, 1)
    ));
  } 
}