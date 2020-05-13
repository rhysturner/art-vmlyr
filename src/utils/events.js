/**
 * Use window to publish events and subscribe to them
 */

const publish = (type, data) => {
  var e = new window.Event(type);
  e.data = data;
  window.dispatchEvent(e);
};

const subscribe = (type, fn) => {
  const listener = (e) => fn(e.data);
  window.addEventListener(type, listener, false);
  return () => window.removeEventListener(type, listener);
};

/**
 * Expose
 */

exports = module.exports = { publish, subscribe };
