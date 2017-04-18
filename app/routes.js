const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'jlquaccia@gmail.com',
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: process.env.GMAIL_ACCESS_TOKEN
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
    req.checkBody('name', 'please enter your name').notEmpty();
    req.checkBody('email', 'please enter a valid email').notEmpty().isEmail();
    req.checkBody('subject', 'you must leave a subject line').notEmpty();
    req.checkBody('message', 'you must leave a message').notEmpty();

    var errors = req.validationErrors(true);

    if (errors) {
      res.send({errors: errors});
      return;
    } else {
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

      res.json({name: req.body.name});
    }
  });

  // ======================================================================
  // angular =========================================================
  // ======================================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('public/index.html');
  });
};