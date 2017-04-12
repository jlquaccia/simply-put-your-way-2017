angular
  .module('simply-put-your-way')
  .controller('MainCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
      $('html, body').animate({
        scrollTop: 0
      }, 0);
    });
  }]);