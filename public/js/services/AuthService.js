angular
  .module('simply-put-your-way')
  .factory('Auth', ['$http', function ($http) {
    var api = {
      register: register,
      logout: logout
    };

    return api;

    function register (user) {
      return $http.post('/api/register', user);
    }

    function logout () {
      return $http.post('/api/logout');
    }
  }]);