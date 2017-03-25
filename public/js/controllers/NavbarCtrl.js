angular
  .module('simply-put-your-way')
  .controller('NavbarCtrl', ['$scope', function ($scope) {
    // toggle mobile overlay
    $('.button a').click(function () {
      $('.overlay').fadeToggle(200);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
  }]);