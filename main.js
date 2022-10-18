song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
webcam = ""

function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    Image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
}
