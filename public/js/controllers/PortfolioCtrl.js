angular
  .module('simply-put-your-way')
  .controller('PortfolioCtrl', ['$scope', 'parallaxHelper', 'StorageIdeas', function ($scope, parallaxHelper, StorageIdeas) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    // get storage ideas
    $scope.storageIdeas = StorageIdeas;

    // toggle overlay
    $(document).ready(function () {
      $('#portfolio .storageIdeas .innerWrapper').click(function () {
        $('#portfolio .overlay-scale').addClass('storageIdeasOverlayOpen');
      });

      $('#portfolio .overlay .overlay-close').click(function () {
        $('#portfolio .overlay-scale').removeClass('storageIdeasOverlayOpen');
      });
    });
  }]);