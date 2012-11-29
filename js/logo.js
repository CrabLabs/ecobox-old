(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.logo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// 3
	this.instance = new lib.Animar6("synched",0);
	this.instance.setTransform(150,42.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:0,_off:false},0).to({y:102.9,alpha:1},10,cjs.Ease.get(1)).wait(36));

	// 2
	this.instance_1 = new lib.Animar3("synched",0);
	this.instance_1.setTransform(157.2,253.3,1,1,60,0,0,40.9,70.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({startPosition:0,_off:false},0).to({rotation:0,x:143.3,y:254.2},10,cjs.Ease.get(-0.99)).wait(56));

	// 1
	this.instance_2 = new lib.Animar1("synched",0);
	this.instance_2.setTransform(197.6,182.7,0.247,0.247);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(66));

	// txt
	this.instance_3 = new lib.Animar8("synched",0);
	this.instance_3.setTransform(150,315.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({startPosition:0,_off:false},0).to({alpha:1},25,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.5,165.3,20.2,34.8);


// symbols:
(lib.Animar8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC5i8Ih3CyICGDHIiJAAIhAhtIg+BtIiJAAICDjEIh4i1ICJAAIA0BbIA1hbICEAA").cp();
	this.shape.setTransform(110.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAjHQBXAAA4A6QA4A5AABUQAABWg4A5Qg4A5hXAAQhWAAg5g5Qg3g5AAhWQAAhVA3g4QA5g6BWAAIAAAAAA7hFQgUgjgnAAQgmAAgUAjQgQAdAAAoQAAArAQAcQAUAiAmAAQAnAAAUgiQAQgcAAgrQAAgogQgdIAAAA").cp();
	this.shape_1.setTransform(68.2,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkiFQBNAAAsA7QAnA1AABOQAABYgoA4QgtBBhUAAQhCAAglg3IgBAAIAAAsIh2AAIAAoIIB8AAIAAC4IABAAQAng0BDAAIAAAAAg7CNQASAeApAAQAkAAAUgjQAQgeAAgtQAAgpgQgZQgUghgkAAQgeAAgUAVQgaAZAAA1QAAA1ARAbIAAAA").cp();
	this.shape_2.setTransform(23.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAjHQBXAAA4A6QA4A5AABUQAABWg4A5Qg4A5hXAAQhWAAg5g5Qg3g5AAhWQAAhVA3g4QA5g6BWAAIAAAAAA7BHQAQgcAAgrQAAgogQgdQgUgjgnAAQgmAAgUAjQgQAcAAApQAAArAQAcQAUAiAmAAQAnAAAUgiIAAAA").cp();
	this.shape_3.setTransform(-22.3,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACCiiQA3ApAFBIIh4AAQAAgYgTgQQgRgPgYAAQgtAAgUAkQgOAaAAAwQAAApARAbQAUAfAjAAQA+AAAJhBIB4AAQgIBLg1ArQg0AqhNAAQhVAAg4g2Qg4g2AAhWQAAhaA2g4QA2g7BZAAQBLAAAzAlIAAAA").cp();
	this.shape_4.setTransform(-66.1,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADjHQBiAAA2BDQAyA/gFBjIkUAAQACAoAWAXQAWAXAlAAQAXAAATgKQAUgLAJgUIB0AAQgQA+g3AhQgxAehFAAQhbAAg4g1Qg6g2AAhdQAAhVA9g5QA7g5BTAAIAAAAAA2hcQgVgXgeAAQgfAAgVAVQgVAWgGAjICYAAQgBghgVgWIAAAA").cp();
	this.shape_5.setTransform(-110,6.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130.2,-26.5,260.5,53.3);


(lib.Animar6 = function() {
	this.initialize();

	// Capa 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAlQQAhAAASALIIzFFIozFGQgUALgfAAQgdAAgVgLIoylGIIylFQATgLAfAAIAAAAAAAm0Qg7AAgpAYIrIGcILIGdQArAYA5AAQA6AAArgYILImdIrImcQgpgYg8AAIAAAA").cp();
	this.shape_6.setTransform(-1.7,43.7,1,1,0,0,0,-1.8,43.7);

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.3,-43.7,162.7,87.6);


(lib.Animar3 = function() {
	this.initialize();

	// Capa 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkzB2IABqIIIzFEQATALAQAcQAQAcAAAWIgBKIIozlEQgTgLgQgcQgQgcAAgWIAAAAAl5DaQAdA0AqAYILIGaIACs1QAAgxgdgzQgeg0gqgYIrImaIgCM1QAAAxAeAzIAAAA").cp();

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.8,-70.3,81.7,140.9);


(lib.Animar1 = function() {
	this.initialize();

	// Capa 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AGYB2IgCs1IrIGaQgqAYgdA0QgeAzAAAxIACM1ILHmaQArgYAdg0QAegzAAgxIAAAA").cp();

	this.addChild(this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.8,-70.3,81.7,140.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;