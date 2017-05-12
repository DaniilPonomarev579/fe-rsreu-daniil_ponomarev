var BookStorage = (function () {
	'use strict';
	
	function isNumber(value) {
		return typeof value === 'number' && !isNaN(value);
	}
	
	function isString(value) {
		return typeof value === 'string';
	}
	
	let books = [];
	let staticId = 0;
	
	books.push(new Book(
			staticId++,
			'Jewels of Nizam',
			'Geeta Devi',
			3,
			'css/images/covers/1.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Cakes &amp; Bakes',
			'Sanjeev Kapoor',
			3,
			'css/images/covers/2.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Jamie’s Kitchen',
			'Jamie Oliver',
			5,
			'css/images/covers/3.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Inexpensive Family Meals',
			'Simon Holst',
			4,
			'css/images/covers/4.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Paleo Slow Cooking',
			'Chrissy Gower',
			2,
			'css/images/covers/5.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Cook Like an Italian',
			'Tobie Puttock',
			1,
			'css/images/covers/6.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Suneeta Vaswani',
			'Geeta Devi',
			4,
			'css/images/covers/7.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Jamie Does',
			'Jamie Oliver',
			5,
			'css/images/covers/8.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Jamie’s italy',
			'Jamie Oliver',
			3,
			'css/images/covers/9.png'
			)
	);
	books.push(new Book(
			staticId++,
			'Vegetables Cookbook',
			'Matthew Biggs',
			5,
			'css/images/covers/10.png'
			)
	);
	
	function getMostPopularBooks() {
		let mostPopularBooks = [];
		
		for (let i = 0; i < books.length; i++) {
			if (books[i].rating === 5) {
				mostPopularBooks.push(books[i]);
			}
		}
		
		return mostPopularBooks;
	}
	
	function getSearchedBooks(keywords) {
		let searchedBooks = [];
		
		for (let i = 0; i < books.length; i++) {
			if (books[i].title.indexOf(keywords) !== -1) {
				searchedBooks.push(books[i]);
			}
		}
		
		return searchedBooks;
	}
	
	function rateBook(id, rating) {
		for (let i = 0; i < books.length; i++) {
			if (books[i].id === id) {
				books[i].rating = rating;
			}
			
			console.log(books[i]);
		}
	}
	
	function addBookToBookStorage(title, author, cover) {
		books.push(
				new Book(
						staticId++,
						title,
						author,
						0,
						cover
				)
		);
		
		for (let i = 0; i < books.length; i++) {
			console.log(books[i]);
		}
	}
	
	function getBooks() {
		return books;
	}
	
	return {
		isNumber: isNumber,
		isString: isString,
		getMostPopularBooks: getMostPopularBooks,
		getSearchedBooks: getSearchedBooks,
		rateBook: rateBook,
		addBookToBookStorage: addBookToBookStorage,
		getBooks: getBooks
	};
})();

function Book(id, title, author, rating, cover) {
	'use strict';
	
	if (!Controller.isNumber(id) ||
			!Controller.isNumber(rating) ||
			!Controller.isString(title) ||
			!Controller.isString(author) ||
			!Controller.isString(cover)) {
		throw new Error('Incorrect data');
	}
	
	this.id = id;
	this.title = title;
	this.author = author;
	this.rating = rating;
	this.cover = cover;
}