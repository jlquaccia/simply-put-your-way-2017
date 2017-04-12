angular
  .module('simply-put-your-way')
  .controller('AboutCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);