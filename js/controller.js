var Controller = (function (BookStorage, View) {
	'use strict';
	
	// var model = BookStorage;
	View.setController(this);
	// var view = View;
	
	
	function provideAllBooks() {
		'use strict';
		
		// Move to view
		View.makeFilterCriterionActive(this);
		
		var books = BookStorage.getBooks();
		View.refreshBooks(books);
		
		// Move to view
		View.addEventListeners();
	}
	
	function provideMostPopularBooks() {
		'use strict';
		
		View.makeFilterCriterionActive(this);
		View.refreshBooks(BookStorage.getMostPopularBooks());
		View.addEventListeners();
	}
	
	function provideSearchBooks() {
		'use strict';
		
		View.refreshBooks(BookStorage.getSearchedBooks(this.value));
		View.addEventListeners();
	}
	
	function rateBooks(bookId, rating) {
		'use strict';
		
		BookStorage.rateBook(
				this.parentNode.parentNode.id,
				this.getAttribute('rating')
		);
	}
	
	function addNewBook(title, author, cover) {
		'use strict';
		
		console.log(`${title} ${author} ${cover}`);
		BookStorage.addBookToBookStorage(title, author, cover);
		View.refreshBooks(BookStorage.getBooks());
		// Controller.view.addEventListeners();
	}
	
	View.refreshBooks(BookStorage.getBooks());
	View.addEventListeners();
	
	return {
	provideAllBooks: provideAllBooks,
	provideMostPopularBooks: provideMostPopularBooks,
	provideSearchBooks: provideSearchBooks,
	rateBooks: rateBooks,
	addNewBook: addNewBook
	}
})(BookStorage, View);
