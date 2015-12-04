$(document).ready(function(){
  var turn = 'X';
  var board = ['N',0,0,0,0,0,0,0,0,0];
  var pos = {
    '1' : [-1,1],
    '2' : [0,1],
    '3' : [1,1],
    '4' : [-1,0],
    '5' : [0,0],
    '6' : [1,0],
    '7' : [-1,-1],
    '8' : [0,-1],
    '9' : [1,-1],
  }
  var xlog = [];
  var olog = [];
  var mine, yours;
  var me, you;
  var count = 0;
  var mark = {
    X: 'http://i.imgur.com/rZQaaQJ.png',
    O: 'http://i.imgur.com/eDAoFKG.png'
  }
  
  
  
  meFirst();
  
  function meFirst(){
    mine = xlog;
    yours = olog;
    me = 'X';
    you = 'O';
    myTurn(); 
  }

  $('.b').click(function(){             //oponent plays their turn
    if($(this).html() !== '-') return;     
    select($(this).attr('id')[1]);        //mark board if valid play
  });
  
  function select(n){
    count++
    markBoard(n, turn)
    board[n] = turn;
    if(win(turn)) {
        $('#win').html(turn + ' WINS'); 
        return;
    }
      
    if(turn == 'X'){              //switch turn variable 
      xlog.push(pos[n]);           //and log position
      turn = 'O';
    }
    else {
      olog.push(pos[n]);
      turn = 'X';
    }
    
    if(turn == me) myTurn();        //play my turn, or wait
  }
  
  $('#clear').click(function clear(){
    $('#board .b').html('-');
    $('#win').html('');
    board.fill(0,1);
    turn = 'X';
    xlog = [];
    olog = [];
    count = 0;
    meFirst();
  })
  
  setInterval(function(){
    $('#display').html(xlog.join(' | ')+'<br>'+olog.join(' | ')+'<br>'+board)
  }, 1000)
  
  function myTurn(){
    lessDumb();    
  }
  
  function dumb(){
    var rand = 0;
    while(board[rand] && count < 9) {
      rand = Math.floor(Math.random()*9)+1;
    }
    select(rand)
    
  }
  
  function lessDumb(){
    if(forWin(me) || forWin(you)) return; 
   
    var rand = 0;
    while(board[rand] && count < 9) {
      rand = Math.floor(Math.random()*9)+1;
    }
    select(rand)
    
  }
  
  function win(m){
    if(board[1] == m && (board[2] == m && board[3] == m 
                      || board[4] == m && board[7] == m
                      || board[5] == m && board[9] == m)
    || board[2] == m  && board[5] == m && board[8] == m
    || board[3] == m && (board[5] == m && board[7] == m
                      || board[6] == m && board[9] == m)
    || board[4] == m  && board[5] == m && board[6] == m
    || board[7] == m  && board[8] == m && board[9] == m)
    return true;
  }
  
  function forWin(m){
    for(var i = 1; i < 10; i++){
      if(!board[i]){
        board[i] = m;
        if(win(m)){
          select(i);
          return true;
        }
        else board[i] = 0;
      }
    }
    return false;
  }
  
  function defend(){
    for(var i = 1; i < 10; i++){
      if(!board[i]){
        board[i] = you;
        if(win(you)){
          select(i);
          return true;
        }
        else board[i] = 0;
      }
    }
    return false;
  }
      
  function markBoard(n, turn){
    $('#b'+n).html('<img src= "'+mark[turn]+'"/>');        
  }

  

})
