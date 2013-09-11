$('h1').text('User account information');


var name = prompt('What is your name?');
$('h2').text(name);

var number = prompt('What is your account number?');
$('h3').text(number);

var date = new Date();

$('p').text('customer since:' + date)


$('blockquote').text('Date opened:' + date)

$('blockquote:last').hide()