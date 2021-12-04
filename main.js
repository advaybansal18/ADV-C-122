x="";
y="";
draw_circle="";
draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function setup(){
    canvas=createCanvas(900,600);
}

function start(){
    document.getElementById("status").innerHTML="System is listening. Please Speak.";
    recognition.start();
}

recognition.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech has been recognized as: "+content;
    if(content=="Circle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Circle is drawing";
        draw_circle="set";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Rectangle is drawing";
        draw_rect="set";
    }
}
    
    function draw(){
        if(draw_circle=="set"){
            radius=Math.floor(Math.random()*100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML="Circle is Drawn";
            draw_circle="";
        }
        if(draw_rect=="set"){
            width=Math.floor(Math.random()*100);
            height=Math.floor(Math.random()*100);
            rect(x,y,width,height);
            document.getElementById("status").innerHTML="Rectangle is Drawn";
            draw_rect="";
        }
    }