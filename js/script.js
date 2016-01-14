$(document).ready(function() {
  
  var things = [
    {
      name: 'Tic Tac Toe',
      thumb: 'http://i.imgur.com/WO0gIcG.png',
      description: '<br>Tic Tac Toe game.<br><br>',
      link: '/things/tictactoe/'
    },
    {
      name: 'Old fashion calculator.',
      thumb: 'http://i.imgur.com/uw8AR3l.png',
      description: '<br>Old fashion calculator.<br><br>',
      link: '/things/calculator/'
    },
    {
      name: 'weather',
      thumb: 'http://i.imgur.com/aabp7uE.png',
      description: '<br>Weather app.<br><br>',
      link: '/things/weather'
    },
    {
      name: 'pomodoro',
      thumb: 'http://i.imgur.com/7g6ZoRs.png?1',
      description: '<br>Pomodoro clock.<br><br>',
      link: '/things/pomodoro'
    },
    {
      name: 'this site',
      thumb: 'http://i.imgur.com/OMCaLDO.png',
      description: '<br>This site.<br><br>',
      link: 'http://jjames.me'
    },
    {
      name: 'thing4',
      thumb: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg',
      description: '<br>cat.<br><br>',
      link: 'cats.com'
    },
    {
      name: 'thing5',
      thumb: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg',
      description: '<br>cat.<br><br>',
      link: 'cats.com'
    },
    {
      name: 'thing6',
      thumb: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg',
      description: '<br>cat.<br><br>',
      link: 'cats.com'
    },
  ]
  
  $('#home').addClass('menu_highlight');
  var selected = 'home';
  
  //add things
  
  
  for(var i = 0; i < things.length; i++){
    $('.things').append(
      '<div class="col-md-3 col-sm-4">'+
        '<div class="thing">'+
          '<a href="'+things[i].link+'">' +
          '<img class="thing_img" src="'+things[i].thumb+'">'+
          '<div class="descript">' +    
            things[i].description +
          '</div>' +
          '</a>' +
        '</div>'+
      '</div>'
    );
  }
  
  
  
  var cw = $('.thing').width();
  $('.thing').css({'height':cw+'px'});
  
  $(window).resize(function(){
    var cw = $('.thing').width();
    $('.thing').css({'height':cw+'px'});
  });
    
  var menuPos = $('.menu').offset().top;
  
  $(window).scroll(function(){
    if ($(window).scrollTop() > menuPos){
      $('.menu_holder').addClass('fixed');
      $('#name').css('color', 'rgba(0,0,0,1)');
      $('.space2').css('height', '103px');
    }
    else {
      $('.menu_holder').removeClass('fixed');
      $('#name').css('color', 'rgba(0,0,0,0)');
      $('.space2').css('height', '40px');

    }

  });
  
  $('nav.menu button').click(function(){
    
    $('#' + selected).removeClass('menu_highlight');
    $(this).addClass('menu_highlight');
    
    selected = $(this).attr('id');
    

  });

  
});
