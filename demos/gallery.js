$(document).ready(function() {

var thumb = $('#thumbs div a');	
var firstSrc = $('#thumbs div:first-child a').attr('href');
var tURL; // need this to be global
var currentIndex = null; // need this to be global

//pushes all thumb LINKS to array
var thumbsArray = [];
$('#thumbs div a').each(function () {
		thumbsArray.push( $(this).attr('href') );
});

//sets the big img to be the first thumbnail
$('#firstImg').attr('src', firstSrc);
//sets initial height to first thumbnail's
$('#big').height($('#big img').height()); 


// *****************************************************
// Loads new image into big frame
if ($('#firstImg').length > 0) { //if firstImg exists in DOM, set to index[0]
	currentIndex = 0;
	// console.log("Current Index is: " + currentIndex);
}

// CLICK ACTION FOR THUMBNAIL
thumb.click(function() {
tURL = $(this).attr('href'); //captures URL of clicked thumbnail

function slideIn() { // Slides the new image in FROM the right
		newIMG.animate({left: "0%"}, 750);
		return newIMG;
}

if (tURL !== $('#big img').attr('src')) { //Only change imag if selected img isn't already loaded into DOM
	
	var newIMG = $('<img style="left:100%;" src="' + tURL + '"/>');

	$('#big img, #firstImg').first().animate({
			left: "-100%"
		},750, function(){
				$(this).remove();
			}
	);

	$('#big').prepend( slideIn() );

	$('#big').animate({
		height: $('#big img').height()
	}, 750);

// If tURL is found within thumbsArray, save currentIndex
for (var i=0; i<thumbsArray.length;i++) {
		if (tURL == thumbsArray[i]) {
		    currentIndex = i;
		    // console.log(currentIndex);
		   }
	}
	console.log(currentIndex);

} //End of "is currently loaded in DOM" conditional


// JUST NEED TO GET THE DISABLED EFFECTS CORRECT....
// Has to be updated on thumbnail press
if (currentIndex == 0) {
	toggleBigArrow();
	toggleBigArrow("left");
}
else if (currentIndex == (thumbsArray.length-1) ) {
	toggleBigArrow();
	toggleBigArrow("right");
}
else {
	toggleBigArrow();
}



return false;
}); //End of Big Image loading click function
// *************************************


// *****************************************************
// Thumbnail arrow buttons

//Calculate width of divs within #thumbs, add all up,
//make it the limit of which images can be moved

var imgCount = thumbsArray.length; // change to a var of img.width() for scalability
console.log("Total amount of images: " + imgCount);

var rightPress = 0;
updateBtnPress(rightPress);

// Updates the amount of time the right button has been pressed
function updateBtnPress(rightPress){
	this.rightPress = rightPress;

	//limiter for left nav button
	if (rightPress <= 0) {
		$('#navLeft').attr('disabled','disabled');
	}
	else {
		$('#navLeft').removeAttr('disabled','disabled');
	}
	//limiter for right nav button
	var x1 = imgCount / 3;
	var y1 = Math.floor(x1);
	if (imgCount % 3 === 0) {
	    y1 = x1 - 1;
	}
	if (rightPress >= y1) {
		$('#navRight').attr('disabled','disabled');
	}
	else {
		$('#navRight').removeAttr('disabled','disabled');
	}
} //End updateBtnPress()

// Right navigation click function
$('#navRight').click(function(){
	
	$('#thumbs div').animate({
		left: "-=453"
	});
	rightPress++;
	updateBtnPress(rightPress);
});
//left navigation click function
$('#navLeft').click(function(){
	$('#thumbs div').animate({
		left: "+=453"
	});
	rightPress--;
	updateBtnPress(rightPress);
});
// End of thumbnail navigation
// *************************************



// *****************************************************
// Navigation within Big frame
var bigL = $('#bigLeft');
var bigR = $('#bigRight');

// Disables left or right big nav buttons
function toggleBigArrow(direc) {
	if (direc == "left") {
		bigL.attr('disabled','disabled');
	}
	else if (direc == "right") {
		bigR.attr('disabled','disabled');
	}
	// if no direction is provided, ENABLE BOTH
	else {
		bigL.removeAttr('disabled','disabled');
		bigR.removeAttr('disabled','disabled');
	}
}

// *****************************************8
function bigNav (dir){

console.log("Current index: " + (currentIndex + 1));

//adds 1 to current index
var _nextIndex;
function nextIndex() {
	_nextIndex = currentIndex+=1;
	return _nextIndex;
}

// subtracts 1 from current index
var _prevIndex;
function prevIndex() {
	_prevIndex = currentIndex-=1;
	return _prevIndex;
}


//right navigation button
if (dir == "right") {
var nextImg = $('<img style="left:100%;" src="' + (thumbsArray[nextIndex()]) + '"/>');

function slideRight() { // Slides the new image in FROM the right
		nextImg.animate({left: "0%"}, 750);
		return nextImg;
}
//slides current image to left
$('#big img, #firstImg').first().animate({
		left: "-100%"
	},750, function(){
			$(this).remove();
		}
);
//slides new image in
$('#big').prepend( slideRight() );

//animates frame height to image.height()
$('#big').animate({ 
	height: $('#big img').height()
}, 750);
}



//left navigation button
if (dir == "left") {
var prevImg = $('<img style="left:-100%;" src="' + (thumbsArray[prevIndex()]) + '"/>');
	
function slideLeft() { // Slides the new image in FROM the right
		prevImg.animate({left: "0%"}, 750);
		return prevImg;
}
//slides current image to left
$('#big img, #firstImg').first().animate({
		left: "100%"
	},750, function(){
			$(this).remove();
		}
);
//slides new image in
$('#big').prepend( slideLeft() );

//animates frame height to image.height()
$('#big').animate({ 
	height: $('#big img').height()
}, 750);
}



// JUST NEED TO GET THE DISABLED EFFECTS CORRECT....
// Has to be updated on thumbnail press
if (currentIndex == 0) {
	toggleBigArrow("left");
}
else if (currentIndex == (thumbsArray.length-1) ) {
	toggleBigArrow("right");
}
else {
	toggleBigArrow();
}


} // ************* End of bigNav() *******************



toggleBigArrow("left");
bigL.click(function(){
	bigNav("left");
});

bigR.click(function(){
	bigNav("right");
});







// End Big frame navigation
// *************************************

// end DOM ready
});