/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'reselect-map',
  treeForAddon (tree) {
    const reselectPath = path.dirname(require.resolve('reselect-map/src/index.js'));
    let reselectTree = this.treeGenerator(reselectPath);

    if (!tree) {
      return this._super.treeForAddon.call(this, reselectTree);
    }

    const trees = mergeTrees([reselectTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
