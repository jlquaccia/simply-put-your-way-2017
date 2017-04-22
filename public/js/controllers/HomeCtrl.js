angular
  .module('simply-put-your-way')
  .controller('HomeCtrl', ['$scope', 'parallaxHelper', 'Pinterest', 'Testimonials', 'FlickityService', 'imagePreloader', function ($scope, parallaxHelper, Pinterest, Testimonials, FlickityService, imagePreloader) {    
    imagePreloader.headStart();
    imagePreloader.testimonialImages();

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
    // testimonialsFlickity.addEventListener('mouseleave', function (e) {
    //   if (FlickityService.instances[0].instance.player.state === 'stopped') {
    //     FlickityService.instances[0].instance.player.onVisibilityPlay();
    //   }
    // });

    $scope.testimonials = Testimonials;

    // mobile only
    var currentTestimonialIndex = 0;
    $scope.mobileTestimonial = Testimonials[currentTestimonialIndex];

    $scope.next = function () {
      if (currentTestimonialIndex < Testimonials.length - 1) {
        currentTestimonialIndex++;
        console.log(currentTestimonialIndex);
        $scope.mobileTestimonial = Testimonials[currentTestimonialIndex];
      } else {
        currentTestimonialIndex = 0;
        $scope.mobileTestimonial = Testimonials[currentTestimonialIndex];
      }
    };

    $scope.prev = function () {
      if (currentTestimonialIndex > 0) {
        currentTestimonialIndex--;
        console.log(currentTestimonialIndex);
        $scope.mobileTestimonial = Testimonials[currentTestimonialIndex];
      } else {
        currentTestimonialIndex = Testimonials.length - 1;
        $scope.mobileTestimonial = Testimonials[currentTestimonialIndex];
      }
    };
    // end mobile only

    // getting pinterest data
    // default board: its your space
    Pinterest.getBoardPins('490329546869188172').then(function (response) {
      console.log(response.data);
      $scope.currentBoard = response.data;
    });

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