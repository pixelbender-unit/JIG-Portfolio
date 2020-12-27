$("document").ready(function() {
$(".header, .subheader, .nav-container, .nav, .content").css({visibility:"visible", opacity:"1"});
$(".header").addClass("superShadow");
$(".header").click(function() {$(".header").removeClass("superShadow")});
$("iframe").css({opacity:"1", display:"inline-block"});
$(".vidwrap").fitVids();
$(".nav").fitText(.85, { minFontSize: '14px'});
//  SETS THE FULL LOAD DELAY
$(window).load(function() {
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
});
