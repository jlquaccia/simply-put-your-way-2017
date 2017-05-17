angular
  .module('simply-put-your-way')
  .controller('MainCtrl', ['$rootScope', '$state', 'imagePreloader', function ($rootScope, $state, imagePreloader) {
    // make sure window is always scrolled to the top before state change
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
      $('html, body').animate({
        scrollTop: 0
      }, 0);
    });

    $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState, fromParams) {
      if ($state.current.name === 'blogShow') {
        $('body, html').css('height', 'inherit');
      } else {
        $('body, html').css('height', '100%');
      }
    });

    $rootScope.currentUrl = window.location.href;
  }]);