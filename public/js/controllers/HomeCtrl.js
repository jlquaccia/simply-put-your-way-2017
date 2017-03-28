angular
  .module('simply-put-your-way')
  .controller('HomeCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);