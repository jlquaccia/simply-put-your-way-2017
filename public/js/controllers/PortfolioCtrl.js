angular
  .module('simply-put-your-way')
  .controller('PortfolioCtrl', ['$scope', 'parallaxHelper', 'StorageIdeas', function ($scope, parallaxHelper, StorageIdeas) {
    var currentStorageIdeaIndex = null;

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    // get storage ideas
    $scope.storageIdeas = StorageIdeas;

    // toggle overlay
    $(document).ready(function () {
      $scope.toggleOverlay = function () {
        $('#portfolio .overlay-scale').toggleClass('storageIdeasOverlayOpen');
      };

      $scope.setCurrentStorageIdea = function (index) {
        $scope.currentStorageIdea = StorageIdeas[index];
        currentStorageIdeaIndex = index;
      };

      $scope.next = function () {
        if (currentStorageIdeaIndex < StorageIdeas.length - 1) {
          currentStorageIdeaIndex++;
          console.log(currentStorageIdeaIndex);
          $scope.currentStorageIdea = StorageIdeas[currentStorageIdeaIndex];
        } else {
          currentStorageIdeaIndex = 0;
          $scope.currentStorageIdea = StorageIdeas[currentStorageIdeaIndex];
        }
      };

      $scope.prev = function () {
        if (currentStorageIdeaIndex > 0) {
          currentStorageIdeaIndex--;
          console.log(currentStorageIdeaIndex);
          $scope.currentStorageIdea = StorageIdeas[currentStorageIdeaIndex];
        } else {
          currentStorageIdeaIndex = StorageIdeas.length - 1;
          $scope.currentStorageIdea = StorageIdeas[currentStorageIdeaIndex];
        }
      };
    });
  }]);