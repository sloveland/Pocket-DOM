var canvas = document.getElementById("easel"),
stage = new createjs.Stage(canvas),
centerX = canvas.width/2,
centerY = canvas.height/2;

var logo = new createjs.Bitmap("_assets/images/pokemon_logo.png");
logo.x = centerX;
logo.y = centerY;
logo.regX = 320;
logo.regY = 280;
logo.alpha = 0.001;

createjs.Sound.registerSound("_assets/music/intro.mp3", "intro");
createjs.Sound.addEventListener("loadComplete", soundLoaded);

stage.addChild(logo);
var logoFade = false;



function soundLoaded(event) {
	createjs.Sound.play("intro");
	createjs.Tween.get(logo).wait(2000).to({alpha:1}, 5000);
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		stage.update();
	});
}