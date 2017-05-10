var BookStorage = function (controller) {
	'use strict';
	
	this.controller = controller;
	this.getMostPopularBooks = getMostPopularBooks;
	this.getSearchedBooks = getSearchedBooks;
	this.rateBook = rateBook;
	this.addBookToBookStorage = addBookToBookStorage;
	
	this.books = [];
	
	this.books.push(
			{
				identificator: '1',
				title: 'Jewels of Nizam',
				author: 'Geeta Devi',
				rating: 3,
				cover: 'css/images/covers/1.png'
			},
			{
				identificator: '2',
				title: 'Cakes &amp; Bakes',
				author: 'Sanjeev Kapoor',
				rating: 3,
				cover: 'css/images/covers/2.png'
			},
			{
				identificator: '3',
				title: 'Jamie’s Kitchen',
				author: 'Jamie Oliver',
				rating: 5,
				cover: 'css/images/covers/3.png'
			},
			{
				identificator: '4',
				title: 'Inexpensive Family Meals',
				author: 'Simon Holst',
				rating: 4,
				cover: 'css/images/covers/4.png'
			},
			{
				identificator: '5',
				title: 'Paleo Slow Cooking',
				author: 'Chrissy Gower',
				rating: 2,
				cover: 'css/images/covers/5.png'
			},
			{
				identificator: '6',
				title: 'Cook Like an Italian',
				author: 'Tobie Puttock',
				rating: 1,
				cover: 'css/images/covers/6.png'
			},
			{
				identificator: '7',
				title: 'Suneeta Vaswani',
				author: 'Geeta Devi',
				rating: 4,
				cover: 'css/images/covers/7.png'
			},
			{
				identificator: '8',
				title: 'Jamie Does',
				author: 'Jamie Oliver',
				rating: 5,
				cover: 'css/images/covers/8.png'
			},
			{
				identificator: '9',
				title: 'Jamie’s italy',
				author: 'Jamie Oliver',
				rating: 3,
				cover: 'css/images/covers/9.png'
			},
			{
				identificator: '10',
				title: 'Vegetables Cookbook',
				author: 'Matthew Biggs',
				rating: 5,
				cover: 'css/images/covers/10.png'
			}
	)
	
	return this;
}

function getMostPopularBooks() {
	'use strict';
	
	var mostPopularBooks = [];
	
	for (var i = 0; i < this.books.length; i++) {
		if (this.books[i].rating === 5) {
			mostPopularBooks.push(this.books[i]);
		}
	}
	
	return mostPopularBooks;
}

function getSearchedBooks(keywords) {
	'use strict';
	
	var searchedBooks = [];
	
	for (var i = 0; i < this.books.length; i++) {
		if (this.books[i].title.indexOf(keywords) !== -1) {
			searchedBooks.push(this.books[i]);
		}
	}
	
	return searchedBooks;
}

function rateBook(identificator, rating) {
	'use strict';
	
	for (var i = 0; i < this.books.length; i++) {
		if (this.books[i].identificator === identificator) {
			this.books[i].rating = +rating;
		}
		
		console.log(this.books[i]);
	}
}

function addBookToBookStorage(title, author, cover) {
	'use strict';
	
	var identificator = +this.books[this.books.length-1].identificator+1+'';
	
	this.books.push(
			{
				identificator: identificator,
				title: title,
				author: author,
				rating: 0,
				cover: cover
			});
	
	for (var i = 0; i < this.books.length; i++) {
		console.log(this.books[i]);
	}
}