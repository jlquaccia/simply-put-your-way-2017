angular
  .module('simply-put-your-way')
  .controller('HomeCtrl', ['$scope', 'parallaxHelper', 'Pinterest', 'Testimonials', 'FlickityService', 'imagePreloader', function ($scope, parallaxHelper, Pinterest, Testimonials, FlickityService, imagePreloader) {
    // preloading header image
    // $('<img/>').attr('src', '../images/Fun Decor.jpg').on('load', function () {
    //   $(this).remove();
    //   $('#home .headerImage').css('background-image', 'url("../images/Fun Decor.jpg"), url("../images/subtle patterns/crossword.png")');
    // });
    
    imagePreloader.headStart();

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
    $scope.spacerImage = parallaxHelper.createAnimator(-0.3,150,-150);

    // testimonials
    // tesimonials carousel
    $scope.flickityOptions = {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 10000,
      pauseAutoPlayOnHover: false
    };

    var testimonialsFlickity = document.getElementById('myCustomId');
    
    // make sure carousel will pause on click only and will resume autoplay next time the carousel is visible (ex. user scrolls/mouseleaves away and then comes back)
    testimonialsFlickity.addEventListener('mouseleave', function (e) {
      if (FlickityService.instances[0].instance.player.state === 'stopped') {
        FlickityService.instances[0].instance.player.onVisibilityPlay();
      }
    });

    window.addEventListener("touchstart", function(e) {
      console.log(e.defaultPrevented);  // will be false
      e.preventDefault();   // does nothing since the listener is passive
      console.log(e.defaultPrevented);  // still false
    }, Modernizr.passiveeventlisteners ? {passive: false} : true);

    $scope.testimonials = Testimonials;

    // getting pinterest data
    // default board: its your space
    Pinterest.getBoardPins('490329546869188172').then(function (response) {
      console.log(response.data);
      $scope.currentBoard = response.data;
    });

    // // getting pinterest data
    // if (Pinterest.isLoggedIn()) {
    //   // default board: its your space
    //   Pinterest.getBoardPins('490329546869188172').then(function (response) {
    //     console.log(response.data);
    //     $scope.currentBoard = response.data;
    //   });
    // } else {
    //   Pinterest.login(function (response) {
    //     console.log('logged into pinterest');

    //     // default board: its your space
    //     Pinterest.getBoardPins('490329546869188172').then(function (response) {
    //       $scope.currentBoard = response.data;
    //     });
    //   });
    // }

    // set active pinterest board
    $('section.pinterest .boards li').click(function () {
      if (!$(this).hasClass('active')) {
        $('section.pinterest .boards li').removeClass('active');
        $(this).addClass('active');

        if ($(this).attr('id') === 'itsYourSpace') {
          Pinterest.getBoardPins('490329546869188172').then(function (response) {
            $scope.currentBoard = response.data;
          });
        } else if ($(this).attr('id') === 'repurposeIt') {
          Pinterest.getBoardPins('490329546869301849').then(function (response) {
            $scope.currentBoard = response.data;
          });
        } else if ($(this).attr('id') === 'redecorate') {
          Pinterest.getBoardPins('490329546869301857').then(function (response) {
            $scope.currentBoard = response.data;
          });
        }
      } else {
        return;
      }
    });
  }]);