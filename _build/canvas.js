var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width/2,
	centerY = canvas.height/2;
	
	var logo = new createjs.Bitmap("_assets/images/pokemon_logo.svg");
	logo.x = centerX;
	logo.y = centerY;
	logo.regX = 320;
	logo.regY = 280;
	
	stage.addChild(logo);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		// logo.rotation += 5;
		stage.update();
	});