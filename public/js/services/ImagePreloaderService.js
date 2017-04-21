angular
  .module('simply-put-your-way')
  .factory('imagePreloader', function () {
    var service = {};

    /**
     * To use the service, inject it into your controller then call:
     *
     * imagePreloader.preLoadImages with the following paremeters
     *
     * @param images - a flat array of image URL's
     * @param strategy - "linear" or "parallel" - linear will load one image at a time in the order they appear in the array. Parallel
     *                    will attempt to load all images at once
     * @param finish_cb - function() - the success callback
     * @param status_cb - function(percent_complete, imageDomelement) - a status function that fires after each image has been loaded
     * @param error_cb - function(err) - error handler that will trigger for any errors
     */

    service.preLoadImages = function(images, strategy, finish_cb, status_cb, error_cb) {

      var image_cnt = images.length;
      var loaded_cnt=0;

      var error_handler = function(err) {
        if (typeof(error_cb) == 'function') {
          error_cb( err );
        }
      };

      if (strategy == 'linear') {

        var loadImage;
        loadImage = function() {

          var image_loaded_cb = function(ev) {
            loaded_cnt++;

            if (typeof(status_cb) == 'function') {
              status_cb( ~~(100 * loaded_cnt / image_cnt), ev.path[0] );
            }

            if (images.length > 0) {
              next();
            }

            if (loaded_cnt == image_cnt) {
              finish_cb();
            }

          };

          var next = function() {
            var imgUrl = images.shift();
            var image = angular.element(new Image()).bind('load', image_loaded_cb )
              .bind('error', error_handler)
              .attr('src', imgUrl);
          };
          next();

        }();

      } else if (strategy =='parallel') {

        var image_loaded_cb = function(ev) {
          loaded_cnt++;
          if (typeof(status_cb) == 'function') {
            status_cb( ~~(100 * loaded_cnt / image_cnt), ev.path[0] );
          }

          if (loaded_cnt == image_cnt) {
            finish_cb();
          }
        };

        angular.forEach(images, function(imgUrl) {

          var image = angular.element(new Image()).bind('load', image_loaded_cb )
            .bind('error', error_handler)
            .attr('src', imgUrl);

        });

      } else {
        throw new Error('Invalid strategy. Should either be "parallel" or "linear"');
      }
    };


    return service;
  });