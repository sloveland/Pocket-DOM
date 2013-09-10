var canvas = document.getElementById("easel"),
  stage = new createjs.Stage(canvas),
  centerX = canvas.width/2,
  centerY = canvas.height/2,
  background = new createjs.Shape(),
  logo = new createjs.Bitmap("_assets/images/logo.png"),
  tagline = new createjs.Bitmap("_assets/images/tagline.png"),
  pressStart = new createjs.Text("PRESS START", "30px Verdana", "#000000");

logo.x = 0;
logo.y = 0;
logo.alpha = 0.05;

tagline.x = 0;
tagline.y = 0;
tagline.alpha = 0.005;

pressStart.x = centerX;
pressStart.y = centerY+120;
pressStart.textAlign = 'center';
pressStart.alpha = 0.005;

background.graphics.beginFill('#000000').drawRect(0, 0, canvas.width, canvas.height);

stage.addChild(background);
stage.addChild(logo);
stage.addChild(tagline);
stage.addChild(pressStart);
stage.update();

createjs.Tween.get(logo).wait().to({alpha:1}, 3000);
  createjs.Tween.get(background).wait().to({alpha: 0}, 1000);
createjs.Tween.get(tagline).wait(2500).to({alpha: 1}, 500);
  createjs.Ticker.setFPS(30);
createjs.Tween.get(pressStart).wait(4000).to({alpha: 1}, 200).wait(800).call(onComplete);

function onComplete() {
  createjs.Tween.get(pressStart, {loop:true}, true)
  .to({alpha: 0}, 200).wait(600).to({alpha: 1}, 200).wait(800);
}

createjs.Ticker.addListener(function() {
  stage.update();
});


	// createjs.Sound.registerSound("_assets/music/intro.mp3", "intro");
	// createjs.Sound.addEventListener("loadComplete", soundLoaded);




function soundLoaded(event) {
	createjs.Sound.play("intro");
	createjs.Tween.get(logo).wait(2000).to({alpha:1}, 5000);
	createjs.Tween.get(background).wait(7000).to({alpha: 0}, 5000);
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		stage.update();
	});
}