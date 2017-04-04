angular
  .module('simply-put-your-way')
  .factory('Testimonials', [function () {
    var testimonials = [
      {
        date: '3/29/17',
        name: '',
        title: 'Moving Made Easy!',
        review: 'I just moved into a house. I called Wendy to assist with prepping the house for unpacking and organization. She cleaned and lined shelves and drawers throughout the house. We unpacked, pared down and organized kitchen and other items. She also researched and recommended storage systems from quality value oriented vendors for the house and garage. Wendy is responsive, efficient, professional and a joy to work with. I\'m excited to embark on phase 2 with Wendy as I move items out of my storage locker and set up the garage.'
      },
      {
        date: '11/29/16',
        name: 'Regina L.',
        title: 'The Gift to Get it Done!',
        review: 'I am a Los Angeles Professional Organizer and had an opportunity to hire Wendy Quaccia to assist me on a major de-clutter job in Mountain View. Wendy and I worked side-by-side for 2 days straight.\n\n My client had accumulated 20+ years of "stuff," paper mostly, and a considerable amount of electronics, books, and well, everything under the sun.\n\n Wendy was a true joy to have on the Team! She showed up as dedicated, focused, hardworking, passionate, and compassionate about the work we are called upon to do.\n\n If you are thinking about working with a Professional Organizer, you will be lucky to have an opportunity to work with Wendy at "Simply Put Your Way." She has what I call "the gift" and will get it done.'
      },
      {
        date: '11/19/16',
        name: 'Kevin E.',
        title: 'One of the Top Organizers I have Worked with!',
        review: 'Wendy is absolutely outstanding. We worked from the garage to my closet to my office. All of the areas were extremely well thought out. Wendy was good with challenging me on what I really needed to keep and understood the value of personal memento items. We worked very well together and quickly finished more projects than I expected. 100% I would hire her again and plan on it when we do the basement.'
      },
      {
        date: '11/6/16',
        name: 'Cathy M.',
        title: 'Superb Partner in Time of Need',
        review: 'Wendy was integral to my successful relocation from the Bay Area to central Europe. This was a very challenging experience requiring a balance between activities on both sides of the Atlantic, while holding down a very demanding job. Wendy led the way with a calm, organized, can-do approach.'
      },
      {
        date: '10/31/16',
        name: 'Judy V.',
        title: 'Worth Every Penny!',
        review: 'Wendy is a miracle worker. Professional, tenacious, efficient, and a pleasure to work with. Worth every penny.'
      },
      {
        date: '9/29/16',
        name: 'Nancy R.',
        title: '',
        review: 'Wendy is an organizing angel! She&#39;s helped me get my house in order so I can move forward with life. Over the last few weeks she&#39;s: -Sorted through and organized our garage, getting rid of old toys and duplicate gardening supplies -Sorted through old emergency kits, inventoried and noted items that need to be replaced -Sorted through an overstuffed storeroom, helping me decide what to get rid of and taken away items for donation -Sorted through old toys, started items for my kids to review, organized and labeled the items to keep and taken old items away for donation -Organized and moved memorabilia into a storage closet to get it out of sight and take on as a future project -And so much more! Wendy had been super organized in her approach, works quickly and efficiently, was always on time, came ready with supplies, and always finished the job. The clutter is under control - thanks Wendy!'
      },
      {
        date: '7/21/16',
        name: 'Judy M.',
        title: '',
        review: 'We decided to move and I found myself quickly feeling overwhelmed with all the clutter we had accumulated. I decided to call Wendy to get some help and maybe even get a few pointers on how to keep things more organized. Within the first five minutes of being in my home Wendy had one bedroom closet completely emptied out and sorted into different piles. As we sorted through each pile to decide what was a throw out, donation, and a keeper, Wendy explained the reason behind her method. Boy, did it make a lot of sense. We quickly moved onto two other large bedroom closets and did the same. The feeling of being stressed out had vanished and I was feeling much better about how to manage our things and to have less clutter. Wendy’s knowledge of organization and time management is so valuable along with knowing what type of donations each organization will accept. Wendy’s binder is full of information at her fingertips! The best thing - Wendy personally took all the donations and dropped off the appropriate donation to each organization. Thank you Wendy, and I will be having you back as the move date gets closer.'
      },
      {
        date: '4/19/16',
        name: 'Garry N.',
        title: '',
        review: 'Did a great job. Great initiative. Made &quot;street smart&quot; decisions on things-- knew when to just do something and when it required asking me what to do. Would assuredly hire again.'
      },
      {
        date: '2/5/16',
        name: 'Kim C.',
        title: '',
        review: 'Wendy is phenomenal - we cannot recommend her enough! We are a mid sized start-up experiencing hyper growth, therefore, we needed her expertise to help us organize our existing space. Wendy came in a few weeks ago to do the initial consultation and came back with very effective suggestions. She was professional and very well versed in all things organization - she measured each of the &quot;problem spaces,&quot; took photos, listened to our needs and came back with a detailed Google Doc with suggestions/questions. We were able to transform our entire office and we are very happy with the results. Wendy organized our swag closet, supply closet, office supplies, printing needs, and helped us to label everything clearly and concisely. Wendy is a diligent worker and we are so glad that we hired her to help us.'
      },
      {
        date: '8/23/15',
        name: 'Steven C.',
        title: '',
        review: 'Wendy was awesome to work with &amp; I&#39;m super happy about how our garage turned out. I would definitely use her again &amp; I would (and have already) recommended her to friends. Some specific things that stood out to me as &quot;above &amp; beyond&quot; were: * She volunteered her (big) SUV for our run to the dump. That let us get big stuff out and saved at least a trip vs my little wagon. * She researched shelving and storage units on her own, gave me options, and then organized the winners into a list with URL&#39;s so ordering things was very easy. * For stuff that was &quot;in store pickup&quot; only, she again volunteered her SUV and picked up the shelving, etc on her way over. * Communication was excellent across email, phone, and Google Docs. That made it easy to work regardless of whether we both had time to talk, or if our schedules were out of sync. * She pulled in her husband to build some small custom shelves. He did a great &amp; thoughtful job (rounded corners so you can&#39;t bang your head) and saved me a bunch of money v.s. having to buy them pre-made. Definitely recommended!'
      },
      {
        date: '8/21/15',
        name: 'Art L.',
        title: '',
        review: 'Wendy listened to what we wanted to accomplish and developed a program to get organized and stay organized.'
      },
      {
        date: '7/8/15',
        name: 'Pamela B.',
        title: '',
        review: 'Wendy was professional, knowledgeable and friendly. She was so easy to work with and came prepared with helpful literature that we had discussed about important documents. She used our time efficiently and helped me take immediate action to set up computerized files. She emptied out our junk drawers and showed me how to organize them functionally, weeding out unneeded stuff. Terrific help. Will definitely call her in the future for more stuff!'
      },
      {
        date: '1/09/14',
        name: 'Erin H.',
        title: '',
        review: 'Wendy did a great job organizing my pantry and linen closet. She was prompt, skilled, friendly, and quick -- everything you want and expect from a Task Rabbit! I would absolutely work with her again.'
      }
    ];

    return testimonials;
  }]);