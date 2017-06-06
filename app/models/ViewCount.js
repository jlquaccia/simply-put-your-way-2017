var mongoose = require('mongoose');

module.exports = mongoose.model('ViewCount', {
  count: {type: Number},
  lastModified: {type: Date}
});