//canvas - Mountain scene

//canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//sky
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, 400, 400);

// Mountain
//1
ctx.fillStyle = "grey";
ctx.beginPath();
ctx.moveTo(200, 80);
ctx.lineTo(-20, 400);
ctx.lineTo(400, 400);
ctx.lineTo(200, 80);
ctx.fill();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 80);
ctx.lineTo(-20, 400);
ctx.lineTo(400, 400);
ctx.lineTo(200, 80);
ctx.stroke();

//2
ctx.fillStyle = "grey";
ctx.beginPath();
ctx.moveTo(70, 100);
ctx.lineTo(-70, 400);
ctx.lineTo(235, 400);
ctx.lineTo(70, 100);
ctx.fill();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(70, 100);
ctx.lineTo(-70, 400);
ctx.lineTo(235, 400);
ctx.lineTo(70, 100);
ctx.stroke();

//3
ctx.fillStyle = "grey";
ctx.beginPath();
ctx.moveTo(320, 140);
ctx.lineTo(150, 400);
ctx.lineTo(480, 400);
ctx.lineTo(320, 140);
ctx.fill();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(320, 140);
ctx.lineTo(150, 400);
ctx.lineTo(480, 400);
ctx.lineTo(320, 140);
ctx.stroke();

// Snow 1
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(200, 80);
ctx.lineTo(160, 139);
ctx.lineTo(250, 160);
ctx.lineTo(200, 80);
ctx.fill();

//Snow 2
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(70, 100);
ctx.lineTo(40, 165);
ctx.lineTo(100, 157);
ctx.lineTo(70, 100);
ctx.fill();

//Snow 2
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(320, 140);
ctx.lineTo(300, 170);
ctx.lineTo(330, 157);
ctx.lineTo(320, 140);
ctx.fill();

//sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(70, 50, 30, 0, 2 * Math.PI);
ctx.fill();

// Grass
ctx.fillStyle = `green`;
ctx.fillRect(0, 300, 400, 110);

// Road
ctx.fillStyle = `black`;
ctx.fillRect(0, 325, 400, 55);

// Road Lines
ctx.fillStyle = `yellow`;
ctx.fillRect(0, 350, 50, 5);

ctx.fillStyle = `yellow`;
ctx.fillRect(100, 350, 50, 5);

ctx.fillStyle = `yellow`;
ctx.fillRect(200, 350, 50, 5);

ctx.fillStyle = `yellow`;
ctx.fillRect(300, 350, 50, 5);

ctx.fillStyle = `yellow`;
ctx.fillRect(395, 350, 50, 5);

//text
ctx.font = "10px Monospace";
ctx.fillStyle = "white";
ctx.fillText("H. Multani Mountain Scene", 250, 375);

//car red img
var cloudImg = document.getElementById("cloudEl");
ctx.drawImage(cloudImg, 50, 260, 100, 100);

//car orange img
var carImg = document.getElementById("carEl");
ctx.drawImage(carImg, 150, 308, 90, 90);
