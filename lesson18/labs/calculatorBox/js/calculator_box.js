/*Javascript: Advanced Functions

This example is a little more advanced.

-	First re-create the .png image using HTML code.
-	Your css will handle highlighting the boxes when the user hovers over them. 

Each box represents a value to be added/subtracted.  
Your JS file should accomplish the following: 
-	The zero box in the center is a running total. It will update with the current total every time the user clicks a box.  
(i.e The box in the middle indicates zero, I click the +30 box and the zero update to 30. I then click the 10 box and it updates t0 40). 

For an extra bonus, use the Red and Blue boxes to update the background color.

Hint: Research the .click(), .text() in jQuery documentation
*/

//Here is some code to get you started:

var total = 0;

$(function(){
	$('#app').on('click','mathrow > div', update)


//$('#a10').on('click',10,update)
//$('#a20').on('click',20,update)
//$('#a30').on('click',30,update)
//$('#n10').on('click',-10,update)
//$('#n20').on('click',-20,update)
//$('#n30').on('click',-30,update)


//$('#a10').click(function(){ update(10); });
//$('#a20').click(function(){ update(20); });
//$('#a30').click(function(){ update(30); });
//$('#n10').click(function(){ update(-10); });
//$('#n20').click(function(){ update(-20); });
//$('#n30').click(function(){ update(-30); });
});

function update(event) {
	total = total + parseInt($(this).text());
	//total = total + event;
	$('#out').text(total);
}