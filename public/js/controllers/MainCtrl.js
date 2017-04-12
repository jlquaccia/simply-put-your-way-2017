angular
  .module('simply-put-your-way')
  .controller('MainCtrl', ['$rootScope', function ($rootScope) {
    // make sure window is always scrolled to the top before state change
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
      $('html, body').animate({
        scrollTop: 0
      }, 0);
    });
  }]);