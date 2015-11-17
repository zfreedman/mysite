$(document).ready(function () {
  // About div
  var aboutDivGlyphMap = {
    // None selected
    'none': 'So, apparantly I haven\'t created a text blurb for ' +
      'whatever icon you just clicked on (thanks for breaking my ' +
      'entire website). It\'d be great if you could email me about ' +
      'this so I can fix it by yesterday.',
    // Globe icon
    'aboutGlobe': 'I use Node.js to create RESTful web ' +
      'servers, and Socket.IO to deliver live updating and ' +
      'responsive front end UIs. Optimizing server storage and ' +
      'communication capabilities is a passion of mine.',
    // Phone icon
    'aboutPhone': 'To create scalable mobile web applications I ' +
      'use a combination of Bootstrap, jQuery, and CSS magic. ' +
      'Designing an interface that looks great on any screen is ' +
      'important to me.',
    // Stats icon
    'aboutStats': 'I use JavaScript frameworks like D3.js for ' +
      'data visualization and the creation of front end graphics. ' +
      'Chart drawing, graph modeling, and heat mapping are some ' +
      'examples of my previous work.',
    // Magnet icon
    'aboutMagnet': 'Creating an interactive and enjoyable user ' +
      'experience is crucial to me as a full stack developer. I ' +
      'work with fellow engineers, designers, and product team ' +
      'members to build attractive and engaging apps.',
    // Time icon
    'aboutTime': 'I engineer fast and efficient fullstack ' +
      'architecture to serve whatever purposes necessary. I learn ' +
      'new tech and concepts quickly, which allows me to ' +
      'contribute as software developer on many teams.',
    // Briefcase icon
    'aboutBriefcase': 'Professionalism is key for an ' +
      'application\'s growth. For me, this means scalable and ' +
      'robust code, a well-designed ' +
      'client-facing UI, and a backend system that is secure, ' +
      'reliable, and effective.',
    // Fire icon
    'aboutFire': 'It\'s important to me when developing ' +
      'entertainment software, particularly games, that the ' +
      'product I\'m building is unique, immersive, and ' +
      'interactive. I love making apps people can use with ' +
      'their friends.',
    // Refresh icon
    'aboutRefresh': 'I\'m a huge advocate of communicative and ' +
      'responsive development. As such, it\'s pivotal for me to ' +
      'construct swift backend data emissions and a front ' +
      'end UX that is lively and reactive to user input and ' +
      'navigation.'
  };

  var aboutSpanClickedID = '';

  $('#aboutDiv span').click(function () {
    // Remove clicked span class
    if (aboutSpanClickedID !== '') {
      $(aboutSpanClickedID).removeClass('aboutSpanClicked');
    }

    // Get clicked element's key and animate
    var key = $(this).attr('id') || 'none';

    // Set new clicked element
    aboutSpanClickedID = key;
    if (key !== 'none') {
      aboutSpanClickedID = '#' + key;
      $(aboutSpanClickedID).addClass('aboutSpanClicked');
    }

    // Animate
    $('#aboutGlyphiconFill').animate({
      opacity: 0
    }, 250, function () {
      $('#aboutGlyphiconFill').text(aboutDivGlyphMap[key] ||
        aboutDivGlyphMap['none']);
      $('#aboutGlyphiconFill').animate({
        opacity: 1
      }, 250);
    });
  });
});