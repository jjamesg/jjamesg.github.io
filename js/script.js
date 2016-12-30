$(document).ready(function() {
  
  var things = [
    {
      name: 'Poller (ASP.NET)',
      thumb: '/images/pollaspthumb.png',
      description: '<br>Poll creater - C#/ASP.NET<br><br>',
      link: 'http://pollerx.azurewebsites.net'
    },
    {
      name: 'Poller (Node.js)',
      thumb: '/images/poller-thumb.png',
      description: '<br>Poll creater - Mongo/Express/React/Node)<br><br>',
      link: 'https://pollerq.herokuapp.com/'
    },
    {
      name: 'Shortnr',
      thumb: '/images/shrt.png',
      description: '<br>URL shortener - Mongo/Express/Node<br><br>',
      link: 'http://shrtner.herokuapp.com/'
    },
    {
      name: 'weather',
      thumb: 'http://i.imgur.com/aabp7uE.png',
      description: '<br>Weather app - JavaScript<br><br>',
      link: '/things/weather'
    },
    {
      name: 'Tic Tac Toe',
      thumb: 'http://i.imgur.com/WO0gIcG.png',
      description: '<br>Tic Tac Toe game - JavaScript<br><br>',
      link: '/things/tictactoe/'
    },
    /*{
      name: 'Old fashion calculator.',
      thumb: 'http://i.imgur.com/uw8AR3l.png',
      description: '<br>Old fashion calculator.<br><br>',
      link: '/things/calculator/'
    },

    
    {
      name: 'pomodoro',
      thumb: 'http://i.imgur.com/7g6ZoRs.png?1',
      description: '<br>Pomodoro clock.<br><br>',
      link: '/things/pomodoro'
    },
    {
      name: 'news',
      thumb: 'http://i.imgur.com/EzIfvK4.png',
      description: '<br>News reader.<br><br>',
      link: '/things/news'
    },
    */
    {
      name: 'this site',
      thumb: 'http://i.imgur.com/OMCaLDO.png',
      description: '<br>This site - JavaScript<br><br>',
      link: 'http://jjames.me'
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
      $('.space2').css('height', '103px');
    }
    else {
      $('.menu_holder').removeClass('fixed');
      $('.space2').css('height', '40px');

    }

  });
  
  $('nav.menu button').click(function(){
    
    $('#' + selected).removeClass('menu_highlight');
    $(this).addClass('menu_highlight');
    
    selected = $(this).attr('id');
    

  });

  
});
