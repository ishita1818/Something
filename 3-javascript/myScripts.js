window.onload= function(){

var startTime= new Date().getTime();
var endTime = null,timeTaken,bestTime=1000000;
var shapeElement = document.getElementById("shape");
var buttonElement= document.getElementById("startButton");

buttonElement.onclick= function(){

    if(buttonElement.innerHTML==="Let's Start"){
      buttonElement.innerHTML="Finish!";
      makeShapeAppear();

    }else{
      buttonElement.innerHTML="Let's Start";
      document.getElementById("displayTime").innerHTML= "0.00 sec";
      shapeElement.style.display="none";
      alert("Thanks for playing! \n Your best reaction time is :"+bestTime+" seconds!\n Keep it up *_*" );
      bestTime = 1000000;

    }


}

shapeElement.onclick= function(){

  endTime= new Date().getTime();
  timeTaken= (endTime- startTime)/1000;
  if(timeTaken<bestTime)
  bestTime=timeTaken;
  shapeElement.style.display="none";
  document.getElementById("displayTime").innerHTML= timeTaken+"sec";
  setTimeout(function(){
    startTime=new Date().getTime();
    makeShapeAppear();
  },
  700  );

}

function makeShapeAppear(){
  shapeElement.style.backgroundColor="white";
  var shapes=["circle","square","rectangle","parallelogram","triangle-left","triangle-right","trapezoid","triangle-up","triangle-down"];
  var sIndex= Math.floor(Math.random()*9);

  var colors=["red","yellow","pink","violet","black","brown","purple","cyan","blue","green","orange","indigo"];
  var cIndex=Math.floor(Math.random()*12);

  var startLeft= Math.floor(Math.random()*800+100);
  var startTop= Math.floor(Math.random()*100+200);

  shapeElement.className= shapes[sIndex];
  if(sIndex<4)
  shapeElement.style.backgroundColor=colors[cIndex];

  shapeElement.style.left=startLeft+"px"
  //alert(shapeElement.style.left);
  shapeElement.style.top= startTop+'px';
  shapeElement.style.display="block";

}
};
