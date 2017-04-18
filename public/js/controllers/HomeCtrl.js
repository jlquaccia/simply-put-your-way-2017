angular
  .module('simply-put-your-way')
  .controller('HomeCtrl', ['$scope', 'parallaxHelper', 'Pinterest', 'Testimonials', function ($scope, parallaxHelper, Pinterest, Testimonials) {
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
      autoPlay: 5000
    };

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