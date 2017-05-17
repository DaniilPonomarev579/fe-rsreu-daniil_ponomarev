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
	}
	
	function addNewBook(title, author, cover) {
		console.log(`${title} ${author} ${cover}`);
		BookStorage.addBookToBookStorage(title, author, cover);
		bookView.refreshBooks(BookStorage.getBooks());
	}
	
	function addNotification(type) {
		NotificationStorage.addNotification(type, new Date(), arguments);
		
		notificationView.refreshNotifications(NotificationStorage.getNotifications());
		notificationView.refreshNotifications(NotificationStorage.getNotifications());
	}
	
	function refreshNotifications() {
		notificationView.refreshNotifications(NotificationStorage.getNotifications());
	}
	
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
