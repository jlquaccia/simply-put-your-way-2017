var Post = require('./models/Post');
var User = require('./models/User')();
var ViewCount = require('./models/ViewCount');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportApi = require('./passport/passport')(User);
var mongoose = require('mongoose');

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

module.exports = function (app) {
  // ======================================================================
  // posts ==========================================================
  // ======================================================================
  // get all posts
  app.get('/api/posts', function (req, res) {
    var query = Post.find().sort({_id: -1});

    query.exec(function (err, posts) {
      if (err) {
        res.send(err);
      } else {
        res.json(posts);
      }
    });
  });

  // get one specific post
  app.get('/api/posts/:id', function (req, res) {
    Post.findOne({slug: req.params.id}, function (err, post) {
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
      preview_img_url: req.body.preview_img_url,
      description: req.body.description,
      body: req.body.body,
      slug: req.body.slug
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
      preview_img_url: req.body.preview_img_url,
      description: req.body.description,
      body: req.body.body,
      slug: req.body.slug
    };

    Post.update({slug: req.params.id}, updateData, function (err, post) {
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
    Post.remove({slug: req.params.id}, function (err, post) {
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
    req.checkBody('firstName', 'please enter your first name').notEmpty();
    req.checkBody('lastName', 'please enter your last name').notEmpty();
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
        to: 'info@simplyputyourway.net',
        subject: 'Simply Put Your Way: ' + req.body.subject,
        text: 'New message from ' + req.body.firstName + ' ' + req.body.lastName + '\n\n' + req.body.message
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }

        console.log('message %s sent: %s', info.messageId, info.response);
      });

      res.json({firstName: req.body.firstName});
    }
  });

  // ======================================================================
  // authentication ==========================================================
  // ======================================================================
  passport.use(new LocalStrategy(passportApi.localStrategy));
  passport.serializeUser(passportApi.serializeUser);
  passport.deserializeUser(passportApi.deserializeUser);

  app.post('/api/register', function (req, res) {
    var newUser = req.body;

    User
      .findUserByUsername(newUser.username)
      .then(
        function (user) {
          // determine if there is already an existing user by the provided credentials
          if (user) {
            // user already exists
            res.json(null);
          } else {
            // user does not exist, create a new one
            return User.createUser(newUser);
          }
        },
        function (err) {
          res.status(400).send(err);
        }
      )
      .then(
        function (user) {
          if (user) {
            req.login(user, function (err) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        },
        function (err) {
          res.status(400).send(err);
        }
      );
  });

  app.get('/api/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  });

  app.post('/api/logout', function (req, res) {
    req.logOut();
    res.send(200);
  });

  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    var user = req.user;

    res.json(user);
  });

  // ======================================================================
  // view count ==========================================================
  // ======================================================================
  // increment view count up by 1
  app.put('/api/view-count', function (req, res) {
    if (process.env.NODE_ENV) {
      // ViewCount
      // .update({_id: '59371581734d1d2b1e9366d9'}, {$inc: {count: 1}, $set: {lastModified: new Date()}})
      // .then(
      //   function (response) {
      //     console.log('response: ', response);
      //     res.json(response);
      //   },
      //   function (err) {
      //     console.error('error: ', err);
      //     res.status(500).send(err);
      //   }
      // );
    } else {
      ViewCount
      .update({_id: '5936f63f283bae267d1298aa'}, {$inc: {count: 1}, $set: {lastModified: new Date()}})
      .then(
        function (response) {
          console.log('response: ', response);
          res.json(response);
        },
        function (err) {
          console.error('error: ', err);
          res.status(500).send(err);
        }
      );
    }
  });

  // get current view count
  app.get('/api/view-count', function (req, res) {
    if (process.env.NODE_ENV) {
      // ViewCount.find({_id: '59371581734d1d2b1e9366d9'}, function (err, viewCount) {
      //   if (err) {
      //     console.error('error: ', err);
      //     res.status(500).send(err);
      //   } else {
      //     console.log('viewCount: ', viewCount);
      //     res.json(viewCount);
      //   }
      // });
    } else {
      ViewCount.find({_id: '5936f63f283bae267d1298aa'}, function (err, viewCount) {
        if (err) {
          console.error('error: ', err);
          res.status(500).send(err);
        } else {
          console.log('viewCount: ', viewCount);
          res.json(viewCount);
        }
      });
    }
  });

  // initialize page view counter
  app.post('/api/view-count', function (req, res) {
    var initCounter = new ViewCount({count: 0});

    initCounter.save(function (err, response) {
      if (err) return console.error(err);
      console.log('counter initialized');
    });
  });

  // ======================================================================
  // angular =========================================================
  // ======================================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('public/index.html');
  });
};