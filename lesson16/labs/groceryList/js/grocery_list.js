$('#instruction-title').remove()
$('#instruction').remove()

$('#shopping-list').before('<h1>My shopping list</h1>')

	var list = [];
	var food_item;
	var found = false;
	var response = prompt('(a)dd item or (q)uit?');
	while(response === 'a'){
		food_item = prompt('What do you need to add');
		for (var i = 0; i<list.length; i++){
			if(list[i] === food_item ){
				found = true;
				alert('This item is already on the list');
				break;
			}
		}
		if (!found){
			list.push(food_item);
		}
		found = false;
		response = prompt('(a)dd item or (q)uit?');
	}

	// Print the list to the console
	
	for (var i=0; i < list.length; i++){
	$('#shopping-list').append('<li>' + list[i] + '</li>');

	}