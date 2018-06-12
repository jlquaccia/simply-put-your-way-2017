angular
  .module('simply-put-your-way')
  .controller('VirtualOrganizingCtrl', ['$scope', 'parallaxHelper', 'imagePreloader', function ($scope, parallaxHelper, imagePreloader) {
    // // preloading header image
    // $('<img/>').attr('src', '../images/new/Single Wheel Bike.jpg').on('load', function () {
    //   $(this).remove();
    //   $('#about .headerImage').css('background-image', 'url("../images/new/Single Wheel Bike.jpg"), url("../images/subtle patterns/crossword.png")');
    // });

    imagePreloader.headStart();

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);
