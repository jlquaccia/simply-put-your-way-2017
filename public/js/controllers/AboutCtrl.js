angular
  .module('simply-put-your-way')
  .controller('AboutCtrl', ['$scope', 'parallaxHelper', 'imagePreloader', function ($scope, parallaxHelper, imagePreloader) {
    // preloading header image
    // $('<img/>').attr('src', '../images/new/Single Wheel Bike.jpg').on('load', function () {
    //   $(this).remove();
    //   $('#about .headerImage').css('background-image', 'url("../images/new/Single Wheel Bike.jpg"), url("../images/subtle patterns/crossword.png")');
    // });

    // preloading header image
    var images = [
      '../images/new/Single Wheel Bike.jpg',
      '../images/subtle patterns/crossword.png'];

    var status_cb = function(status_pct, img) { console.log('Done percent:', status_pct, img );};

    var finish_cb = function() {
      $('#about .headerImage').css('background-image', 'url("../images/new/Single Wheel Bike.jpg"), url("../images/subtle patterns/crossword.png")');
      console.log("All done!");
    };

    imagePreloader.preLoadImages(images, 'linear', finish_cb, status_cb);

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);