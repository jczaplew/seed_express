module.exports = (function(mode) {
  var config = {
    local: {
      mode: 'local',
      port: 5000,
      production: false
    },
    production: {
      mode: 'production',
      port: 3000,
      production: true
    }
  }

  return config[mode || process.argv[2] || 'local'] || config.local;

})();