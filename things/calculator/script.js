var memory = '0';
tMem = 0;
deepMem = [];
var display = 0;
var displyed = display;
var op = 0;
var decStat = 0;  
var x = 0;
var w = 0;
var parSwitch = false;

$('button').click(function() {
  
  w = x;
  x = $(this).html();
  
  if (x == '()') {
    if (parSwitch == false){
      if(w != op){
        x = w;
        return;
      }
      parSwitch = true;
      $('#par').css('background', '#DDF');
      deepMem = [memory, op];
      clear();
      memory = 0;
      display = parseInt(deepMem);
    }
    else {
      parSwitch = false;
      $('#par').css('background', '#FFF');
      display = eval(memory + op + display);
      memory = deepMem[0];
      op = deepMem[1];
    }
    
  }

  
  if (x == '%') {
    if (op == '+' || op == '-') {
      display = eval('1' + op + display + '/100');
      op = '*';
    }
    else if (op == '/' || op == '*' || op == 0) {
      display /= 100;
    }
   return;
  }

  if (!isNaN(x)) {
    if(display.length > 9) return;
    if (!isNaN(w) && display != 0 || w == '.') display += x;
    else display = x;
    if (w == '=') {
      memory = '0';
      op = 0;
    }
  }
  
  if (x == '.') {
    if (decStat == 0){
      decStat++;
      if (!isNaN(w)) display += x;
      else display = '0.';
    }
  }

  if (x == 'CE') {     
    parSwitch = false;
    $('#par').css('background', '#FFF');
    clear();
  }
  
  if (x == 'C') {
    display = 0;
  }
  
  function clear(){
    display = '0';
    displayed = '0';
    memory = '0';
    decStat = '0';
    op = 0;
  }
  
  if (x.charCodeAt(0) < 48 && x.charCodeAt(0) > 41 && x != '.' ) {
    if (memory === '0') memory = display;
    else if(!isNaN(w) || w == '%' || w == '()' && parSwitch == false){
    //  if(x == '-' and w == '()') ;
    
    
    display = eval(memory + op + display);
    memory = display;
      memory = 9999;

    }
    op = x; 
    

    decStat = 0;
  }
  
  if (x == '=') {
    decStat = 0;
    if (w == '=' && op != 0){
      display = eval(display + op + memory);
    }
    else if (!isNaN(w) || w == '%' || w == '()' && op != 0){
      tMem = display;
      display = eval(memory + op + display);
      memory = tMem;
    }
    else op = 0;
  }
      $('.display3').html(display);

  if (Math.abs(display) > 10000000000 || Math.abs(display) < .0000000001 && display != 0){ 
    displayed = display.toExponential(5);  
      }
    else if(display.toString().length > 10){
      
      
      displayed = display.toPrecision((Math.abs(display) < 1)? 9: 10);
    }
    else displayed = display;
   // if (display.toString.slice(-1) == 0) display.toString.slice(0, display.toString.length);
 
  
  $('.display').html(displayed);
   //$('.display3').html('x: ' + x + ' w: ' + w + ' op: ' + op + ' mem: ' + memory + ' disp: ' + display + ' deepMem: ' + deepMem);


})
