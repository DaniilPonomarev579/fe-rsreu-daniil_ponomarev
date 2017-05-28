var Controller = (function () {
	'use strict';
	
	let currentNotifications = [];
	
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
	
	function rateBooks(bookId, rating, filter) {
		BookStorage.rateBook(bookId, rating, filter);
	}
	
	function setBooks() {
		let xhr = new XMLHttpRequest();
		//
		// xhr.open('GET', 'getBooks', true);
		//
		// xhr.onreadystatechange = function () {
		// 	if (xhr.readyState != 4) {
		// 		return;
		// 	}
		//
		// 	if (xhr.status != 200) {
		// 		console.log(xhr.status + ': ' + xhr.statusText);
		// 	} else {
		// 		BookStorage.setBooks(JSON.parse(xhr.responseText));
		// 		bookView.refreshBooks(BookStorage.getBooks());
		// 	}
		// };
		//
		// xhr.send();
		
		RequestService.makeRequest(xhr, 'GET', 'getBooks', function () {
			if (xhr.readyState != 4) {
				return;
			}

			if (xhr.status != 200) {
				console.log(xhr.status + ': ' + xhr.statusText);
			} else {
				BookStorage.setBooks(JSON.parse(xhr.responseText));
				bookView.refreshBooks(BookStorage.getBooks());
			}
		});
	}
	
	function addNewBook(title, author, cover) {
		BookStorage.addBookToBookStorage(title, author, cover);
	}
	
	function clearNotification() {
		let timeoutId = setTimeout(function () {
			currentNotifications.shift();
			clearTimeout(timeoutId);
		}, 3000);
	}
	
	function addNotification(type) {
		NotificationStorage.addNotification(type, new Date(), arguments);
		
		let notifications = NotificationStorage.getNotifications();
		
		currentNotifications.push(notifications[notifications.length - 1]);
		clearNotification();
		
		notificationView.refreshNotifications(currentNotifications);
	}
	
	function refreshNotifications() {
		notificationView.refreshNotifications(currentNotifications);
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
