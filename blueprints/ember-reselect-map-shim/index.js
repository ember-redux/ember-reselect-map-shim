module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'reselect-map', target: '1.0.1'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
