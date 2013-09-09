/**
 * Javascript Exercise: Attribute Manipulation!
 */

/**
 * Question 1:
 * Find the img src for the img in figure #fig1
 * Store the result in a variable named "q1"
 * Print q1 to the console.
 */
var q1 = $('#fig1 img').attr('src');


/**
 * Question 2:
 * Now change the src of that image to this url:
 * "http://placekitten.com/500/200"
 */

var q2 = $("#fig1 img").attr("src", "http://placekitten.com/500/200");

/**
 * Question 3:
 * Find the 'role' of the header on index.html
 * Store the result in a variable named "q3"
 * Print q3 variable to the console.
 */

var q3 = $("header").attr('role')

/**
 * Question 4:
 * Add the "success" class to each of "the-fact" list items
 */
$("#the-facts li").addClass("success")



/**
 * Question 5:
 * Check if the figure with id "fig2" has the class "awesome". If not, apply it
 */

//var q5 = $("#fig2").attr('awesome')
//console.log(q5)
//$("#fig2").addClass('awesome')

$("#fig2").toggleClass('awesome')

/**
 * Question 6:
 * That paragraph with the "warn" class looks super intimidating. Remove the warn class.
 */

$('p.warn').removeClass('warn')

/**
 * Question 7:
 * Remove the "success" class from the first two <li>'s.
 */

$('#the-facts li:nth-child(1)').removeClass('success');
$('#the-facts li:nth-child(2)').removeClass('success');
