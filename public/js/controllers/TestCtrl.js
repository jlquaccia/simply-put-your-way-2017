angular
  .module('simply-put-your-way')
  .controller('TestCtrl', ['$scope', function ($scope) {
    // constructor(); {
    //   'ngInject';

    //   this._activate();

    // }

    // this.$inject = _activate

    // _activate(); {
      
      
    // }

    $scope.projectName = 'angular-flickity';
    $scope.demoDetail = 'simple demo';

    $scope.slides = [
      'http://bnj.bz/2p2S1X471H38/one.jpg',
      'http://bnj.bz/352I0q311A23/two.jpg',
      'http://bnj.bz/3j1J1h1s2o3p/three.jpg',
      'http://bnj.bz/0i0l442Z433Y/four.jpg',
    ];

    $scope.flickityOptions = {
      cellSelector: '.demo__slide',
      resize: false,
      setGallerySize: false,
      friction: .4,
      selectedAttraction: .1
    };
  }]);