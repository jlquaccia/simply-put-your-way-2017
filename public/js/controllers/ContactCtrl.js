angular
  .module('simply-put-your-way')
  .controller('ContactCtrl', ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    // send message
    $scope.sendMessage = function (form) {
      if (form.$valid) {
        console.log('form is valid');
        console.log($scope.contactForm);
      } else {
        console.log('form is not valid');
      }
    };
  }]);