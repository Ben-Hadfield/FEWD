$('a.location').click(
	function(e){
		e.preventDefault()
		if($('.categorybar').css('display') == 'block') {
			$('.categorybar').slideToggle();
		}
		$('.locationbar').slideToggle();
	})

$('a.category').click(
	function(e){
		e.preventDefault()
		if($('.locationbar').css('display') == 'block') {
			$('.locationbar').slideToggle();
		}
		$('.categorybar').slideToggle();
	})

var current_date = new Date ( );

var month_names = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"]

var day_names = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"]

var date = [
	day_names[current_date.getDay()],
	month_names[current_date.getMonth()],
	current_date.getDate()
	].join(" ");

$('#date').text(date);

// left and right arrows to switch forward and back one day from the current date

$('.arrowleft').click(function(event) {

var newDate = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate()-1);

current_date = newDate

var newDateString =	day_names[newDate.getDay()] + ' ' + month_names[newDate.getMonth()] + ' ' + newDate.getDate();
$('#date').text(newDateString);

})

$('.arrowright').click(function(event) {

var newDate = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate()+1);

current_date = newDate

var newDateString =	day_names[newDate.getDay()] + ' ' + month_names[newDate.getMonth()] + ' ' + newDate.getDate();
$('#date').text(newDateString);

})


// need the content in contentwrapper to refresh to only include those with a deal on that date and still available (i.e. a lunch deal after lunch is useless)


// need JS to dynamically refresh the list based on selections made by user on category/location without page refresh


// need to be able to swipe or close divs that will be replaced by divs below it and lazy load them as well


//need divs to open to include more information including a map etc.









