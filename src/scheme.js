/* eslint-disable global-require */

if (process.env.NODE_ENV === 'development') {
  const schemeConvert = require('./lib/scheme-convert').default
  const scheme = require('../scheme.json')
  
  module.exports = schemeConvert(scheme)
} else {
  module.exports = require('../scheme-generated.json')
}