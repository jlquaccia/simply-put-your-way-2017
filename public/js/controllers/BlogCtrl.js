angular
  .module('simply-put-your-way')
  .controller('BlogCtrl', ['$scope', '$state', 'Post', function ($scope, $state, Post) {
    // get all posts
    $scope.getPosts = function () {
      Post.get().then(function (response) {
        $scope.posts = response.data;
        console.log(response.data);
      }, function (error) {
        console.log(error);
      });
    };

    // create a new post
    $scope.createPost = function () {
      var newPost = {
        title: $scope.post.title,
        body: $scope.post.body
      };

      Post.create(newPost).then(function (response) {
        $scope.post.title = $scope.post.body = '';
        $state.go('blog');
      }, function (error) {
        console.log(error);
      });
    };

    $scope.getPosts();

    $scope.edit = 'blog edit';
    $scope.show = 'blog show';
    $scope.new = 'blog new';
  }]);