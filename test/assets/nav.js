// GSAP Navigation Menu Code
TweenLite.set("#thumb1, #thumb2, #thumb3, #thumb4, #thumb5, #thumb6",  {
    transformPerspective: 200,
    width: 350,
    height: 200,
	top:150,
});
var tn1 = TweenLite.from("#thumb1", 1, {
    rotationX: 120,
	top:50,
    opacity: 0,
    display: 'none',
    scale: 0.001,
    ease: Back.easeOut,
    paused: true,
});
var tn2 = TweenLite.from("#thumb2", 1, {
    rotationX: 120,
    opacity: 0,
	top:50,
    display: 'none',
    scale: 0.001,
    ease: Back.easeOut,
    paused: true,
});
var tn3 = TweenLite.from("#thumb3", 1, {
    rotationX: 120,
    opacity: 0,
	top:50,
    display: 'none',
    scale: 0.001,
    ease: Back.easeOut,
    paused: true,
});
var tn4 = TweenLite.from("#thumb4", 1, {
    rotationX: 120,
    opacity: 0,
	top:50,
    display: 'none',
    scale: 0.001,
    ease: Back.easeOut,
    paused: true,
});
var tn5 = TweenLite.from("#thumb5", 1, {
    rotationX: 120,
    opacity: 0,
	top:50,
    display: 'none',
    scale: 0.001,
    ease: Back.easeOut,
    paused: true,
});
var tn6 = TweenLite.from("#thumb6", 1, {
    rotationX: 120,
    opacity: 0,
	top:50,
    display: 'none',
    scale: 0.001,
    ease: Back.easeOut,
    paused: true,
});

$('#nav1, #thumb1').mouseover(function () {
    tn1.play();
    tn1.timeScale(1);
});
$('#nav1, #thumb1').mouseout(function () {
    tn1.timeScale(1.75);
    tn1.reverse();
});

$('#nav2, #thumb2').mouseover(function () {
    tn2.play();
    tn2.timeScale(1);
});
$('#nav2, #thumb2').mouseout(function () {
    tn2.timeScale(1.75);
    tn2.reverse();
});

$('#nav3, #thumb3').mouseover(function () {
    tn3.play();
    tn3.timeScale(1);
});
$('#nav3, #thumb3').mouseout(function () {
    tn3.timeScale(1.75);
    tn3.reverse();
});

$('#nav4, #thumb4').mouseover(function () {
    tn4.play();
    tn4.timeScale(1);
});
$('#nav4, #thumb4').mouseout(function () {
    tn4.timeScale(1.75);
    tn4.reverse();
});

$('#nav5, #thumb5').mouseover(function () {
    tn5.play();
    tn5.timeScale(1);
});
$('#nav5, #thumb5').mouseout(function () {
    tn5.timeScale(1.75);
    tn5.reverse();
});

$('#nav6, #thumb6').mouseover(function () {
    tn6.play();
    tn6.timeScale(1);
});
$('#nav6, #thumb6').mouseout(function () {
    tn6.timeScale(1.75);
    tn6.reverse();
});