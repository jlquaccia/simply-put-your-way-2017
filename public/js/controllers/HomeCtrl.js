angular
  .module('simply-put-your-way')
  .controller('HomeCtrl', ['$scope', 'parallaxHelper', 'Pinterest', function ($scope, parallaxHelper, Pinterest) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
    $scope.spacerImage = parallaxHelper.createAnimator(-0.3,150,-150);

    // tesimonials carousel
    $scope.flickityOptions = {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 5000
    };

    // getting pinterest data
    if (Pinterest.isLoggedIn()) {
      // board: its your space
      Pinterest.getBoardPins('490329546869188172').then(function (response) {
        $scope.itsYourSpace = response.data;
      });

      // board: repurpose it
      Pinterest.getBoardPins('490329546869301849').then(function (response) {
        $scope.repurposeIt = response.data;
      });

      // board: redecorate
      Pinterest.getBoardPins('490329546869301857').then(function (response) {
        $scope.redecorate = response.data;
      });
    } else {
      Pinterest.login(function (response) {
        console.log('logged into pinterest');

        // board: its your space
        Pinterest.getBoardPins('490329546869188172').then(function (response) {
          $scope.itsYourSpace = response.data;
        });

        // board: repurpose it
        Pinterest.getBoardPins('490329546869301849').then(function (response) {
          $scope.repurposeIt = response.data;
        });

        // board: redecorate
        Pinterest.getBoardPins('490329546869301857').then(function (response) {
          $scope.redecorate = response.data;
        });
      });
    }
  }]);