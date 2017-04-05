angular
  .module('simply-put-your-way')
  .controller('ServicesCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);