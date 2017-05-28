var BookStorage = (function () {
	'use strict';
	
	let books = [];
	
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
	
	function rateBook(bookId, rating) {
		let body = 'bookId=' + encodeURIComponent(bookId) +
				'&rating=' + encodeURIComponent(rating);
		
		fetch('rateBook?' + body, {
			method: 'GET'
		})
				.then(function (response) {
					return response.json();
				})
				.then(function (book) {
					books[bookId] = book;
				})
				.catch(function (response) {
					console.log(response.status + ': ' + response.statusText);
				});
	}
	
	function addBookToBookStorage(title, author, cover) {
		let body = 'title=' + encodeURIComponent(title) +
				'&author=' + encodeURIComponent(author) +
				'&cover=' + encodeURIComponent((cover));
		
		fetch('addBook?' + body, {
			method: 'GET'
		})
				.then(function (response) {
					return response.json();
				})
				.then(function (book) {
					// console.log(book);
					books.push(book);
					Controller.provideAllBooks();
				})
				.catch(function (response) {
					console.log(response.status + ': ' + response.statusText);
				});
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