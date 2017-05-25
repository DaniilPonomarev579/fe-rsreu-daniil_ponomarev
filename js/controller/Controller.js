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
	
	function rateBooks(bookId, rating, filter) {
		BookStorage.rateBook(bookId, rating, filter);
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
		
		RequestService.makeRequest('GET', 'getBooks', function () {
			if (xhr.readyState != 4) {
				return;
			}
			
			if (xhr.status != 200) {
				console.log(xhr.status + ': ' + xhr.statusText);
			} else {
				BookStorage.setBooks(JSON.parse(xhr.responseText));
				bookView.refreshBooks(BookStorage.getBooks());
			}//todo
		});
	}
	
	function addNewBook(title, author, cover) {
		// console.log(`${title} ${author} ${cover}`);
		//BookStorage.addBookToBookStorage(title, author, cover);
		// bookView.refreshBooks(BookStorage.getBooks());
		
		BookStorage.addBookToBookStorage(title, author, cover);
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
