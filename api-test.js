$(document).ready(function(){

	var token = 'bcgGZ8UMFVz6e30vUUFyPhDA0eUb9V';
	var url = 'https://api.clarifai.com/v1/tag';
	var img = 'http://www.elizabethoates.com/wp-content/uploads/2015/10/assorted-donuts.jpg';

	$('img').attr('src',img);

	$.ajax({
	  url: url,
	  data: {
	    url: img
	  },
	  success: function(data, status) {
	  	var tags = data.results[0].result.tag.classes;

	  	for (var i = 0; i < tags.length; i++) {
	  		$('#classes').append('<li>'+tags[i]+'</li>');
	  	}
	    return console.log("The returned data", data);
	  },
	  beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization','Bearer ' + token); } 
	});

});