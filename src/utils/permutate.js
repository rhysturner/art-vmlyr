/**
 * Generate permutations
 *
 * @example
 * console.log(permutate([[1, 2], [3, 4, 5], [6, 7], [0]]));
 * [ [ 1, 3, 6, 0 ],
 *   [ 1, 3, 7, 0 ],
 *   [ 1, 4, 6, 0 ],
 *   [ 1, 4, 7, 0 ],
 *   [ 1, 5, 6, 0 ],
 *   [ 1, 5, 7, 0 ],
 *   [ 2, 3, 6, 0 ],
 *   [ 2, 3, 7, 0 ],
 *   [ 2, 4, 6, 0 ],
 *   [ 2, 4, 7, 0 ],
 *   [ 2, 5, 6, 0 ],
 *   [ 2, 5, 7, 0 ] ]
 * @param {Array<Array>} list
 * @param {Array} out
 * @returns {Array<Array>} out
 */

exports = module.exports = function permutate (list, out = []) {
  const tmp = list.slice();
  const opts = tmp.shift();

  if (!opts) {
    return out;
  }

  if (out.length) {
    out = out
      .reduce((mem, item) => mem
        .concat(opts
          .map((opt) => item
            .slice()
            .concat(opt)
          )
        ),
      []);
  } else {
    opts.forEach((opt) => out.push([opt]));
  }

  return permutate(tmp, out);
};
