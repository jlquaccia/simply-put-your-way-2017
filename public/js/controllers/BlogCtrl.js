angular
  .module('simply-put-your-way')
  .controller('BlogCtrl', ['$scope', '$state', '$stateParams', 'Post', function ($scope, $state, $stateParams, Post) {
    // get all posts
    $scope.getPosts = function () {
      Post.getAll().then(function (response) {
        $scope.posts = response.data;
        console.log(response.data);
      }, function (error) {
        console.log(error);
      });
    };

    // get one post
    $scope.getPost = function (id) {
      Post.getOne(id).then(function (response) {
        $scope.post = response.data;
      }, function (error) {
        console.log(error);
      });
    };

    if ($state.current.name === 'blogShow') {
      $scope.getPost($stateParams.id);
    }

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

    // delete a post
    $scope.deletePost = function (id) {
      if (confirm('are you sure?')) {
        Post.delete(id);
        $scope.getPosts();
      } else {
        return;
      }
    };

    $scope.getPosts();

    $scope.edit = 'blog edit';
    $scope.show = 'blog show';
    $scope.new = 'blog new';
  }]);