NoseX=0;
NoseY=0;

function preload()
{
mustache = loadImage("https://i.postimg.cc/VN9mGV2B/filter.png");
}
function setup()
{
canvas= createCanvas(300,300);
canvas.center();

video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        NoseX =results[0].pose.nose.x;
        NoseY =results[0].pose.nose.y;
        console.log(results);
        console.log("nosex= " + results[0].pose.nose.x);
        console.log("nosey= " + results[0].pose.nose.y);
    }
}

function draw()
{
image(video, 0, 0, 300, 300);
//fill(250, 0, 0);
//stroke(250, 0, 0);
//circle(NoseX, NoseY, 20);
image(mustache, NoseX, NoseY, 30, 30);
}
function take_snapshot()
{
    save('Mustache.png');
}
