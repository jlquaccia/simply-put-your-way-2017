angular
  .module('simply-put-your-way')
  .controller('PortfolioCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);