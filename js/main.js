$(document).on("ready", function(){
	var canvas, stage, exportRoot;

	canvas = $("#canvas")[0];
	exportRoot = new lib.logo();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(stage);

});