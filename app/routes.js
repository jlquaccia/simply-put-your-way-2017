const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'jquatch78@gmail.com',
    clientId: '1063535587753-8ip00vor4vn5ol9joccslf4e7kparrdr.apps.googleusercontent.com',
    clientSecret: '-thOniwv47AGP3Gf_8loGOoC',
    refreshToken: '1/kCKuFuJm6O6rgTgsqYwBHmWyUnK75L7JAwKN7pyQZybRdQI0GRvKWlBkRw-Bnb5F',
    accessToken: 'ya29.GlswBD4bxhb-f3T0NcK7dHiUwUhfXQbXoAP-O8zM5a13SsZi9l_Yb8vCcFONzE0kpZp9n1mewBq1bDc6NWVPHbbkibCsGxjM1wq-R1RASFhWf4eclwH4Mr1SSjhO'
    // pass: '$$27R3sJQ$$$$'
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
      to: 'jquatch78@gmail.com',
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