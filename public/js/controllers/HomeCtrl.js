angular
  .module('simply-put-your-way')
  .controller('HomeCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    $scope.flickityOptions = {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 5000
    };
  }]);