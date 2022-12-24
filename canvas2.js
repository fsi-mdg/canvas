var canvas = document.querySelector('canvas')
	;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255,0,0,.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0,0,255,.5)';
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// // Arc / Circle
// for (var i = 0; i < 255; i++) {
// 	var x = Math.random() * window.innerWidth
// 		;
// 	var y = Math.random() * window.innerHeight
// 		;
// 	var randomColor = Math.floor(Math.random()*16777215).toString(16)
// 		;

// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle ='#'+randomColor;
// 	c.stroke();
// }

function Circle(x,y,dx,dy,radius,setcolor) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
    this.setcolor = setcolor;

	this.draw = function(){

		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle ='blue';
		c.stroke();
        c.fillStyle = this.setcolor
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth - (this.radius *2 ) + this.radius || 
			this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if( this.y+ this.radius > innerHeight - (this.radius * 2) + this.radius || 
			this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;
		
		this.draw();
	}

}

var circleArray = [];

for (var i = 0; i < 100; i++){
 	var radius = Math.random() * 30;
 	var x = Math.random() * (innerWidth - radius * 2) - radius;
 	var y = Math.random() * (innerHeight - radius * 2) - radius;
	var dx = (Math.random()- 0.5) * 10;
	var dy = (Math.random()- 0.5) * 10;
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    c.fillStyle = "#"+ randomColor;
	circleArray.push(new Circle(x, y, dx, dy, radius,c.fillStyle));
}

function animate() {
	
	requestAnimationFrame(animate);

	c.clearRect(0,0,innerWidth	,innerHeight);

	for(var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}

}
animate();
