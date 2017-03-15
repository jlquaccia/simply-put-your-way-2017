// grab the post model we just created
var Post = require('./models/Post');

module.exports = function (app) {
  // server routes ===========================================================
  // get all posts
  app.get('/api/posts', function (req, res) {
    Post.find(function (err, posts) {
      if (err) {
        res.send(err);
      } else {
        res.json(posts);
      }
    });
  });

  // get one specific post
  app.get('/api/posts/:id', function (req, res) {
    Post.findOne({_id: req.params.id}, function (err, post) {
      if (err) {
        res.send(err);
      } else {
        res.json(post);
      }
    });
  });

  // add a new post
  app.post('/api/posts', function (req, res) {
    var newData = {
      title: req.body.title,
      body: req.body.body
    };

    var newPost = new Post(newData);

    newPost.save(function (err, newPost) {
      if (err) {
        res.status(500);
        res.json({status: 500, error: err});
        res.end();
      } else {
        res.json({status: 200, newPost: newPost});
        res.end();
      }
    });
  });

  // update one specific post
  app.put('/api/posts/:id', function (req, res) {
    var updateData = {
      title: req.body.title,
      body: req.body.body
    };

    Post.update({_id: req.params.id}, updateData, function (err, post) {
      if (err) {
        res.status(500);
        res.json({status: 500, error: err});
        res.end();
      } else {
        res.json({status: 200, post: post});
        res.end();
      }
    });
  });

  // delete one specific post
  app.delete('/api/posts/:id', function (req, res) {
    Post.remove({_id: req.params.id}, function (err, post) {
      if (err) {
        res.status(500);
        res.json({status: 500, error: err});
        res.end();
      } else {
        res.json({status: 200, message: 'post was successfully deleted'});
        res.end();
      }
    });
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  });
};