x = 0;
y = 0;

draw_apple = "";
screen_width =0;
screen_height=0;
apple="";
speak_data ="";
to_number ="";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple= loadImage('apple.png')
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number= Number(content);

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
if (Number.isInteger(to_number)){
  draw_apple="set"
}
else{
  "The speech has not recognized a number "
}
}

function setup() {
  canvas= createCanvas(screen_width, screen_height-150)
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  canvas.position(0-150)
}

function draw() {
  if(draw_apple == "set")
  {
       for(var i=1; 1<=to_number; i++)
    {
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
 
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
