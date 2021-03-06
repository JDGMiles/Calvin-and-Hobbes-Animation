var field={width:590, height:270};
var fieldcolor="white";
var time=-100;
var fps=65;
var totalframes=1120;
var fighting=new Image();
fighting.src="fighting.png";
var laughing=new Image();
laughing.src="laughing.png";
var sleeping=new Image();
sleeping.src="sleeping.png";
var z1=new Image();
z1.src="z1.png";
var z2=new Image();
z2.src="z2.png";
var z3=new Image();
z3.src="z3.png";
var z4=new Image();
z4.src="z4.png";
var z5=new Image();
z5.src="z5.png";
var s1=new Image();
s1.src="stars1.png";
var s2=new Image();
s2.src="stars2.png";
var s3=new Image();
s3.src="stars3.png";
var s4=new Image();
s4.src="stars4.png";
var s5=new Image();
s5.src="stars5.png";

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = field.width;
canvas.height = field.height;

function draw(){

if(time<180){
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, field.width, field.height);
	ctx.fillStyle=fieldcolor;
	roundRect(ctx, 0, 0, field.width, field.height, 60, true);
	ctx.save();
	ctx.translate(70+2*time,130);
	ctx.rotate(0.065*time+3);
	ctx.drawImage(fighting, -100, -102);
	ctx.restore();
}

if(time>179 && time<240){
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, field.width, field.height);
	ctx.fillStyle=fieldcolor;
	roundRect(ctx, 3*time-540, 0, 540+field.width-3*time, field.height, 60, true);
	ctx.save();
	ctx.globalAlpha=(240-time)/60;
	ctx.translate(70+360,130);
	ctx.rotate(0.065*180+3);
	ctx.drawImage(fighting, -100, -102);
	ctx.restore();
}

if(time>239 && time<293){
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, field.width, field.height);
	ctx.fillStyle=fieldcolor;
	roundRect(ctx, 3*time-540, 0, 540+field.width-3*time, field.height, 60, true);
}

if(time>292 && time<380){
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, field.width, field.height);
	ctx.fillStyle=fieldcolor;
	roundRect(ctx, 3*292-540, 0, 540+field.width-3*292, field.height, 60, true);
}

if(time>379 && time<420){
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, field.width, field.height);
	ctx.fillStyle=fieldcolor;
	roundRect(ctx, 3*292-540, time-380, 540+field.width-3*292, 760+field.height-(2*time), 60, true);
}

if(time>419 && time<800){
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, field.width, field.height);
	ctx.fillStyle=fieldcolor;
	roundRect(ctx, 3*292-540, 499-460, 540+field.width-3*292, 920+field.height-(2*499), 60, true);
}

if(time>799 && time<1050){
	ctx.fillStyle="black";
	ctx.fillRect(0, 0, field.width, field.height);
	ctx.fillStyle=fieldcolor;
	roundRect(ctx, 336-Math.floor(336*(time-800)/249), 39-Math.floor(39*(time-800)/249), 540+field.width-3*292+Math.floor(336*(time-800)/249), field.height-78+Math.floor(78*(time-800)/249), 60, true);
}

if(time>259 && time<360){
	ctx.save();
	ctx.globalAlpha=(time-260)/100;
	ctx.translate(70+360,130);
	ctx.drawImage(laughing, -70, -55);
	ctx.restore();
}

if(time>359 && time<460){
	ctx.save();
	ctx.translate(70+360,130);
	ctx.drawImage(laughing, -70, -55);
	ctx.restore();
}

if(time>459 && time<520){
	ctx.save();
	ctx.globalAlpha=(520-time)/60;
	ctx.translate(70+360,130);
	ctx.drawImage(laughing, -70, -55);
	ctx.restore();
}

if(time>539 && time<640){
	ctx.save();
	ctx.globalAlpha=(time-540)/100;
	ctx.translate(70+360,160);
	ctx.drawImage(sleeping, -78, -63);
	ctx.restore();
}

if(time>639 && time<800){
	ctx.save();
	ctx.translate(70+360,160);
	ctx.drawImage(sleeping, -78, -63);
	ctx.restore();
}

if(time>799 && time<1000){
	ctx.save();
	ctx.globalAlpha=(999-time)/200;
	ctx.translate(70+360,160);
	ctx.drawImage(sleeping, -78, -63);
	ctx.restore();
}

if(time>600 && time<750){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(675-time)/75;
	ctx.translate(70+360,160);
	ctx.drawImage(z1, -61, -36);
	ctx.restore();
}

if(time>650 && time<800){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(725-time)/75;
	ctx.translate(70+360,160);
	ctx.drawImage(z2, -66, -53);
	ctx.restore();
}

if(time>700 && time<850){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(775-time)/75;
	ctx.translate(70+360,160);
	ctx.drawImage(z3, -76, -76);
	ctx.restore();
}

if(time>600 && time<750){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(675-time)/75;
	ctx.translate(70+360,160);
	ctx.drawImage(z1, 30, -58);
	ctx.restore();
}

if(time>650 && time<800){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(725-time)/75;
	ctx.translate(70+360,160);
	ctx.drawImage(z4, 45, -66);
	ctx.restore();
}

if(time>700 && time<850){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(775-time)/75;
	ctx.translate(70+360,160);
	ctx.drawImage(z5, 59, -81);
	ctx.restore();
}

if(time>-40 && time<10){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(15+time)/25;
	ctx.drawImage(s4, 55, 81);
	ctx.restore();
}

if(time>10 && time<60){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(35-time)/25;
	ctx.drawImage(s1, 56, 171);
	ctx.restore();
}

if(time>50 && time<100){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(75-time)/25;
	ctx.drawImage(s5, 156, 61);
	ctx.restore();
}

if(time>90 && time<140){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(115-time)/25;
	ctx.drawImage(s2, 206, 151);
	ctx.restore();
}

if(time>130 && time<180){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(155-time)/25;
	ctx.drawImage(s3, 286, 111);
	ctx.restore();
}

if(time>170 && time<220){
	ctx.save();
	ctx.globalAlpha=1-Math.abs(195-time)/25;
	ctx.drawImage(s4, 486, 61);
	ctx.restore();
}

time++;

if(time>1049){time=-100;}

setTimeout(draw, Math.floor(1000/fps));

}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}

fighting.onload = draw();
