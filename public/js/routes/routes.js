angular
  .module('simply-put-your-way')
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('test', {
        url: '/test',
        controller: 'TestCtrl as test',
        templateUrl: '/views/test.html'
      })
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
        url: '/blog/edit/:id',
        controller: 'BlogCtrl as blog',
        templateUrl: '/views/blog/edit.html'
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
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as auth',
        templateUrl: 'views/auth/register.html'
      });

    $urlRouterProvider
      .otherwise('/');
  }]);