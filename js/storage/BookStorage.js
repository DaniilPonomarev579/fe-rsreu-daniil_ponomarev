var BookStorage = (function () {
	'use strict';
	
	// let staticId = 0;
	let books = [
		// new Book(
		// 		staticId++,
		// 		'Jewels of Nizam',
		// 		'Geeta Devi',
		// 		3,
		// 		'css/images/covers/1.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Cakes &amp; Bakes',
		// 		'Sanjeev Kapoor',
		// 		3,
		// 		'css/images/covers/2.png'
		// ),
		//
		// new Book(
		// 		staticId++,
		// 		'Jamie’s Kitchen',
		// 		'Jamie Oliver',
		// 		5,
		// 		'css/images/covers/3.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Inexpensive Family Meals',
		// 		'Simon Holst',
		// 		4,
		// 		'css/images/covers/4.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Paleo Slow Cooking',
		// 		'Chrissy Gower',
		// 		2,
		// 		'css/images/covers/5.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Cook Like an Italian',
		// 		'Tobie Puttock',
		// 		1,
		// 		'css/images/covers/6.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Suneeta Vaswani',
		// 		'Geeta Devi',
		// 		4,
		// 		'css/images/covers/7.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Jamie Does',
		// 		'Jamie Oliver',
		// 		5,
		// 		'css/images/covers/8.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Jamie’s italy',
		// 		'Jamie Oliver',
		// 		3,
		// 		'css/images/covers/9.png'
		// ),
		// new Book(
		// 		staticId++,
		// 		'Vegetables Cookbook',
		// 		'Matthew Biggs',
		// 		5,
		// 		'css/images/covers/10.png'
		// )
	];
	
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
	
	function getSearchedMostPopularBooks(keywords) {
		let searchedMostPopularBooks = [];
		
		for (let i = 0; i < books.length; i++) {
			if (books[i].title.indexOf(keywords) !== -1 && books[i].rating === 5) {
				searchedMostPopularBooks.push(books[i]);
			}
		}
		
		return searchedMostPopularBooks;
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
	
	function setBooks(newBooks) {
		books = newBooks;
	}
	
	function getBooks() {
		return books;
	}
	
	return {
		getMostPopularBooks: getMostPopularBooks,
		getSearchedBooks: getSearchedBooks,
		getSearchedMostPopularBooks: getSearchedMostPopularBooks,
		rateBook: rateBook,
		addBookToBookStorage: addBookToBookStorage,
		setBooks: setBooks,
		getBooks: getBooks
	};
})();