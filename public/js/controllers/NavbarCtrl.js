angular
  .module('simply-put-your-way')
  .controller('NavbarCtrl', ['$scope', '$rootScope', '$state', '$timeout', '$mdToast', '$http', 'Auth', function ($scope, $rootScope, $state, $timeout, $mdToast, $http, Auth) {
    // handles events on scroll
    var lastScrollTop = 0;
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && !navigator.userAgent.match('CriOS');

    $http.get('/api/view-count')
      .then(
        function (response) {
          console.log('response: ', response.data[0]);
          $scope.viewCount = response.data[0].count;
          $scope.lastView = response.data[0].lastModified;
        },
        function (err) {
          console.error('error: ', err);
        }
      );

    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();
      var currentScroll = $(this).scrollTop();

      // show/hide scroll to top button when necessary
      if (scrollPos > 0) {
        $('.navWrapper .scrollTop').addClass('show-button');
      } else {
        $('.navWrapper .scrollTop').removeClass('show-button');
      }

      // show/hide of navbar in safari is buggy, decided to just disable it
      if (isSafari) {
        return;
      }

      // show/hide navbar when necessary
      if (currentScroll > lastScrollTop) {
        $('.navWrapper .headroom').removeClass('headroom--pinned');
        $('.navWrapper .headroom').addClass('headroom--unpinned');
      } else {
        $('.navWrapper .headroom').removeClass('headroom--unpinned');
        $('.navWrapper .headroom').addClass('headroom--pinned');
      }

      lastScrollTop = currentScroll;
    });
      
    // toggle mobile overlay
    $('.button, .navWrapper .overlay .closeOverlay, .navWrapper .overlay a').click(function () {
      $('.overlay').fadeToggle(200);
      $('body').toggleClass('overflowHidden');
      // $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    // scroll to top of page button
    $scope.scrollToTop = function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
    };

    $rootScope.logout = function () {
      $('.navWrapper .currentUser').addClass('fadeOutUp');

      $timeout(function () {
        Auth
        .logout()
        .then(
          function (response) {
            $rootScope.currentUser = null;

            // success flash message
            var successMsg = $mdToast.simple()
              .content('You are now logged out.')
              .hideDelay(4000);

            $mdToast.show(successMsg);

            $state.go('home');
          },
          function (err) {
            console.log(err);
          }
        );
      }, 700);
    };
  }]);