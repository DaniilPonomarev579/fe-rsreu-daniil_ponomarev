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
			if (books[i].title.indexOf(keywords) !== -1 &&
					books[i].rating === 5) {
				searchedMostPopularBooks.push(books[i]);
			}
		}
		
		return searchedMostPopularBooks;
	}
	
	function fetchTimer(fetchPromise) {
		let timer;
		
		return Promise.race([
			fetchPromise
					.then(function (response) {
						clearTimeout(timer);
						return response;
					}),
			new Promise(function (resolve, reject) {
				timer = setTimeout(function () {
					console.log('Timeout!');
					clearTimeout(timer);
					reject();
				}, 5000);
			})
		]);
	}
	
	function rateBook(bookId, rating) {
		let body = 'bookId=' + encodeURIComponent(bookId) +
				'&rating=' + encodeURIComponent(rating);
		
		fetchTimer(
				fetch('rateBook?' + body, {
					method: 'GET'
				})
		)
				.then(function (response) {
					return response.json();
				})
				.then(function (book) {
					books[bookId] = book;
				})
				.catch(function (response) {
					// console.log(response);
				});
		
		// let timer = null;
		// let fetchPromise = Promise.race([
		// 	fetch('rateBook?' + body, {
		// 		method: 'GET'
		// 	})
		// 			.then(function (response) {
		// 				clearTimeout(timer);
		// 				return response.json();
		// 			})
		// 			.then(function (book) {
		// 				books[bookId] = book;
		// 			})
		// 			.catch(function (response) {
		// 				// console.log(response);
		// 			}),
		//
		// 	new Promise(function (resolve, reject) {
		// 		timer = setTimeout(function () {
		// 			console.log('Timed out!');
		// 			reject();
		// 		}, 5000);
		// 	})
		// ]);
	}
	
	function addBookToBookStorage(title, author, cover) {
		let body = 'title=' + encodeURIComponent(title) +
				'&author=' + encodeURIComponent(author) +
				'&cover=' + encodeURIComponent((cover));
		
		let timer = null;
		let fetchPromise = Promise.race([
			fetch('addBook?' + body, {
				method: 'GET'
			})
					.then(function (response) {
						clearTimeout(timer);
						return response.json();
					})
					.then(function (book) {
						books.push(book);
						Controller.provideAllBooks();
					})
					.catch(function (response) {
						// console.log(response);
					}),
			new Promise(function (resolve, reject) {
				timer = setTimeout(function () {
					console.log('Timed out!');
					reject();
				}, 5000);
			})
		]);
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