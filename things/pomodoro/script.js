// to do: fix functionality of break input,
// make things prettier

$(document).ready(function() {

  var time = {
    initial: new Date(),
    btnOn: false,
    session: true,
    currTime: 25*60,
    sessionTime: 25*60,
    breakTime: 5*60
  };
  

  timeDisplay(0);
  $('.ses-or-brk').html('Session');
  $('#sesIn').val(time.sessionTime/60);
  $('#brkIn').val(time.breakTime/60);


  $("#sesIn").keyup(function(event) {
    if (event.keyCode == 13) {
      time.sessionTime = $('#sesIn').val()*60;
      time.btnOn = false;
      time.currTime = $('#sesIn').val()*60;
      time.initial = new Date();

      console.log(time.currTime);                 ////////
      timeDisplay(0);
    }
  })
  
  $("#brkIn").keyup(function(event) {
    if (event.keyCode == 13) {
      time.breakTime = $('#brkIn').val()*60;
      console.log(time.currTime);                 ////////
      timeDisplay(0);
    }
  })

  $('.time-btn').click(function() {
    if (!time.btnOn) {
      time.btnOn = true;
      startTime();
    } else {
      time.btnOn = false;
    }
  })

  function startTime() {
    time.initial = new Date();
    startLoop();
  }

  function startLoop() {
    var diff = Math.floor((new Date() - time.initial) / 1000);
    if (!time.btnOn) {
      time.currTime = time.currTime - diff;
      return;
    }
    timeDisplay(diff);
    if (time.currTime <= diff) {
      switchClock();
      return;
    }
    setTimeout(startLoop, 500);
  }

 
   function checkFormat(i) {
    if (i < 10) return '0' + i;
    if (i === 60) return '00';
    return i;
  }
  
  function timeDisplay(difference){
    var m = checkFormat(Math.floor((time.currTime - difference) / 60));
    var s = checkFormat((time.currTime - difference) % 60);
    $(".time-btn").html(m + ':' + s);
  }
  
   function checkFormat(i) {
    if (i < 10) return '0' + i;
    if (i === 60) return '00';
    return i;
  }
  function switchClock(){
    if (time.session) {
      time.session = false;
      time.currTime = time.breakTime;
      setTimeout(function(){
        startTime();
        $('.ses-or-brk').html('Break');
      } , 1000);

      sessionStyle();
    } else{
      time.session = true;
      time.currTime = time.sessionTime;
      setTimeout(function(){
        startTime();
        $('.ses-or-brk').html('Session');
      } , 1000);
      breakStyle();
    }
  }

})
