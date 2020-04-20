var time = new Date();
var clock = document.getElementById('clock');
var hex = document.getElementById('hex');

function hexClock() {
      var time = new Date ;
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      
      if (hours.lenght <2 ){
            hours ='0' + hours ;
      }
      if (minutes.lenght<2){
            minutes = '0' + minutes ;      
      }
      if (seconds.lenght<2){
            seconds ='0' + seconds;
      }
var colorStr = hours +':' + minutes + ':' + seconds ;
 var hexStr = '#' + hours + minutes + seconds ;
 
 clock.textContent = colorStr ;
 hex.textContent = hexStr ;
 
 document.body.style.backgroundColor = hexStr ;
}

setInterval(hexClock,1000);
