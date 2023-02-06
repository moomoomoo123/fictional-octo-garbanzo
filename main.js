function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 425);
    canvas.position(710, 165);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {

}

function modelLoaded() {
    console.log("PoseNet is initialized!!")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}