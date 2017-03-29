angular
  .module('simply-put-your-way')
  .controller('NavbarCtrl', ['$scope', function ($scope) {
    // show scroll to top button after user has scrolled down the page
    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();

      if (scrollPos > 0) {
        $('.navWrapper .scrollTop').addClass('show-button');
      } else {
        $('.navWrapper .scrollTop').removeClass('show-button');
      }
    });
      
    // toggle mobile overlay
    $('.button a').click(function () {
      $('.overlay').fadeToggle(200);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    // scroll to top of page button
    $scope.scrollToTop = function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
    };
  }]);