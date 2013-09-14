/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/


$('#addition input:eq(0)').change(addition);
$('#addition input:eq(1)').change(addition);

function addition() {
	var sumbox1 = parseInt($('#addition input:eq(0)').val());
	var sumbox2 = parseInt($('#addition input:eq(1)').val());
	$('#addition input:eq(2)').val(sumbox1 + sumbox2);
}


$('#subtraction input:eq(0)').change(subtraction);
$('#subtraction input:eq(1)').change(subtraction);

function subtraction() {
	var sumbox1 = parseInt($('#subtraction input:eq(0)').val());
	var sumbox2 = parseInt($('#subtraction input:eq(1)').val());
	$('#subtraction input:eq(2)').val(sumbox1 - sumbox2);
}


$('#multiplication input:eq(0)').change(multiplication);
$('#multiplication input:eq(1)').change(multiplication);

function multiplication() {
	var sumbox1 = parseInt($('#multiplication input:eq(0)').val());
	var sumbox2 = parseInt($('#multiplication input:eq(1)').val());
	$('#multiplication input:eq(2)').val(sumbox1 * sumbox2);
}


$('#division input:eq(0)').change(division);
$('#division input:eq(1)').change(division);

function division() {
	var sumbox1 = parseInt($('#division input:eq(0)').val());
	var sumbox2 = parseInt($('#division input:eq(1)').val());
	$('#division input:eq(2)').val(sumbox1 / sumbox2);
}


$('#modulus input:eq(0)').change(modulus);
$('#modulus input:eq(1)').change(modulus);

function modulus() {
	var sumbox1 = parseInt($('#modulus input:eq(0)').val());
	var sumbox2 = parseInt($('#modulus input:eq(1)').val());
	$('#modulus input:eq(2)').val(sumbox1 % sumbox2);
}