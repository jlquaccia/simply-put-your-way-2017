angular
  .module('simply-put-your-way')
  .factory('imagePreloader', [function () {
    function headStart () {
      var imgArray = [
        {img: '../images/better-table-flowers-min.jpg', img2: 'url("../images/better-table-flowers-min.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#about'},
        {img: '../images/new/Closet.jpg', img2: 'url("../images/new/Closet.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#virtualOrganizing'},
        {img: '../images/new/Fun Old Kitchen Items.jpg', img2: 'url("../images/new/Fun Old Kitchen Items.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#contact'},
        {img: '../images/Dogwood Cluster-min.jpg', img2: 'url("../images/Dogwood Cluster-min.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#donations'},
        {img: '../images/Fun Decor.jpg', img2: 'url("../images/Fun Decor.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#home'},
        {img: '../images/new/Art on a Shelf Mirrored.png', img2: 'url("../images/new/Art on a Shelf Mirrored.png"), url("../images/subtle patterns/crossword.png")', pageId: '#portfolio'},
        {img: '../images/new/Coffee Bar.cropped.jpg', img2: 'url("../images/new/Coffee Bar.cropped.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#rates'},
        {img: '../images/List.jpg', img2: 'url("../images/List.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#resources'},
        {img: '../images/new/Living Space.jpg', img2: 'url("../images/new/Living Space.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#services'},
        {img: '../images/new/Shelves and Storage.jpg', img2: 'url("../images/new/Shelves and Storage.jpg"), url("../images/subtle patterns/crossword.png")', pageId: '#whatIsAnOrganizer'},
        {img: '../images/blog/Old Fashioned Typewriter.Cropped-shrunk.jpg', img2: 'url("../images/blog/Old Fashioned Typewriter.Cropped-shrunk.jpg")', pageId: '#blogIndex'}
      ];

      function preloadImage (img, img2, pageId) {
        $('<img/>').attr('src', img).on('load', function () {
          $(this).remove();
          $(pageId + ' .headerImage').css('background-image', img2);
        });
      }

      imgArray.forEach(function (img) {
        preloadImage(img.img, img.img2, img.pageId);
      });
    }

    function testimonialImages () {
      var imgArray = [
        {img: '../images/Cat.Bookshelf.jpg'},
        {img: '../images/Comfy Cozy.jpg'},
        {img: '../images/In Place.jpg'},
        {img: '../images/Open Concept.jpg'},
        {img: '../images/Open Storage.2.jpg'}
      ];

      function preloadImage (img) {
        $('<img/>').attr('src', img).on('load', function () {
          $(this).remove();
          // $(pageId + ' .headerImage').css('background-image', img2);
        });
      }

      imgArray.forEach(function (img) {
        preloadImage(img.img);
      });
    }

    return {
      headStart: headStart,
      testimonialImages: testimonialImages
    };
  }]);
