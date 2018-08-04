angular
  .module('simply-put-your-way')
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$qProvider', '$provide', function ($stateProvider, $locationProvider, $urlRouterProvider, $qProvider, $provide) {
    $qProvider.errorOnUnhandledRejections(false);

    $locationProvider
      .html5Mode({
        enabled: true
      });

    $stateProvider
      // .state('test', {
      //   url: '/test',
      //   controller: 'TestCtrl as test',
      //   templateUrl: '/views/test.html'
      // })
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/views/home.html'
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl as about',
        templateUrl: '/views/about.html'
      })
      .state('contact', {
        url: '/contact',
        controller: 'ContactCtrl as contact',
        templateUrl: '/views/contact.html'
      })
      .state('donations', {
        url: '/donations',
        controller: 'DonationsCtrl as donations',
        templateUrl: '/views/donations.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        controller: 'PortfolioCtrl as portfolio',
        templateUrl: '/views/portfolio.html'
      })
      .state('rates', {
        url: '/rates',
        controller: 'RatesCtrl as rates',
        templateUrl: '/views/rates.html'
      })
      .state('resources', {
        url: '/resources',
        controller: 'ResourcesCtrl as resources',
        templateUrl: '/views/resources.html'
      })
      .state('services', {
        url: '/services',
        controller: 'ServicesCtrl as services',
        templateUrl: '/views/services.html'
      })
      .state('what-is-an-organizer', {
        url: '/what-is-an-organizer',
        controller: 'WhatIsAnOrganizerCtrl as whatIsAnOrganizer',
        templateUrl: '/views/what-is-an-organizer.html'
      })
      .state('virtual-organizing', {
        url: '/virtual-organizing',
        controller: 'VirtualOrganizingCtrl as virtualOrganizer',
        templateUrl: '/views/virtual-organizing.html'
      })
      .state('events', {
        url: '/events',
        controller: 'EventsCtrl as events',
        templateUrl: '/views/events.html'
      })

      // blog
      .state('blog', {
        url: '/blog',
        controller: 'BlogCtrl as blog',
        templateUrl: '/views/blog/index.html'
      })
      .state('blogNew', {
        url: '/blog/new',
        controller: 'BlogCtrl as blog',
        templateUrl: '/views/blog/new.html',
        resolve: {
          isCurrentUser: isCurrentUser
        }
      })
      .state('blogEdit', {
        url: '/blog/edit/:id',
        controller: 'BlogCtrl as blog',
        templateUrl: '/views/blog/edit.html',
        resolve: {
          isCurrentUser: isCurrentUser
        }
      })
      .state('blogShow', {
        url: '/blog/:id',
        controller: 'BlogCtrl as blog',
        templateUrl: '/views/blog/show.html'
      })

      // auth
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as auth',
        templateUrl: 'views/auth/login.html'
      });
      // .state('register', {
      //   url: '/register',
      //   controller: 'AuthCtrl as auth',
      //   templateUrl: 'views/auth/register.html'
      // });

    $urlRouterProvider
      .otherwise('/');

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
      // $delegate is the taOptions we are decorating
      // register the tool with textAngular

      // BACKGROUNDCOLOR DOESN'T WORK, WORKS WITH EDITOR BUT DOESN'T PRESERVE WHEN SAVING TO MONGODB. THINK IT IS A BUG WITH TEXTANGULAR

      // taRegisterTool('backgroundColor', {
      //   display: "<input id='backgroundColor' type='color'></input>",
      //   action: function(){
      //     var color;
      //     var me = this;

      //     $('#backgroundColor').change(function () {
      //       color = $('#backgroundColor').val();
      //       me.$editor().wrapSelection('backcolor', color);
      //     });
      //   }
      // });

      taRegisterTool('fontColor', {
        display: "<input id='foregroundColor' type='color'></input>",
        action: function(){
          var color;
          var me = this;

          $('#foregroundColor').change(function () {
            color = $('#foregroundColor').val();
            me.$editor().wrapSelection('forecolor', color);
          });
        }
      });

      taRegisterTool('fontName', {
          display: "<span class='bar-btn-dropdown dropdown'>" +
          "<button class='btn btn-blue dropdown-toggle' type='button' ng-disabled='showHtml()' style='padding-top: 4px'><i class='fa fa-font'></i><i class='fa fa-caret-down'></i></button>" +
          "<ul class='dropdown-menu'><li ng-repeat='o in options'><button class='btn btn-blue checked-dropdown' style='font-family: {{o.css}}; width: 100%' type='button' ng-click='action($event, o.css)'><i ng-if='o.active' class='fa fa-check'></i>{{o.name}}</button></li></ul></span>",
          action: function (event, font) {
              //Ask if event is really an event.
              if (!!event.stopPropagation) {
                  //With this, you stop the event of textAngular.
                  event.stopPropagation();
                  //Then click in the body to close the dropdown.
                  $("body").trigger("click");
              }
              return this.$editor().wrapSelection('fontName', font);
          },
          options: [
              { name: 'Sans-Serif', css: 'Arial, Helvetica, sans-serif' },
              { name: 'Serif', css: "'times new roman', serif" },
              { name: 'Wide', css: "'arial black', sans-serif" },
              { name: 'Narrow', css: "'arial narrow', sans-serif" },
              { name: 'Comic Sans MS', css: "'comic sans ms', sans-serif" },
              { name: 'Courier New', css: "'courier new', monospace" },
              { name: 'Garamond', css: 'garamond, serif' },
              { name: 'Georgia', css: 'georgia, serif' },
              { name: 'Tahoma', css: 'tahoma, sans-serif' },
              { name: 'Trebuchet MS', css: "'trebuchet ms', sans-serif" },
              { name: "Helvetica", css: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
              { name: 'Verdana', css: 'verdana, sans-serif' },
              { name: 'Proxima Nova', css: 'proxima_nova_rgregular' }
          ]
      });

      taRegisterTool('fontSize', {
              display: "<span class='bar-btn-dropdown dropdown'>" +
              "<button class='btn btn-blue dropdown-toggle' type='button' ng-disabled='showHtml()' style='padding-top: 4px'><i class='fa fa-text-height'></i><i class='fa fa-caret-down'></i></button>" +
              "<ul class='dropdown-menu'><li ng-repeat='o in options'><button class='btn btn-blue checked-dropdown' style='font-size: {{o.css}}; width: 100%' type='button' ng-click='action($event, o.value)'><i ng-if='o.active' class='fa fa-check'></i> {{o.name}}</button></li></ul>" +
              "</span>",
              action: function (event, size) {
                  //Ask if event is really an event.
                  if (!!event.stopPropagation) {
                      //With this, you stop the event of textAngular.
                      event.stopPropagation();
                      //Then click in the body to close the dropdown.
                      $("body").trigger("click");
                  }
                  return this.$editor().wrapSelection('fontSize', parseInt(size));
              },
              options: [
                  { name: 'xx-small', css: 'xx-small', value: 1 },
                  { name: 'x-small', css: 'x-small', value: 2 },
                  { name: 'small', css: 'small', value: 3 },
                  { name: 'medium', css: 'medium', value: 4 },
                  { name: 'large', css: 'large', value: 5 },
                  { name: 'x-large', css: 'x-large', value: 6 },
                  { name: 'xx-large', css: 'xx-large', value: 7 }

              ]
          });

      // add the button to the default toolbar definition
      taOptions.toolbar[1].push('backgroundColor', 'fontColor', 'fontName', 'fontSize');

      return taOptions;
    }]);
  }])
  .run(function ($q, $http, $rootScope, $FB, LocalStorage) {
    $FB.init('1199346513410372', 'US');

    var deferred = $q.defer();

    $http.get('/api/loggedin')
      .then(
        function (user) {
          $rootScope.errorMessage = null;
          // console.log(user.data);

          if (user.data !== '0') {
            // User is Authenticated
            $rootScope.currentUser = user.data;
            // console.log('user is logged in');
            deferred.resolve();
          } else {
            // User is not Authenticated
            deferred.reject();
            // $rootScope.errorMessage = 'You need to log in.';
            // console.log('user is not logged in');
          }
        },
        function (err) {
          console.log(err);
          deferred.reject();
        }
      );

      // console.log('LocalStorage: ', LocalStorage.get('SPYWSiteHasBeenVisited'));

      if (!LocalStorage.get('SPYWSiteHasBeenVisited')) {
        // update site view count
        // console.log('site has not been visited');
        $http.put('/api/view-count');
        LocalStorage.set('SPYWSiteHasBeenVisited', true);
      } else {
        // console.log('site has been visited');
      }

      return deferred.promise;
  });

function isCurrentUser ($q, $http, $rootScope, $state) {
  var deferred = $q.defer();

  $http.get('/api/loggedin')
    .then(
      function (user) {
        if (user.data !== '0') {
          // User is Authenticated
          deferred.resolve();
        } else {
          // User is not Authenticated
          $state.go('login');
          deferred.reject();
        }
      },
      function (err) {
        console.log(err);
        deferred.reject();
      }
    );

    return deferred.promise;
}

// function hasVisitedSite ($q, LocalStorage) {
//   var deferred = $q.defer();

//   LocalStorage.get('SPYWSiteHasBeenVisited')
//     .then(
//       function () {
//         console.log('LocalStorage: ', LocalStorage.get('SPYWSiteHasBeenVisited'));

//         if (!LocalStorage.get('SPYWSiteHasBeenVisited')) {
//           // update site view count
//           console.log('site has not been visited');
//           $http.put('/api/view-count');
//           LocalStorage.set('SPYWSiteHasBeenVisited', true);
//           deferred.resolve();
//         } else {
//           console.log('site has been visited');
//           deferred.reject();
//         }
//       },
//       function (err) {
//         console.log(err);
//         deferred.reject();
//       }
//     );

//   return deferred.promise;
// }
