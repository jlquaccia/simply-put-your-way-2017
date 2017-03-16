angular
  .module('simply-put-your-way')
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
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
      .state('enjoy-the-holidays', {
        url: '/enjoy-the-holidays',
        controller: 'EnjoyTheHolidaysCtrl as enjoyTheHolidays',
        templateUrl: '/views/enjoy-the-holidays.html'
      })
      .state('kids-ready-for-school', {
        url: '/kids-ready-for-school',
        controller: 'KidsReadyForSchoolCtrl as kidsReadyForSchool',
        templateUrl: '/views/kids-ready-for-school.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        controller: 'PortfolioCtrl as portfolio',
        templateUrl: '/views/portfolio.html'
      })
      .state('prepare-for-a-move', {
        url: '/prepare-for-a-move',
        controller: 'PrepareForAMoveCtrl as prepareForAMove',
        templateUrl: '/views/prepare-for-a-move.html'
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
      .state('time-management-strategies', {
        url: '/time-management-strategies',
        controller: 'TimeManagementStrategiesCtrl as timeManagementStrategies',
        templateUrl: '/views/time-management-strategies.html'
      })
      .state('tips', {
        url: '/tips',
        controller: 'TipsCtrl as tips',
        templateUrl: '/views/tips.html'
      })
      .state('what-is-an-organizer', {
        url: '/what-is-an-organizer',
        controller: 'WhatIsAnOrganizerCtrl as whatIsAnOrganizer',
        templateUrl: '/views/what-is-an-organizer.html'
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
        templateUrl: '/views/blog/new.html'
      })
      .state('blogEdit', {
        url: '/blogEdit',
        controller: 'BlogCtrl as blog',
        templateUrl: '/views/blog/edit.html'
      })
      .state('blogShow', {
        url: '/blog/:id',
        controller: 'BlogCtrl as blog',
        templateUrl: '/views/blog/show.html'
        // resolve: {
        //   getCurrentPost: ['$stateParams', 'Post', function ($stateParams, Post) {
        //     Post.getOne($stateParams.id).then(function (response) {
        //       // console.log(response.data);
        //       $scope.post = response.data;
        //     }, function (error) {
        //       console.log(error);
        //     });
        //   }]
        // }
      });

    $urlRouterProvider
      .otherwise('/');
  }]);