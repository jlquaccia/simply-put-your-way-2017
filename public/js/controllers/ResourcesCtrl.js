angular
  .module('simply-put-your-way')
  .controller('ResourcesCtrl', ['$scope', 'parallaxHelper', 'imagePreloader', function ($scope, parallaxHelper, imagePreloader) {
    imagePreloader.headStart();

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);