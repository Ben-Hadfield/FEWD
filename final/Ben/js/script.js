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

$('.datescroll').on('click','a', changeDate)

function changeDate(e){
	current_date = newDate(current_date, $(this).index()) // this works because the left arrow 
	// has an index of 0, and the right arrow has an index of 2, since we coerce them to a Boolean
	// in the first line of the newDate function, this is an elegant way to determine the direction
	// in which you want to increment.
	$('#date').text(dateString(current_date));
}

function newDate(base, increment){
	step = increment ? 1 : -1
	return new Date(base.getFullYear(), base.getMonth(), base.getDate() + step);
}

function dateString(date){
	return [ 
		day_names[date.getDay()],
		month_names[date.getMonth()],
		date.getDate()
	].join(' ');
}
// need the content in contentwrapper to refresh to only include those with a deal on that date and still available (i.e. a lunch deal after lunch is useless)


// need JS to dynamically refresh the list based on selections made by user on category/location without page refresh


// need to be able to swipe or close divs that will be replaced by divs below it and lazy load them as well


//need divs to open to include more information including a map etc.









