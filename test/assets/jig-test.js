// wait for window to load to fire animations
$("document").ready(function() {
// 3D Header  
var headtn = TweenLite.from(".header", 0.3, {className:"+=superShadow", color:"#9F3", ease:Power1.easeInOut, paused:true});
	$('.header').mouseover(function () {headtn.play();});
	$('.header').mouseout(function () {headtn.reverse();});
// Header Bounce Down Animation / Subheader Bounce In Animation & nav-container/content fade
var HDtn = new TimelineLite();
	HDtn.to(".header, .subheader, .nav-container, .content", 0, {visibility:"visible"})
	.from(".header", 1, {marginTop:"-=300px", ease:"Bounce.easeOut"})
	.from(".subheader", 1.5, {opacity:0, left:"-25%", ease:"Elastic.easeOut"}, "-=.25")
	.to(".nav-container", 1, {opacity:1}, "-=1")
  	.to(".content", 1, {opacity:1}, "-=.5");
var tl = new TimelineLite();
	tl.timeScale(2.5)
	.to("#nav3", 0, {visibility:"visible"})
	.from("#nav3", 1, {left:"-=300px", ease:"Back.easeOut"})
	.to("#nav4", 0, {visibility:"visible"}, "-=.75")
	.from("#nav4", 1, {right:"-=300px", ease:"Back.easeOut"}, "-=.75")
	.to("#nav2", 0, {visibility:"visible"}, "-=.75")
	.from("#nav2", 1, {left:"-=300px", ease:"Back.easeOut"}, "-=.75")
	.to("#nav5", 0, {visibility:"visible"}, "-=.75")
	.from("#nav5", 1, {right:"-=300px", ease:"Back.easeOut"}, "-=.75")
	.to("#nav1", 0, {visibility:"visible"}, "-=.75")
	.from("#nav1", 1, {left:"-=300px", ease:"Back.easeOut"}, "-=.75")
	.to("#nav6", 0, {visibility:"visible"}, "-=.75")
	.from("#nav6", 1, {right:"-=300px", ease:"Back.easeOut"}, "-=.75")
	.from(".thumb", 0, {visibility:"hidden"});
$(".nav").click(function(){
	tl.reverse();
});
// Add delay for sub-nav exit animation
$("a.delay").click(function(event){
	event.preventDefault();
	var dest = $(this).attr('href');
	if (typeof(dest) != "undefined" && dest != "") {
		setTimeout(function(){window.location.href = dest;}, 1000);
	}
});
// fitVid & fitText
$(".vidwrap").fitVids();
$(".nav").fitText(.85, { minFontSize: '14px'});
//Load/config text-avoid effect
$(function() {
	$("#avoid").netkevin_text_animation("mouseover_escape", { timer: 500, horizontal_shift: 75, vertical_shift: 75, random: true });
	    $(window).resize(function() {
        $("#avoid").netkevin_text_animation("mouseover_escape", { timer: 500, horizontal_shift: 75, vertical_shift: 75, random: true });
    });
});
TweenLite.set("#thumb1, #thumb2, #thumb3, #thumb4, #thumb5, #thumb6",  {
    transformPerspective: 175,
});
var tn1 = new TimelineLite();
	tn1.paused(true)
	.to("#thumb1", 0, {display:"block"})
	.from("#thumb1", 1, {rotationX: 120, top:-110, opacity: 0, scale: 0.001, ease: Back.easeOut});
var tn2 = new TimelineLite();
	tn2.paused(true)
	.to("#thumb2", 0, {display:"block"})
	.from("#thumb2", 1, {rotationX: 120, top:-110, opacity: 0, scale: 0.001, ease: Back.easeOut});
var tn3 = new TimelineLite();
	tn3.paused(true)
	.to("#thumb3", 0, {display:"block"})
	.from("#thumb3", 1, {rotationX: 120, top:-110, opacity: 0, scale: 0.001, ease: Back.easeOut});
var tn4 = new TimelineLite();
	tn4.paused(true)
	.to("#thumb4", 0, {display:"block"})
	.from("#thumb4", 1, {rotationX: 120, top:-110, opacity: 0, scale: 0.001, ease: Back.easeOut});
var tn5 = new TimelineLite();
	tn5.paused(true)
	.to("#thumb5", 0, {display:"block"})
	.from("#thumb5", 1, {rotationX: 120, top:-110, opacity: 0, scale: 0.001, ease: Back.easeOut});	
var tn6 = new TimelineLite();
	tn6.paused(true)
	.to("#thumb6", 0, {display:"block"})
	.from("#thumb6", 1, {rotationX: 120, top:-110, opacity: 0, scale: 0.001, ease: Back.easeOut});	
$('#nav1, #nav1 a, #thumb1').hover(
	function () {
    tn1.play()
    tn1.timeScale(1)
	},
function () {
    tn1.timeScale(1.5)
    tn1.reverse()
});

$('#nav2, #thumb2').mouseover(function () {
    tn2.play()
    tn2.timeScale(1)
});
$('#nav2, #thumb2').mouseout(function () {
    tn2.timeScale(1.5)
    tn2.reverse()
});
$('#nav3, #thumb3').mouseover(function () {
    tn3.play()
    tn3.timeScale(1)
});
$('#nav3, #thumb3').mouseout(function () {
    tn3.timeScale(1.5)
    tn3.reverse()
});
$('#nav4, #thumb4').mouseover(function () {
    tn4.play()
    tn4.timeScale(1)
});
$('#nav4, #thumb4').mouseout(function () {
    tn4.timeScale(1.5)
    tn4.reverse()
});
$('#nav5, #thumb5').mouseover(function () {
    tn5.play();
    tn5.timeScale(1);
});
$('#nav5, #thumb5').mouseout(function () {
    tn5.timeScale(1.5)
    tn5.reverse()
});
$('#nav6, #thumb6').mouseover(function () {
    tn6.play()
    tn6.timeScale(1)
});
$('#nav6, #thumb6').mouseout(function () {
    tn6.timeScale(1.5)
    tn6.reverse()
});
var vidOL = new TimelineLite();
  vidOL.paused(true)
  .to("#vidOverlay", .15, {opacity: 0, ease:"Power.easeInOut", display:"none"});
$("#thumb4").mouseover(function () {vidOL.play();});
$("#thumb4").mouseout(function () {vidOL.reverse();}
);

	TweenLite.to("iframe", 2, {delay: 3, opacity:1, display:"inline-block"});
	// AddThis Smart Layers BEGIN 
  addthis.layers({
    'theme' : 'transparent',
    'share' : {
      'position' : 'left',
      'numPreferredServices' : 7,
	  'services' : 'facebook,twitter,google_plusone_share,tumblr,pinterest,email,more'
    }, 
    'follow' : {
	  'offset' : {'top':'125px'},
	  'theme' : 'light',
      'services' : [
        {'service': 'linkedin', 'id': 'jaredigreene'}
      ]
    }   
  });

});