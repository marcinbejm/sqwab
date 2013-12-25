function Sqwab (fps, input) {
	// frames per second ... duh!
	this.fps = fps;
	// keep track of what frame is being drawn
	this.count = 0;
	this.input = input
};

// Play will call setTimeout ever @fps milliseconds to simulate video 
Sqwab.prototype.play = function () {
	var fps = this.fps;
	var count = this.count;
	var input = this.input;
	var run = function () {
		if (count !== input.length) {
			var frame = [];
			// draw the frame
			for (var i = 0; i < input.length; i++) {
				for (var j = 0; j < input[i].length; j++) { 
					for (var k = 0; k < input[i][j].length; k++) {
						frame.push('<span style="background-color:rgb(' + input[i][j][k][0] + ',' + input[i][j][k][1] + ',' + input[i][j][k][2] + ')"></span>');
					}
					frame.push('<div class="clear"></div>');
				}
			}
			document.getElementById("tv").innerHTML = frame.join("");
			count++;
			window.setTimeout(run, fps);
		}
	};
	window.setTimeout(run, fps);
};

// @a is read from `data.js` and contains all the image frames we collected
var sqwab = new Sqwab(60, a);
sqwab.play();