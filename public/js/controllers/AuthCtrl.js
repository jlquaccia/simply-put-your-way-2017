angular
  .module('simply-put-your-way')
  .controller('AuthCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    $scope.login = function () {
      $scope.error = false;

      Auth.login($scope.loginForm.username, $scope.loginForm.password)
        .then(function () {
          $state.go('blog');
          $scope.loginForm = {};
        })
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = 'Invalid username and/or password';
          $scope.loginForm = {};
        });
    };

    $scope.logout = function () {
      Auth.logout()
        .then(function () {
          $state.go('blog');
        });
    };

    $scope.register = function () {
      $scope.error = false;

      Auth.register($scope.registerForm.username, $scope.registerForm.password)
        .then(function () {
          $state.go('blog');
          $scope.registerForm = {};
        })
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = 'Something went wrong!';
          $scope.registerForm = {};
        });
    };
  }]);