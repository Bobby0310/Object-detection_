
statuse="";
object=[];

function preload(){
holder= loadImage("dog_cat.jpg");

}

function setup(){
canvas=createCanvas(500,400);
canvas.center();

object_detector=ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
    console.log("Model is working");
    statuse=true;
    object_detector.detect(holder,gotResults);
}

function gotResults(error,results){
if (error){
    console.log(error);
}
else{
console.log(results);

object=results;
}
}


function draw(){
image(holder,0,0,500,400);

if (statuse !=""){

    for(i=0; i<object.length; i++){
        document.getElementById("Identifyer").innerHTML="Status: Object Detected";
        stroke("#ff0000");
        noFill();
        rect(object[i].x,object[i].y, object[i].width,object[i].height);
        fill("#ff0000");
        multiply=floor(object[i].confidence*100);
        text(object[i].label+" "+multiply+"%", object[i].x+15,object[i].y+14);
        console.log("yes");
    }
}
}