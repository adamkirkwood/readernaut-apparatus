/*
 * Apparatus JQuery Plugin
 * version: 0.6 (04/07/2009)
 *
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2009 Adam Kirkwood [ hello@adamkirkwood.com ]
 *
*/

jQuery.fn.apparatus = function(options) 
{
	
	var options = jQuery.extend( 
	{
		username: 'nathan',
	    count: '5',
		order_by: 'created'
  	}, options);
	
	var container = this;
	
	return this.each(function() 
	{
		$.getJSON("http://readernaut.com/api/v1/json/" + options.username + "/books/?order_by=" + options.order_by + "&callback=?",
			function(data)
			{
	          $.each(data.reader_books, function(i,book){
				var ul = $("<ul>").addClass("book-list").appendTo(container)
				var li = $("<li>").addClass("book").appendTo(ul);
				$("<span>").text(book.book_edition.title).appendTo(li);
				$("<img/>").attr("src", book.book_edition.covers.cover_medium).appendTo(li);
	            if ( i == (options.count -1) ) return false;
	        });
	    });
	});
	
};