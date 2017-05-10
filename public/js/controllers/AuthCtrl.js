angular
  .module('simply-put-your-way')
  .controller('AuthCtrl', ['$scope', '$state', '$rootScope', 'Auth', function ($scope, $state, $rootScope, Auth) {
    $scope.register = function (user) {
      $scope.errorMessage = null;

      if (user.password !== user.password2 || !user.password || !user.password2) {
        $scope.errorMessage = "Your passwords don't match.";
      } else {
        Auth
          .register(user)
          .then(
            function (response) {
              var user = response.data;

              if (user !== null) {
                $rootScope.currentUser = user;
                $state.go('blog');
              } else {
                console.log('User already exists');
                $scope.errorMessage = 'User already exists';
              }
            },
            function (err) {
              console.log(err);
              $scope.errorMessage = err;
            }
          );
      }
    };

    $scope.login = function (user) {
      $scope.errorMessage = null;

      if (user) {
        Auth
          .login(user)
          .then(
            function (response) {
              $rootScope.currentUser = response.data;
              $state.go('blog');
            },
            function (err) {
              $scope.errorMessage = err.data;
            }
          );
      }
    };
  }]);