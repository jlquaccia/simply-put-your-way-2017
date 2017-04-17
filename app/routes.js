const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'jlquaccia@gmail.com',
    clientId: '1056918800491-snsb8u2jnkceks8bs4c2ns8aan2h9aoe.apps.googleusercontent.com',
    clientSecret: 'Mr_2CSeDNNHWFlBC5gI327xl',
    refreshToken: '1/tQByriGl4n8XcUe7XiTFXRCXb3ccZ-EHF11FcY6514w',
    accessToken: 'ya29.GlswBIDfxYgpfRzyu1tO-HHG8rBJE7HeI9wfdOoirrzyTaCKUUlAgT9lkIQx5Ewfr-7rgEy-z42uT6cRE0PWyLzenkjoPlO_OjFInIhD3_Wv8v6WHhdR4mZ4ABhy'
  }
});

var Post = require('./models/Post');

module.exports = function (app) {
  // ======================================================================
  // posts ==========================================================
  // ======================================================================
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

  // ======================================================================
  // contact form ==========================================================
  // ======================================================================
  app.post('/api/contact-form', function (req, res) {
    // setup email data with unicode symbols
    let mailOptions = {
      from: req.body.email,
      to: 'jlquaccia@gmail.com',
      subject: req.body.name + ': ' + req.body.subject,
      text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }

      console.log('message %s sent: %s', info.messageId, info.response);
    });

    res.json(req.body.name);
  });

  app.get('/api/gmail-redirect', function (req, res) {
    console.log('request: ' + req, 'response: ' + res);
  });

  // ======================================================================
  // angular =========================================================
  // ======================================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('public/index.html');
  });
};