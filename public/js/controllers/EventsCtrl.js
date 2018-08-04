angular
  .module('simply-put-your-way')
  .controller('EventsCtrl', ['$scope', 'parallaxHelper', 'imagePreloader', function ($scope, parallaxHelper, imagePreloader) {
    // preloading header image
    // $('<img/>').attr('src', '../images/new/Pink Hues.jpg').on('load', function () {
    //   $(this).remove();
    //   $('#donations .headerImage').css('background-image', 'url("../images/new/Pink Hues.jpg"), url("../images/subtle patterns/crossword.png")');
    // });

    imagePreloader.headStart();

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);
