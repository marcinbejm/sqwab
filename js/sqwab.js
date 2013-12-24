function Sqwab (input) {
	this.input = input
};

Sqwab.prototype.convert = function () {
	var input = this.input;
	var frame = [];

	for (var j = 0; j < input[0].length; j++) { 
		for (var k = 0; k < input[0][j].length; k++) {
			frame.push('<span style="background-color:rgb(' + input[0][j][k][0] + ',' + input[0][j][k][1] + ',' + input[0][j][k][2] + ')"></span>');
		}
		frame.push('<div class="clear"></div>');
	}

	document.getElementById("tv").innerHTML = frame.join("");

};


var sqwab = new Sqwab(a);
sqwab.convert();
