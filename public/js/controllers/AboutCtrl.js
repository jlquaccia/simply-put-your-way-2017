angular
  .module('simply-put-your-way')
  .controller('AboutCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    // preloading header image
    $('<img/>').attr('src', '../images/new/Single Wheel Bike.jpg').on('load', function () {
      $(this).remove();
      $('#about .headerImage').css('background-image', 'url("../images/new/Single Wheel Bike.jpg"), url("../images/subtle patterns/crossword.png")');
    });

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);