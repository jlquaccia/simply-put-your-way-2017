angular
  .module('simply-put-your-way')
  .factory('Auth', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {
    var user = null;

    function isLoggedIn () {
      if (user) {
        return true;
      } else {
        return false;
      }
    }

    function getUserStatus () {
      return $http.get('/user/status')
        .success(function (data) {
          if (data.status) {
            user = true;
          } else {
            user = false;
          }
        })
        .error(function (data) {
          console.log(data);
          user = false;
        });
    }

    function login (username, password) {
      var deferred = $q.defer();

      $http.post('/user/login', {username: username, password: password})
        .success(function (data, status) {
          if (status === 200 && data.status) {
            console.log(username + ' has successfully logged in!');
            user = true;
            deferred.resolve();
          } else {
            console.log('data: ' + data, 'status: ' + status);
            user = false;
            deferred.reject();
          }
        })
        .error(function (data) {
          console.log(data);
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    }

    function logout () {
      var deferred = $q.defer();

      $http.get('/user/logout')
        .success(function (data) {
          user = false;
          deferred.resolve();
        })
        .error(function (data) {
          console.log(data);
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    }

    function register (username, password) {
      var deferred = $q.defer();

      $http.post('/user/register', {username: username, password: password})
        .success(function (data, status) {
          if (status === 200 && data.status) {
            console.log(username + ' has successfully been registered');
            deferred.resolve();
          } else {
            console.log('data: ' + data, 'status: ' + status);
            deferred.reject();
          }
        })
        .error(function (data) {
          console.log(data);
          deferred.reject();
        });

      return deferred.promise;
    }

    return {
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    };
  }]);