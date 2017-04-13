angular
  .module('simply-put-your-way')
  .factory('StorageIdeas', [function () {
    var storageIdeas = [
      {
        image: 'https://static.wixstatic.com/media/0832c6_f0bf3a52f85a41d5a0a2a138016493b1.jpg/v1/fill/w_1646,h_926,al_c,q_90,usm_0.66_1.00_0.01/0832c6_f0bf3a52f85a41d5a0a2a138016493b1.webp',
        title: 'Visible Storage',
        content: 'These Hefty plastic storage bins from Target are my favorite of choice today.  The lids latch securely closed and offer extra space under the lid.  The three sizes work nicely together to maximize space within shelves.'
      },
      {
        image: 'https://static.wixstatic.com/media/0832c6_1f910e131fe6436ca10d11ac31a8449d.jpg/v1/fill/w_1437,h_958,al_c,q_90,usm_0.66_1.00_0.01/0832c6_1f910e131fe6436ca10d11ac31a8449d.webp',
        title: 'Separate & Find Easily',
        content: 'Safely stack those hard to fit items in your cabinets with simple dividers made to order.  Inexpensive wood can be used to create easy access to platters and trays while keeping the larger items in their own space.'
      },
      {
        image: 'https://static.wixstatic.com/media/0832c6_fdbee5708caf4efabb382c843cefb953.jpg/v1/fill/w_540,h_768,al_c,lg_1,q_90/0832c6_fdbee5708caf4efabb382c843cefb953.webp',
        title: 'Easily Grab Spices',
        content: 'Spices can fit nicely stacked into a drawer.  If you have the space, this is great alternative to a lazy susan for housing and being able to quickly locate a certain spice for that great recipe you\'re in the middle of.'
      },
      {
        image: 'https://static.wixstatic.com/media/0832c6_e1be591759074a1f88dc1fdb65df8d77.png/v1/fill/w_476,h_441,al_c,lg_1/0832c6_e1be591759074a1f88dc1fdb65df8d77.png',
        title: 'Color and Convenience',
        content: 'Placed within open shelving, these decorative fabric or woven bins with built in handles create easily accessible storage that is also pleasing to the eye.  Add color to a room or keep it neutral.'
      },
      {
        image: 'https://static.wixstatic.com/media/0832c6_adfdf7c1d66b4bed9bd5c2dbb380499d.jpg/v1/fill/w_904,h_924,al_c,q_90,usm_0.66_1.00_0.01/0832c6_adfdf7c1d66b4bed9bd5c2dbb380499d.webp',
        title: 'Vertical Tiered Files',
        content: 'If your stack of to-do\'s are piled flat on your desk, chances are you\'ll spend hours looking for that one thing.  Store your files and bills in a tiered, sorted holder to find what you\'re looking for quickly.  Colors and phrases that make sense to you will also help you locate paper items easily.'
      }
    ];

    return storageIdeas;
  }]);