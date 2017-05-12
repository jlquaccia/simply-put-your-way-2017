angular
  .module('simply-put-your-way')
  .controller('BlogCtrl', ['$scope', '$state', '$stateParams', '$sce', 'Post', function ($scope, $state, $stateParams, $sce, Post) {
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
        console.log(response.data.body);
        $scope.post = response.data;
        $scope.body = $sce.trustAsHtml(response.data.body);
      }, function (error) {
        console.log(error);
      });
    };

    // only grab specific post on blog show or blog edit pages
    if ($state.current.name === 'blogShow' || $state.current.name === 'blogEdit') {
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

    // update a post
    $scope.updatePost = function () {
      var updatedPost = {
        title: $scope.post.title,
        body: $scope.post.body
      };

      Post.update($stateParams.id, updatedPost).then(function (response) {
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

    // only grab all posts on blog index page
    if ($state.current.name === 'blog') {
      $scope.getPosts();
    }

    $scope.edit = 'blog edit';
    $scope.show = 'blog show';
    $scope.new = 'blog new';
  }]);