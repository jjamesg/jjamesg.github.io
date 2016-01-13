$(document).ready(function() {

  $.get("http://ipinfo.io/json", function(location) {
    getWeath(location.city);
  })

  function getWeath(city) {
    //metric vs imperial data comes back inconsistent, so just requesting imperial and converting if necessary afterwards
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + '&APPID=a7f8e348cb688f8e147b65cbab183a13', function(weather) {

      $(".tempIcon").html("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");
      $(".temperature").html(weather.main.temp.toFixed(1) + '&degF');
      $("#box1").html(weather.name);
      $("#box2").html(weather.weather[0].description);
      $("#box3").html(getCard(weather.wind.deg) + ' ' + weather.wind.speed + ' mph');
      $("#convert").html('Switch units');
      $("#location").html("Not in " + weather.name + "?");

      var impArray = ['US', 'BS', 'BZ', 'KY', 'PW'];
      if ($.inArray(weather.sys.country, impArray) < 0) {
       convert();
      }

      background(weather.weather[0].icon);
      
          console.log("weather....: " + weather.wind.deg);

    })

  }

  function getCard(deg) {
    
    var cards = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    console.log("degree: " +deg + "math: " + cards[Math.floor(deg / 45 + .5)]  );
    return cards[Math.floor(deg / 45 + .5)];
  }

  $("#convert").click(function() {
      convert();
    })
 
  function convert() {
    if ($('.temperature').html().search('F') > -1) {
      $('.temperature').html(
        (($('.temperature').html().match(/(?:\d*\.)?\d+/) - 32) * 5 / 9).toFixed(1) + '&degC'
      );
    } else {
      $('.temperature').html(
        ($('.temperature').html().match(/(?:\d*\.)?\d+/) * 9 / 5 + 32).toFixed(1) + '&degF'
      );
    }
    
    if ($('#box3').html().search('mph') > -1) {
      $('#box3').html(
        $("#box3").html().match(/[A-Z]+/) + ' ' +
        ($('#box3').html().match(/(?:\d*\.)?\d+/) * .44704).toFixed(2) + ' m/s'
      );
    } else {
      $('#box3').html(
        $("#box3").html().match(/[A-Z]+/) + ' ' +
        ($('#box3').html().match(/(?:\d*\.)?\d+/) / .44704).toFixed(2) + ' mph'
      );
    }
  }

  $("#location").click(function() {
    $("#inp-box").css({
      'width': '150',
      'border': '1px solid #999',
      'color': '#000'
    })
    $('#inp-box').val('');
    $(this).css({
      'color': '#999'
    })
    $('#inp-box').focus();
  })

  $("#inp-box").keypress(function() {
    $("#go").css({
      'background': $("#location").css('background'),
      'color': '#000',
      'cursor': 'pointer'
    })
  })

  $('#go').click(function() {
    getWeath($('#inp-box').val());
    $("#go").css({
      'background': 'rgba(0,0,0,0)',
      'color': 'rgba(0,0,0,0)',
      'cursor': 'default',
    })
    $("#inp-box").css({
      'width': '0',
      'border': '0px',
      'color': '#FFF'
    })
    $('#location').css({
      'color': '#333'
    })
  })

  $("#inp-box").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#go").click();
    }
  });
  
  function background(icon){
    dayArray = [0,'http://leverhawk.com/wp-content/uploads/2013/09/iStock_000012580113Medium.jpg','https://eeqbalz.files.wordpress.com/2009/02/clouds-in-the-sky.jpg','http://api.ning.com/files/HvVbYyA-PDRVs1ZQYCWasPziuUCzupaAvOgKs8QIZ6fpjaB9kKlbrCWNR*ytldemcGs*PeXVQxkCvoLXcauZVHlYUnMqmciw/7152011.jpg','http://bovitz.com/bovitz.com/photo/traditional/jpgphotos/2006/2006-07/Broken-clouds.jpg',5,6,7,8,'https://wallpaperscraft.com/image/heavy_rain_rain_light_bushes_summer_60763_1920x1080.jpg','http://fulginitivo.com/wp-content/uploads/2015/09/rainy-day-wallpapers.jpg','http://myzone.saferetirementst.netdna-cdn.com/wp-content/uploads/2015/04/81.jpg?135282',12,'https://upload.wikimedia.org/wikipedia/commons/4/4a/Snow_on_the_mountains_of_Southern_California.jpg'];
    nightArray = [0,'http://images.summitpost.org/original/472297.jpg','http://imagine.pics/images/670/67007.jpg','http://imagine.pics/images/670/67007.jpg','http://www.listofimages.com/wp-content/uploads/2012/06/night-moon-dark-clouds-clouds-nature.jpg',5,6,7,8,'http://7-themes.com/data_images/out/71/7016563-rain-at-night.jpg','http://7-themes.com/data_images/out/71/7016563-rain-at-night.jpg','http://i.ytimg.com/vi/lxSzLIbhB_A/maxresdefault.jpg',12,'http://www.snoron.com/walls/park_bench_in_snow_at_night-wide.jpg'];
    
    if (icon.search('d') > -1){
      var imgurl = dayArray[parseInt(icon.match(/(?:\d*\.)?\d+/)[0])];
    } else{    
      var imgurl = nightArray[parseInt(icon.match(/(?:\d*\.)?\d+/)[0])];
    }
    
    if (icon === '50d') imgurl = 'https://completehealthcircle.files.wordpress.com/2013/11/mist.jpg';
    if (icon === '50n') imgurl = 'http://campoutkid.com/wp-content/uploads/2012/03/Astoria-Park-at-Night-in-Mist.jpg';
    
       
    $('.cont').css({
      'background': 'url(' + imgurl + ') center fixed no-repeat ',
      'background-size': '100% 100%'
    })
  };
})
