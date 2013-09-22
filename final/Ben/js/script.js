
// 1. Category and location bars
// 
// 

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

// 2. Date updater
// 
// 

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

prepareAds();

//$('.datescroll').on('click','a', changeDate)

function changeDate(step){
	current_date = newDate(current_date, step) // this works because the left arrow 
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

// 3. Deal sorter - by day
// 
//

// function sortDeals(json, key, condition, newArray)	{

function sortDealsByDay(json, condition, newArray)	{
	for (var i = 0; i < deals.length; i++) {
		// console.log("This is the key: ", key)
		// var key = "weekDay"
		// if (json[i].key === condition) {

		
		if (json[i].weekDay === condition) {
		// if (("json["+ i + "]"+ key) === condition) {

		newArray.push(json[i])
		console.log(json[i].weekDay)

		};
	
	};
};

$(".arrowright, .arrowleft").click(function() {

	if ($(this).hasClass('arrowleft')) {
		changeDate(false);
	} else {
		changeDate(true);
	}

	prepareAds();

});

function prepareAds() {
	var todaysDeals = [];
	var con = dateString(current_date).split(" ");
	// console.log(con[0])
	// var derk = "weekDay"
	sortDealsByDay(deals, con[0], todaysDeals)
	// sortDeals(deals, derk, con[0], todaysDeals)

// console.log(todaysDeals)	

	$("#one").html('');

    for (var i = 0; i < todaysDeals.length; i++) {
      $("#one").prepend('<div class="ad ad-' + i + ' ' + todaysDeals[i].adSize + '"></div>');
      $(".ad-" + i).html('<div class="head"></div><div class="promopic"></div><div class="foot"></div>');
      $(".ad-" + i + " .head").html('<div class="floatleft"><p>' + todaysDeals[i].category + '</p></div><div class="floatright"><p>' + todaysDeals[i].district + '</p></div>');
      $(".ad-" + i + " .promopic").html('<img src=' + todaysDeals[i].mainImg + '>');
      $(".foot").append('<div class="logo floatleft"><img src=' + todaysDeals[i].logoImg + '></div><div class="description floatright"><h2>' + todaysDeals[i].adTitle + '<h2>');
      $(".description").append('<p>' + todaysDeals[i].adDescription + '</p>'); 
  }
}


$("#locationsubmitfield").click(function() {

	var checkLocation = []
	$("input[id='adDistrictCheck']:checked").each(function ()
	{
	    checkLocation.push($(this).val());
	});

	for (var i = 0; i < deals.length; i++) {
		if ($(".head:contains('" + deals[i].district + "')")) {
			$(".ad").show()
		} else {
			$(".ad").remove()
		};

	};

		console.log(checkLocation)

});


$("#locationclearfield").click(function() {
	$('#adDistrictCheck').find(':checked').each(function() {
   		$(this).removeAttr(':checked');
   	});
});


// Region checkboxes
$('#adRegionCheck-hk').click(function(){ toggleDistrictsCheckBox('#adRegionCheck-hk', '#locationlist-hk'); });
$('#adRegionCheck-kl').click(function(){ toggleDistrictsCheckBox('#adRegionCheck-kl', '#locationlist-kl'); });
$('#adRegionCheck-nt').click(function(){ toggleDistrictsCheckBox('#adRegionCheck-nt', '#locationlist-nt'); });

function toggleDistrictsCheckBox(regionCheckboxId, locationListId) {
	if ($(regionCheckboxId).is(":checked")) {
		$(locationListId + ' .district').each(function(){
			$(this).prop('checked', true);
		});
	} else {
		$(locationListId + ' .district').each(function(){
			$(this).prop('checked', false);
		});
	}
}



// need JS to dynamically refresh the list based on selections made by user on category/location without page refresh


// need to be able to swipe or close divs that will be replaced by divs below it and lazy load them as well


//need divs to open to include more information including a map etc.


// function initialize() {
//         var map_canvas = document.getElementById('map_canvas');
//         var map_options = {
//           center: new google.maps.LatLng(44.5403, -78.5463),
//           zoom: 8,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//         var map = new google.maps.Map(map_canvas, map_options)
//       }
//       google.maps.event.addDomListener(window, 'load', initialize);






