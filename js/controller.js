var Controller = function () {
	'use strict';
	
	this.model = new BookStorage(this);
	this.view = new View(this);
	
	this.provideAllBooks = provideAllBooks;
	this.provideMostPopularBooks = provideMostPopularBooks;
	this.provideSearchBooks = provideSearchBooks;
	this.rateBooks = rateBooks;
	this.addNewBook = addNewBook;
	
	this.view.refreshBooks(this.model.books);
	this.view.addEventListeners();
	
	return this;
};

var controller = new Controller();

function provideAllBooks() {
	'use strict';
	
	controller.view.makeFilterCriterionActive(this);
	controller.view.refreshBooks(controller.model.books);
	controller.view.addEventListeners();
}

function provideMostPopularBooks() {
	'use strict';
	
	controller.view.makeFilterCriterionActive(this);
	controller.view.refreshBooks(controller.model.getMostPopularBooks());
	controller.view.addEventListeners();
}

function provideSearchBooks() {
	'use strict';
	
	controller.view.refreshBooks(controller.model.getSearchedBooks(this.value));
	controller.view.addEventListeners();
}

function rateBooks() {
	'use strict';
	
	controller.model.rateBook(this.parentNode.parentNode.id,
			this.getAttribute('rating'));
}

function addNewBook(title, author, cover) {
	'use strict';
	
	console.log(`${title} ${author} ${cover}`);
	controller.model.addBookToBookStorage(title, author, cover);
	controller.view.refreshBooks(controller.model.books);
	controller.view.addEventListeners();
}