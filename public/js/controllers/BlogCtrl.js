angular
  .module('simply-put-your-way')
  .controller('BlogCtrl', ['$scope', '$state', '$stateParams', '$sce', 'Post', 'imagePreloader', function ($scope, $state, $stateParams, $sce, Post, imagePreloader) {
    imagePreloader.headStart();

    // form init
    $scope.post = {
      title: '',
      preview_img_url: '',
      description: ''
    };

    // validations
    $scope.descriptionMaxLength = 350;
    $scope.titleMaxLength = 50;

    // error message
    $scope.errorMessage = null;

    // get all posts
    $scope.getPosts = function () {
      Post.getAll().then(function (response) {
        $scope.posts = response.data;
        // console.log(response.data);
        // console.log('$scope.posts.length', $scope.posts.length);
        $scope.currentPage = 0;
        $scope.pageSize = 10;

        $scope.numberOfPages = function () {
          return Math.ceil($scope.posts.length / $scope.pageSize);
        };

        $scope.nextPage = function () {
          $scope.currentPage = $scope.currentPage + 1;
          window.scrollTo(0, 0);
        };

        $scope.prevPage = function () {
          $scope.currentPage = $scope.currentPage - 1;
          window.scrollTo(0, 0);
        };
      }, function (error) {
        console.log(error);
      });
    };

    // get one post
    $scope.getPost = function (id) {
      Post.getOne(id).then(function (response) {
        // console.log(response.data);
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

    // grab url of current blog post
    if ($state.current.name === 'blogShow') {
      $scope.currentPostId = $stateParams.id;
    }

    // create a new post
    $scope.createPost = function () {
      if ($scope.post.title === '') {
        $scope.errorMessage = 'Title can\'t be blank.';
        return;
      }

      if ($scope.post.title.length > $scope.titleMaxLength) {
        $scope.errorMessage = 'Titles can be no more than 50 characters.';
        return;
      }

      if ($scope.post.preview_img_url === '') {
        $scope.errorMessage = 'Must provide an preview image url.';
        return;
      }

      if (!checkImageUrl($scope.post.preview_img_url)) {
        $scope.errorMessage = 'Preview image urls must end in one of the following extensions: jpeg, jpg, gif, png';
        return;
      }

      if ($scope.post.description === '') {
        $scope.errorMessage = 'Description can\'t be blank.';
        return;
      }

      if ($scope.post.description.length > $scope.descriptionMaxLength) {
        $scope.errorMessage = 'Descriptions can be no more than 350 characters.';
        return;
      }

      var newPost = {
        title: $scope.post.title,
        preview_img_url: $scope.post.preview_img_url,
        description: $scope.post.description,
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
      if ($scope.post.title === '') {
        $scope.errorMessage = 'Title can\'t be blank.';
        return;
      }

      if ($scope.post.title.length > $scope.titleMaxLength) {
        $scope.errorMessage = 'Titles can be no more than 50 characters.';
        return;
      }

      if ($scope.post.preview_img_url === '') {
        $scope.errorMessage = 'Must provide an preview image url.';
        return;
      }

      if (!checkImageUrl($scope.post.preview_img_url)) {
        $scope.errorMessage = 'Preview image urls must end in one of the following extensions: jpeg, jpg, gif, png';
        return;
      }

      if ($scope.post.description === '') {
        $scope.errorMessage = 'Description can\'t be blank.';
        return;
      }

      if ($scope.post.description.length > $scope.descriptionMaxLength) {
        $scope.errorMessage = 'Descriptions can be no more than 350 characters.';
        return;
      }

      var updatedPost = {
        title: $scope.post.title,
        preview_img_url: $scope.post.preview_img_url,
        description: $scope.post.description,
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

    // waypoints
    // $scope.animateElementIn = function ($el) {
    //   $el.removeClass('not-visible');
    //   $el.addClass('animated fadeInUp');
    // };

    // $scope.animateElementOut = function ($el) {
      
    // };

    function checkImageUrl (url) {
      return(url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    }

    $scope.edit = 'blog edit';
    $scope.show = 'blog show';
    $scope.new = 'blog new';
  }]);