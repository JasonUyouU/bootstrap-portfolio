$('a[href*="#"]').click(function(event){
	$('html, body').animate({
	scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 400);
   	event.preventDefault();
});

var $aboutMe = $('.about');
var $skill = $('.skill');
var $projectInfo = $('.projectInfo');
var $leftTop = $('.leftTop');
var $middleTop = $('.middleTop');
var $rightTop = $('.rightTop');
var $leftBottom = $('.leftBottom');
var $middleBottom = $('.middleBottom');
var $rightBottom = $('.rightBottom');
var $contactMe = $('.contactMe');

$aboutMe.waypoint(function() {
	$aboutMe.addClass('visible animated fadeInUp');
}, { offset: '95%' });
$skill.waypoint(function() {
	$skill.addClass('visible animated fadeInUp');
}, { offset: '95%' });
$projectInfo.waypoint(function() {
	$projectInfo.addClass('visible animated fadeInUp');
}, { offset: '95%' });
$leftTop.waypoint(function() {
	$leftTop.addClass('visible animated slideInLeft');
}, { offset: '95%' });
$middleTop.waypoint(function() {
	$middleTop.addClass('visible animated jackInTheBox');
}, { offset: '95%' });
$rightTop.waypoint(function() {
	$rightTop.addClass('visible animated slideInRight');
}, { offset: '95%' });
$leftBottom.waypoint(function() {
	$leftBottom.addClass('visible animated rotateInUpRight');
}, { offset: '95%' });
$middleBottom.waypoint(function() {
	$middleBottom.addClass('visible animated flipInX');
}, { offset: '95%' });
$rightBottom.waypoint(function() {
	$rightBottom.addClass('visible animated rotateInUpLeft');
}, { offset: '95%' });
$contactMe.waypoint(function() {
	$contactMe.addClass('visible animated fadeInUp');
}, { offset: '95%' });