var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width/2,
	centerY = canvas.height/2;
	
	var ship = new createjs.Bitmap("_assets/images/pokemon_logo.svg");
	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 310;
	ship.regY = 400;
	
	stage.addChild(ship);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		// ship.rotation += 5;
		stage.update();
	});