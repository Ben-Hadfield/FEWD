$('a.location').click(
	function(e){
		e.preventDefault()
		$('.locationbar').slideToggle();
	})

$('a.category').click(
	function(e){
		e.preventDefault()
		$('.categorybar').slideToggle();
	})

var current_date = new Date ( );

var month_names = new Array ( );
month_names[month_names.length] = "January";
month_names[month_names.length] = "February";
month_names[month_names.length] = "March";
month_names[month_names.length] = "April";
month_names[month_names.length] = "May";
month_names[month_names.length] = "June";
month_names[month_names.length] = "July";
month_names[month_names.length] = "August";
month_names[month_names.length] = "September";
month_names[month_names.length] = "October";
month_names[month_names.length] = "November";
month_names[month_names.length] = "December";

var day_names = new Array ( );
day_names[day_names.length] = "Sunday";
day_names[day_names.length] = "Monday";
day_names[day_names.length] = "Tuesday";
day_names[day_names.length] = "Wednesday";
day_names[day_names.length] = "Thursday";
day_names[day_names.length] = "Friday";
day_names[day_names.length] = "Saturday";

document.write ( day_names[current_date.getDay()] );
document.write ( ", " );
document.write ( month_names[current_date.getMonth()] );
document.write ( " " + current_date.getDate() );
document.write ( " " );
document.write ( " " + current_date.getFullYear() );

// need the left and right arrows to switch forward and back one day from the current date
// need the content in contentwrapper to refresh to only include those with a deal on that date and still available (i.e. a lunch deal after lunch is useless)


// need JS to dynamically refresh the list based on selections made by user on category/location without page refresh

// need to be able to swipe or close divs that will be replaced by divs below it and lazy load them as well

//need divs to open to include more information including a map etc.










