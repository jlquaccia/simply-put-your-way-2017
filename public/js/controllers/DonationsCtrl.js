angular
  .module('simply-put-your-way')
  .controller('DonationsCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    // preloading header image
    $('<img/>').attr('src', '../images/new/Pink Hues.jpg').on('load', function () {
      $(this).remove();
      $('#donations .headerImage').css('background-image', 'url("../images/new/Pink Hues.jpg"), url("../images/subtle patterns/crossword.png")');
    });
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);