/**
 * Create a-frame entity
 *
 * @param {Object|String} attr, entity attribute
 * @returns {Node} domElement
 *
 * @example
 *
 * createEntity('my-box', { position: '0 0 0' }, 'peer-enetity', 'scene-ready') ->
 *  <a-entity my-box position="0 0 0" peer-entity scene-ready></a-entity>
 */

exports = module.exports = function createEntity (...attrs) {
  const el = document.createElement('a-entity');

  [].concat(attrs).forEach((attr) => {
    if (typeof attr === 'string') {
      el.setAttribute(attr, '');
    } else {
      Object.entries(attr).forEach(([key, value]) => {
        el.setAttribute(key, value);
      });
    }
  });

  return el;
};
