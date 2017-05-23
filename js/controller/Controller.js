var Controller = (function () {
	'use strict';
	
	function provideAllBooks() {
		let books = BookStorage.getBooks();
		bookView.refreshBooks(books);
	}
	
	function provideMostPopularBooks() {
		bookView.refreshBooks(BookStorage.getMostPopularBooks());
	}
	
	function provideSearchBooks(keywords) {
		bookView.refreshBooks(BookStorage.getSearchedBooks(keywords));
	}
	
	function provideSearchMostPopularBooks(keywords) {
		bookView.refreshBooks(BookStorage.getSearchedMostPopularBooks(keywords));
	}
	
	function rateBooks(bookId, rating) {
		BookStorage.rateBook(bookId, rating);
		
		let body = 'bookId='+encodeURIComponent(bookId)+
						'&rating='+encodeURIComponent(rating);

		// fetch('rateBook', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	body: body
		// })
		// 		.then(function (response) {
		// 			console.log(1);
		// 			console.log(response.status);
		// 			console.log(response.statusText);
		// 			return response.json();
		// 		})
		// 		.catch(function (response) {
		// 			console.log(response.status + ': ' + response.statusText);
		// 		});
		
		fetch('rateBook?'+body, {
			method: 'GET'
		})
				.then(function (response) {
					console.log(1);
					console.log(response.status + ': ' + response.statusText);
					return response.json();
				})
				.then(function (books) {
					console.log(books);
				})
				.catch(function (response) {
					console.log(2);
					console.log(response.status + ': ' + response.statusText);
				});
	}
	
	function setBooks() {
		let xhr = new XMLHttpRequest();
		
		xhr.open('GET', 'getBooks', true);
		
		xhr.onreadystatechange = function () {
			if (xhr.readyState != 4) {
				return;
			}
			
			if (xhr.status != 200) {
				console.log(xhr.status + ': ' + xhr.statusText);
			} else {
				BookStorage.setBooks(JSON.parse(xhr.responseText));
				bookView.refreshBooks(BookStorage.getBooks());
			}
		};
		
		xhr.send();
	}
	
	function addNewBook(title, author, cover) {
		console.log(`${title} ${author} ${cover}`);
		//BookStorage.addBookToBookStorage(title, author, cover);
		// bookView.refreshBooks(BookStorage.getBooks());
		
		let body = 'title='+encodeURIComponent(title)+
				'&author='+encodeURIComponent(author)+
				'&cover='+encodeURIComponent((cover));
		
		fetch('addBook?'+body, {
			method: 'GET'
		})
				.then(function (response) {
					return response.json();
				})
				.then(function (books) {
					console.log(books);
					setBooks();
				})
				.catch(function (response) {
					console.log(response.status + ': ' + response.statusText);
				});
	}
	
	function addNotification(type) {
		NotificationStorage.addNotification(type, new Date(), arguments);
		
		notificationView.refreshNotifications(NotificationStorage.getNotifications());
		notificationView.refreshNotifications(NotificationStorage.getNotifications());
	}
	
	function refreshNotifications() {
		notificationView.refreshNotifications(NotificationStorage.getNotifications());
	}
	
	setBooks();
	
	return {
		provideAllBooks: provideAllBooks,
		provideMostPopularBooks: provideMostPopularBooks,
		provideSearchBooks: provideSearchBooks,
		provideSearchMostPopularBooks: provideSearchMostPopularBooks,
		rateBooks: rateBooks,
		addNewBook: addNewBook,
		addNotification: addNotification,
		refreshNotifications: refreshNotifications
	}
})();
