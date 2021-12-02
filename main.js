mustache="";
nose_x=0;
nose_y=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/PxpHxxPv/Mustache.gif');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);

    image(mustache,nose_x,nose_y,30,30);
}

function take_snapshot(){
    save('myfilterimage.png');
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;
        console.log("nose x- "+nose_x);
        console.log("nose y- "+nose_y);
    }
}