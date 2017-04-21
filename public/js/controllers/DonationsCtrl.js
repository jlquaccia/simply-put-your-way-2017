angular
  .module('simply-put-your-way')
  .controller('DonationsCtrl', ['$scope', 'parallaxHelper', 'imagePreloader', function ($scope, parallaxHelper, imagePreloader) {
    // preloading header image
    // $('<img/>').attr('src', '../images/new/Pink Hues.jpg').on('load', function () {
    //   $(this).remove();
    //   $('#donations .headerImage').css('background-image', 'url("../images/new/Pink Hues.jpg"), url("../images/subtle patterns/crossword.png")');
    // });

    // preloading header image
    var images = [
      '../images/new/Pink Hues.jpg',
      '../images/subtle patterns/crossword.png'];

    var status_cb = function(status_pct, img) { console.log('Done percent:', status_pct, img );};

    var finish_cb = function() {
      $('#donations .headerImage').css('background-image', 'url("../images/new/Pink Hues.jpg"), url("../images/subtle patterns/crossword.png")');
      console.log("All done!");
    };

    imagePreloader.preLoadImages(images, 'linear', finish_cb, status_cb);
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);
  }]);