angular
  .module('simply-put-your-way')
  .controller('BlogCtrl', ['$scope', function ($scope) {
    $scope.index = 'blog index';
    $scope.edit = 'blog edit';
    $scope.show = 'blog show';
    $scope.new = 'blog new';
  }]);