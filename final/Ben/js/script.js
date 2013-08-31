$('a.location').click(
	function(e){
		e.preventDefault()
		$('.locationbar').slideToggle();
	})

$('a.category').click(
	function(e){
		e.preventDefault()
		$('.category_active').slideToggle();
	})