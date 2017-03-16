angular
  .module('simply-put-your-way')
  .factory('Post', ['$http', function ($http) {
    return {
      // get all posts
      getAll: function () {
        return $http.get('/api/posts');
      },
      // get one post
      getOne: function (id) {
        return $http.get('/api/posts/' + id);
      },
      // create a new post
      create: function (postData) {
        return $http.post('/api/posts', postData);
      },
      // delete a post
      delete: function (id) {
        return $http.delete('/api/posts/' + id);
      },
      // update a post
      update: function (id, postData) {
        return $http.put('/api/posts/' + id, postData);
      }
    };
  }]);