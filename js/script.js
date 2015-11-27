$(document).ready(function() {
  
  $('#home').addClass('menu_highlight');
  var selected = 'home';
    
  var menuPos = $('.menu').offset().top;

  $(window).scroll(function(){
    if ($(window).scrollTop() > menuPos){
      $('.menu_holder').addClass('fixed');
      $('#name').css('top', '0px');
    }
    else {
      $('.menu_holder').removeClass('fixed');
      $('#name').css('top', '-50px');
    }

  });
  
  $('nav.menu button').click(function(){
    
    $('#' + selected).removeClass('menu_highlight');
    $(this).addClass('menu_highlight');
    
    selected = $(this).attr('id');
    

  });

  
});