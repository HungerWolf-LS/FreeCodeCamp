var APIurl = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=general';
var headers={ 'X-Mashape-Key': 'nDegI0wJR6mshIjYx6LMEfYdXB3Lp1oa3FRjsnfnpNhjfD2Xjb', 
 			   'Content-Type': 'application/x-www-form-urlencoded',
 			   'Accept': 'application/json'
 			};

var getQuote = function(){
	$.ajax({
		type: 'GET',
		url: APIurl,
		headers: headers,
		success: function(response){
			response= JSON.parse(response)
			processQuotes(response);
		},
		error: function(err){
			console.log("An error occured", err);
		}
	})
}


// Random quote color
var randomQuoteColor= function(param){
	var randomness = Math.ceil(Math.random()* 4);
	var color =['notice-success','notice-warning','notice-info','notice-danger'];
	var newQuote = '<div class="notice ' + color[randomness-1] + '"><strong>' + param.quote + '</strong><br><p class="text-muted autho"r>' + param.author + '</p>';
	return newQuote;
}


// Process and append Quotes
var processQuotes= function(param){
	var newQuote= randomQuoteColor(param);
	$('.quotes').append(newQuote);
}


//  Event listener for click on Add more button to add more quotes manually
$('.add_more').click(function(){
	getQuote();
})

$('.auto_add').click(function(){
	autoAdd();
})

$('.stop').click(function(){
	stopAutoAdd();
})
var autoAdd = function(){
 	 interval = window.setInterval(getQuote, 3000);
} 

var stopAutoAdd = function(){
	clearInterval(interval);
}



$(document).ready(getQuote);





// Post quote to twitter
var postQuote = function(){
	$.ajax({
		type: 'POST',
		url: 'j49p1CyYnzR2kVjohbfCPsEtR',
		headers: headers,
		success: function(response){
			
		},
		error: function(err){
			console.log("An error occured", err);
		}
	})
}
