var Controller = (function () {
	'use strict';
	
	function isNumber(value) {
		return typeof value === 'number' && !isNaN(value);
	}
	
	function isString(value) {
		return typeof value === 'string';
	}
	
	function provideAllBooks() {
		let books = BookStorage.getBooks();
		View.refreshBooks(books);
	}
	
	function provideMostPopularBooks() {
		View.refreshBooks(BookStorage.getMostPopularBooks());
	}
	
	function provideSearchBooks(keywords) {
		View.refreshBooks(BookStorage.getSearchedBooks(keywords));
	}
	
	function rateBooks(bookId, rating) {
		BookStorage.rateBook(bookId, rating);
	}
	
	function addNewBook(title, author, cover) {
		console.log(`${title} ${author} ${cover}`);
		BookStorage.addBookToBookStorage(title, author, cover);
		View.refreshBooks(BookStorage.getBooks());
	}
	
	function addNotification(type) {
		NotificationStorage.addNotification(type, new Date(),arguments);
		
		View.refreshNotifications(NotificationStorage.getNotifications());
		View.refreshNotifications(NotificationStorage.getNotifications());
	}
	
	function refreshNotifications() {
		View.refreshNotifications(NotificationStorage.getNotifications());
	}
	
	setInterval(refreshNotifications, 1000);
	
	return {
		isNumber: isNumber,
		isString: isString,
		provideAllBooks: provideAllBooks,
		provideMostPopularBooks: provideMostPopularBooks,
		provideSearchBooks: provideSearchBooks,
		rateBooks: rateBooks,
		addNewBook: addNewBook,
		addNotification: addNotification,
		refreshNotifications: refreshNotifications
	}
})();
