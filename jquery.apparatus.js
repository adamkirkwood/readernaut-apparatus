/*
 * Apparatus jQuery Plugin
 * version: 1.0.1 (04/08/2009)
 * @requires jQuery v1.2 or later
 *
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * 
 * Copyright 2009 Adam Kirkwood [ hello@adamkirkwood.com ]
 *
 *
 * Upcoming Features:
 *	 - Retrieve notes
 *	 - Retrive friend connections
 *	 - Add option for displaying desired book cover size: small, medium, or large
 *
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
				var ul = $("<ul>").addClass("book-list")
					.appendTo(container);
					
				var li = $("<li>").addClass("book")
					.appendTo(ul);
					
				$("<span>").text(book.book_edition.title)
					.addClass("title")
					.appendTo(li);
					
				$("<img/>").attr("src", book.book_edition.covers.cover_medium)
					.addClass("cover")
					.appendTo(li);
					
	            if ( i == (options.count -1) ) return false;
	        });
	    });
	});
	
};