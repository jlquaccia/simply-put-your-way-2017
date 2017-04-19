angular
  .module('simply-put-your-way')
  .factory('Testimonials', [function () {
    var testimonials = [
      {
        image: './images/Cat.Bookshelf.jpg',
        date: '3/29/17',
        name: 'Sue S.',
        city: 'San Carlos, CA',
        title: 'Moving Made Easy!',
        review: 'Wendy is responsive, efficient, professional and a joy to work with. I\'m excited to embark on phase 2 with Wendy as I move items out of my storage locker and set up the garage.'
      },
      {
        image: './images/Comfy Cozy.jpg',
        date: '11/29/16',
        name: 'Regina L.',
        city: 'Mountain View, CA',
        title: 'The Gift to Get it Done!',
        review: 'I am a Los Angeles Professional Organizer and had an opportunity to hire Wendy Quaccia to assist me on a major de-clutter job in Mountain View. Wendy and I worked side-by-side for 2 days straight.'
      },
      {
        image: './images/In Place.jpg',
        date: '11/19/16',
        name: 'Kevin E.',
        city: 'Los Altos Hills, CA',
        title: 'One of the Top Organizers I have Worked with!',
        review: 'Wendy is absolutely outstanding. Wendy was good with challenging me on what I really needed to keep and understood the value of personal memento items. We worked very well together and quickly finished more projects than I expected.'
      },
      {
        image: './images/Open Concept.jpg',
        date: '11/6/16',
        name: 'Cathy M.',
        city: 'Burlingame, CA',
        title: 'Superb Partner in Time of Need',
        review: 'Wendy was integral to my successful relocation from the Bay Area to central Europe. This was a very challenging experience requiring a balance between activities on both sides of the Atlantic, while holding down a very demanding job. Wendy led the way with a calm, organized, can-do approach.'
      },
      {
        image: './images/Open Storage.2.jpg',
        date: '10/31/16',
        name: 'Judy V.',
        city: 'Belmont, CA',
        title: 'Worth Every Penny!',
        review: 'Wendy is a miracle worker. Professional, tenacious, efficient, and a pleasure to work with. Worth every penny.'
      },
      {
        image: './images/Cat.Bookshelf.jpg',
        date: '9/29/16',
        name: 'Nancy R.',
        city: 'Palo Alto, CA',
        title: '',
        review: 'Wendy is an organizing angel! She\'s helped me get my house in order so I can move forward with life. Wendy had been super organized in her approach, works quickly and efficiently, was always on time, came ready with supplies, and always finished the job. The clutter is under control - thanks Wendy!'
      },
      {
        image: './images/Comfy Cozy.jpg',
        date: '7/21/16',
        name: 'Judy M.',
        city: 'Redwood City, CA',
        title: '',
        review: 'Within the first five minutes of being in my home Wendy had one bedroom closet completely emptied out and sorted into different piles. The feeling of being stressed out had vanished and I was feeling much better about how to manage our things and to have less clutter. Wendy’s knowledge of organization and time management is so valuable.'
      },
      {
        image: './images/In Place.jpg',
        date: '4/19/16',
        name: 'Garry N.',
        city: 'Palomar Park, CA',
        title: '',
        review: 'Did a great job. Great initiative. Made \'street smart\' decisions on things-- knew when to just do something and when it required asking me what to do. Would assuredly hire again.'
      },
      {
        image: './images/Open Concept.jpg',
        date: '2/5/16',
        name: 'Kim C.',
        city: 'Los Altos, CA',
        title: '',
        review: 'Wendy is phenomenal - we cannot recommend her enough! We are a mid sized start-up experiencing hyper growth, therefore, we needed her expertise to help us organize our existing space. Wendy came in a few weeks ago to do the initial consultation and came back with very effective suggestions.'
      },
      {
        image: './images/Open Storage.2.jpg',
        date: '8/23/15',
        name: 'Steven C.',
        city: 'Palo Alto, CA',
        title: '',
        review: 'Wendy was awesome to work with & I\'m super happy about how our garage turned out. I would definitely use her again & I would (and have already) recommended her to friends.'
      },
      {
        image: './images/Cat.Bookshelf.jpg',
        date: '8/21/15',
        name: 'Art L.',
        city: 'Redwood City, CA',
        title: '',
        review: 'Wendy listened to what we wanted to accomplish and developed a program to get organized and stay organized.'
      },
      {
        image: './images/Comfy Cozy.jpg',
        date: '7/8/15',
        name: 'Pamela B.',
        city: 'Fremont, CA',
        title: '',
        review: 'Wendy was professional, knowledgeable and friendly. She used our time efficiently and helped me take immediate action to set up computerized files. She emptied out our junk drawers and showed me how to organize them functionally, weeding out unneeded stuff.'
      }
    ];

    return testimonials;
  }]);