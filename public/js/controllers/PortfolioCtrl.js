angular
  .module('simply-put-your-way')
  .controller('PortfolioCtrl', ['$scope', 'parallaxHelper', 'StorageIdeas', function ($scope, parallaxHelper, StorageIdeas) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    // get storage ideas
    $scope.storageIdeas = StorageIdeas;
  }]);