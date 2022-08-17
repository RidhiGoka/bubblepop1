var happyBoy, happyBoyimg;
var canvas;
var input, playButton, titleImg, greeting;


function preload(){
happyBoyimg = loadImage("./Images/boy-happy.png");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
happyBoy = createSprite( 200, 500, 10, 10);
happyBoy.addImage("happyboy", happyBoyimg);


input = createInput("").attribute("placeholder", "Enter your name");
playButton = createButton("Play");
titleImg = createImg("./Images/title.png", "game title");
greeting = createElement("h2");

titleImg.position(120, 50);
input.position(width / 2 - 110, height / 2 - 80);
playButton.position(width / 2 - 90, height / 2 - 20);
greeting.position(width / 2 - 300, height / 2 - 100);
}


function draw(){
drawSprites(); 

}



