// grab the mongoose module
var mongoose = require('mongoose');

// define our post model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Post', {
  title: {type: String, default: ''},
  preview_img_url: {type: String},
  description: {type: String},
  body: {type: String},
  slug: {type: String},
  created_at: {type: Date, default: Date.now()}
});