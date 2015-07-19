$(function(){
	$.get('/blocks', appendToList);
	function appendToList(blocks){
		var list = [];
		for(var i in blocks){
			list.push($('<li>',{text: blocks[i] + 'im in blocks'}));
			console.log('hi');

		}
		$('.block-list').append(list);
	}
})