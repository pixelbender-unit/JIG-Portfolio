// The Javascript in this document is under copyright by Jared i.Greene, and may not be used, reproduced, or modified without written consent.
// Contact Jared i.Greene to request permission to use code included in this website.
// Email: JarediGreene@gmail.com

<!-- AddThis Smart Layers BEGIN -->
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

<!--Set link delay-->
function delay (URL) {
    setTimeout( function() { window.location = URL }, 2000 );}

<!-- home box hover actions -->
    var bx1 = $("#box-HL1"),
		bx2 = $("#box-HL2"),
		bx3 = $("#box-HL3"),
		bx4 = $("#box-HL4"),
		bx5 = $("#box-HL5"),
		bx6 = $("#box-HL6"),
		bar1 = $("#whitebar1"),
		bar2 = $("#whitebar2"),
		bar3 = $("#whitebar3"),
		bar4 = $("#whitebar4"),
		bar5 = $("#whitebar5"),
		bar6 = $("#whitebar6"),
		wipe1 = $("#box-wipe1"),
		wipe2 = $("#box-wipe2"),
		wipe3 = $("#box-wipe3"),
		wipe4 = $("#box-wipe4"),
		wipe5 = $("#box-wipe5"),
		wipe6 = $("#box-wipe6");
// writing
var htn1 = new TimelineLite();
  htn1.paused(true)
  .to(bx1, 0.3, {marginTop:"-10px"})
  .from(wipe1, 0.3, {marginLeft:"-=110%"}, "-=0.2")
  .from(bar1, 1, {marginLeft:"200%", ease:"Bounce.easeOut"}, "-=0.5");
// web
var htn2 = new TimelineLite();
  htn2.paused(true)
  .to(bx2, 0.3, {marginTop:"-10px"})
  .from(wipe2, 0.3, {marginLeft:"+=110%"}, "-=0.2")
  .from(bar2, 1, {marginLeft:"-100%", ease:"Bounce.easeOut"}, "-=0.5");
// photo
var htn3 = new TimelineLite();
  htn3.paused(true)
  .to(bx3, 0.3, {marginTop:"-10px"})
  .from(wipe3, 0.3, {marginLeft:"-=110%"}, "-=0.2")
  .from(bar3, 1, {marginLeft:"200%", ease:"Bounce.easeOut"}, "-=0.5");
// video
var htn4 = new TimelineLite();
  htn4.paused(true)
  .to(bx4, 0.3, {marginTop:"-=42%"})
  .from(wipe4, 0.3, {marginLeft:"+=110%"}, "-=0.2")
  .from(bar4, 1, {marginLeft:"-100%", ease:"Bounce.easeOut"}, "-=0.5");
// graphic
var htn5 = new TimelineLite();
  htn5.paused(true)
  .to(bx5, 0.3, {marginTop:"-10px"})
  .from(wipe5, 0.3, {marginLeft:"-=110%"}, "-=0.2")
  .from(bar5, 1, {marginLeft:"200%", ease:"Bounce.easeOut"}, "-=0.5");
// 3D
var htn6 = new TimelineLite();
  htn6.paused(true)
  .to(bx6, 0.3, {marginTop:"-10px"})
  .from(wipe6, 0.3, {marginLeft:"+=110%"}, "-=0.2")
  .from(bar6, 1, {marginLeft:"-100%", ease:"Bounce.easeOut"}, "-=0.5");
// Call Functions  
$(".art-box").mouseover(function () {
    htn1.timeScale(1);
	htn1.play();
});
$(".art-box").mouseout(function () {
	htn1.timeScale(3);
	htn1.reverse();
});
$(".web-box").mouseover(function () {
	htn2.timeScale(1);
	htn2.play();
});
$(".web-box").mouseout(function () {
	htn2.timeScale(3);
	htn2.reverse();
});
$(".photo-box").mouseover(function () {
    htn3.timeScale(1);
	htn3.play();
});
$(".photo-box").mouseout(function () {
	htn3.timeScale(3);
	htn3.reverse();
});
$(".vid-box").mouseover(function () {
    htn4.timeScale(1);
	htn4.play();
});
$(".vid-box").mouseout(function () {
	htn4.timeScale(3);
	htn4.reverse();
});
$(".gphx-box").mouseover(function () {
    htn5.timeScale(1);
	htn5.play();
});
$(".gphx-box").mouseout(function () {
	htn5.timeScale(3);
	htn5.reverse();
});
$(".misc-box").mouseover(function () {
    htn6.timeScale(1);
	htn6.play();
});
$(".misc-box").mouseout(function () {
	htn6.timeScale(3);
	htn6.reverse();
});

<!--Load/config text-avoid effect-->
$(function() {
	$("#avoid").netkevin_text_animation("mouseover_escape", { timer: 500, horizontal_shift: 75, vertical_shift: 75, random: true });
	    $(window).resize(function() {
        $("#avoid").netkevin_text_animation("mouseover_escape", { timer: 500, horizontal_shift: 75, vertical_shift: 75, random: true });
    });
});

<!--Apply exit animation to home boxes-->
$(".art-box").click(function(){
  $(".art-box").addClass("animated hinge");
  }); 
$(".web-box").click(function(){
  $(".web-box").addClass("animated hinge");
  }); 
$(".photo-box").click(function(){
  $(".photo-box").addClass("animated hinge");
  }); 
$(".vid-box").click(function(){
  $(".vid-box").addClass("animated hinge");
  }); 
$(".gphx-box").click(function(){
  $(".gphx-box").addClass("animated hinge");
  }); 
$(".misc-box").click(function(){
  $(".misc-box").addClass("animated hinge");
  }); 
  
<!-- Subheader Bounce In Animation -->
	var navtn = new TimelineLite(),
    sh = $(".subheader");
navtn.staggerFrom(sh, 1.5, {delay:1.5, opacity:0, left:"-25%", ease:"Elastic.easeOut"})

<!--Config header text animation-->
$(".tlt").textillate({
  // the default selector to use when detecting multiple texts to animate
  selector: '.texts',

  // enable looping
  loop: false,

  // sets the minimum display time for each text before it is replaced
  minDisplayTime: 2000,

  // sets the initial delay before starting the animation
  // (note that depending on the in effect you may need to manually apply 
  // visibility: hidden to the element before running this plugin)
  initialDelay: 50,

  // set whether or not to automatically start animating
  autoStart: true,

  // custom set of 'in' effects. This effects whether or not the 
  // character is shown/hidden before or after an animation  
  inEffects: [],


  // in animation settings
  in: {
    // set the effect name
    effect: 'fadeInDown',

    // set the delay factor applied to each consecutive character
    delayScale: 2,

    // set the delay between each character
    delay: 50,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence 
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true
  },
});

// Load page
$("document").ready(function() {
    $(".container").css({visibility:"visible"});
});
