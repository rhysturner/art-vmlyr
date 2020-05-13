/**
 * Pick N elements from array
 *
 * @param {Array} arr
 * @param {Number} n
 * @returns {Array}
 */

exports = module.exports = function sample (arr, n) {
  const copy = arr.slice();
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(copy.splice(rand(copy.length), 1)[0]);
  }
  return out;
};

function rand (n) {
  return Math.floor(Math.random() * n); // [0..n-1]
}
