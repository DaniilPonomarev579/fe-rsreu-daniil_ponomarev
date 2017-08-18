function Book(id, title, author, rating, cover) {
	'use strict';
	
	if (!Utils.isNumber(id) ||
			!Utils.isNumber(rating) ||
			!Utils.isString(title) ||
			!Utils.isString(author) ||
			!Utils.isString(cover)) {
		throw new Error('Incorrect data');
	}
	
	this.id = id;
	this.title = title;
	this.author = author;
	this.rating = rating;
	this.cover = cover;
}