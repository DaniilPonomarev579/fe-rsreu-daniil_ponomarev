var View = (function () {
	'use strict';
	
	//this.controller = controller;
	
	// this.refreshBooks = refreshBooks;
	// this.addEventListeners = addEventListeners;
	// this.makeFilterCriterionActive = makeFilterCriterionActive;
	// this.addBook = addBook;
	
	function refreshBooks(books) {
		'use strict';
		
		var filterResultsList = document.querySelector('.filter-results-list');
		
		filterResultsList.innerHTML = '';
		
		// for (var i = 0; i < filterResultsList.childNodes.length;) {
		// 	filterResultsList.removeChild(filterResultsList.childNodes[i]);
		// }
		
		var fragment = document.createDocumentFragment();
		
		for (var i = 0; i < books.length; i++) {
			var divRating = document.createElement('div');
			
			divRating.className = 'book__rating';
			
			var star = document.createElement('input');
			
			//Initialize star
			
			addStarEventListener(star);
			
			// Replace with loop
			divRating.innerHTML = `
				<input 
					title="Rating: 5" 
					type="radio" 
					name="book-rating-${books[i].id}" 
					class="rating-star rating-star-5" 
					rating="5"
				>
				<label title="Rating: 5"></label>
				<input 
					title="Rating: 4" 
					type="radio" 
					name="book-rating-${books[i].id}" 
					class="rating-star rating-star-4" 
					rating="4"
				>
				<label title="Rating: 4"></label>
				<input 
					title="Rating: 3" 
					type="radio" 
					name="book-rating-${books[i].id}" 
					class="rating-star rating-star-3" 
					rating="3"
				>
				<label title="Rating: 3"></label>
				<input 
					title="Rating: 2" 
					type="radio" 
					name="book-rating-${books[i].id}" 
					class="rating-star rating-star-2" 
					rating="2"
				>
				<label title="Rating: 2"></label>
				<input 
					title="Rating: 1" 
					type="radio" 
					name="book-rating-${books[i].id}" 
					class="rating-star rating-star-1" 
					rating="1"
				>
				<label title="Rating: 1"></label>
		`;
			
			var stars = divRating.children;
			
			for (var j = 0; j < stars.length; j++) {
				if (stars[j].className ===
						'rating-star rating-star-' + books[i].rating) {
					stars[j].setAttribute('checked', true);
				}
			}
			
			var element = document.createElement(`li`);
			element.id = books[i].id;
			
			element.className = 'book';
			element.id = books[i].id;
			element.innerHTML = `
			<a href="#" class="book__cover book__cover--${books[i].id}">
				<img src=${books[i].cover} alt="Book cover">
			</a>
			
			<a href="#" class="book__title">${books[i].title}</a>
			<h3 class="book__author">by ${books[i].author}</h3>
			<div class="book__rating">
				${divRating.innerHTML}
			</div>
		`;
			
			fragment.appendChild(element);
		}
		
		filterResultsList.appendChild(fragment);
	}
	
	function addStarEventListener() {
		
	}
	
	function addEventListeners() {
		'use strict';
		
		document
				.getElementById('allBooks')
				.addEventListener('click', this.controller.provideAllBooks);
		
		document
				.getElementById('mostPopular')
				.addEventListener('click', this.controller.provideMostPopularBooks);
		
		document
				.getElementById('searchKeywords')
				.addEventListener('input', this.controller.provideSearchBooks);
		
		document
				.getElementById('newBookButton')
				.addEventListener('click', this.addBook);
		
		// Move to refreshBooks()
		var stars = document.getElementsByClassName('rating-star');
		
		for (var i = 0; i < stars.length; i++) {
			stars[i].addEventListener('change', this.controller.rateBooks);
		}
	}
	
	function makeFilterCriterionActive(button) {
		'use strict';
		
		for (var i = 0; i < button.parentNode.parentNode.childNodes.length; i++) {
			if (button.parentNode.parentNode.childNodes[i] != '[object Text]') {
				button.parentNode.parentNode.childNodes[i].childNodes[1].classList.remove(
						'filter-books__criterion--active');
			}
		}
		
		button.classList.add('filter-books__criterion--active');
	}
	
	function addBook() {
		'use strict';
		
		if (!document.getElementById('newBookTitle').value ||
				!document.getElementById('newBookAuthor').value ||
				!document.getElementById('newBookCover').value) {
			alert('Fill all the inputs!');
			return;
		}
		
		Controller.addNewBook(
				document.getElementById('newBookTitle').value,
				document.getElementById('newBookAuthor').value,
				'css/images/covers/' +
				document.getElementById('newBookCover').files[0].name);
	}
	
	function setController(controller) {
		this.controller = controller;
	}
	
	return {
		refreshBooks: refreshBooks,
		addEventListeners: addEventListeners,
		makeFilterCriterionActive: makeFilterCriterionActive,
		addBook: addBook,
		setController: setController
	};
})();