angular
  .module('simply-put-your-way')
  .controller('NavbarCtrl', ['$scope', '$rootScope', '$state', 'Auth', function ($scope, $rootScope, $state, Auth) {
    // handles events on scroll
    var lastScrollTop = 0;

    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();
      var currentScroll = $(this).scrollTop();

      // show/hide scroll to top button when necessary
      if (scrollPos > 0) {
        $('.navWrapper .scrollTop').addClass('show-button');
      } else {
        $('.navWrapper .scrollTop').removeClass('show-button');
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
    $('.button a, .navWrapper .overlay .closeOverlay, .navWrapper .overlay a').click(function () {
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

    $scope.logout = function () {
      Auth
        .logout()
        .then(
          function (response) {
            $rootScope.currentUser = null;
            $state.go('home');
          },
          function (err) {
            console.log(err);
          }
        );
    };
  }]);