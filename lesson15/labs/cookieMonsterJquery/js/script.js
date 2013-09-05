$(document).ready(function() {

$('h2').css('background-color', 'red')

$('p').before('fuck the cookie monster')
$('p').after('fuck the cookie monster')
$('p').wrap('<div class = "fuckthecookiemonster" />')
$('a').append('fuck the cookie monster')

id = setInterval("$('#container').toggleClass('colored-container')", 1000)
});

