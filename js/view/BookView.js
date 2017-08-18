var bookView = (function () {
	'use strict';
	
	function createDivRating(i, books) {
		let divRating = document.createElement('div');
		
		divRating.className = 'book__rating';
		
		for (let j = 5; j > 0; j--) {
			let inputRating = document.createElement('input');
			
			inputRating.title = 'Rating: ' + j;
			inputRating.type = 'radio';
			inputRating.name = 'book-rating-' + books[i].id;
			inputRating.classList.add('rating-star', 'rating-star-' + j);
			inputRating.setAttribute('rating', j);
			if (j === books[i].rating) {
				inputRating.setAttribute('checked', 'true');
			}
			inputRating.addEventListener('change', rateBooks);
			
			let labelRating = document.createElement('label');
			
			labelRating.title = 'Rating: ' + j;
			
			divRating.appendChild(inputRating);
			divRating.appendChild(labelRating);
		}
		
		return divRating;
	}
	
	function refreshBooks(books) {
		let filterResultsList = document.querySelector('.filter-results-list');
		
		filterResultsList.innerHTML = '';
		
		let fragment = document.createDocumentFragment();
		
		for (let i = 0; i < books.length; i++) {
			let element = document.createElement(`li`);
			element.id = books[i].id;
			
			element.className = 'book';
			element.id = books[i].id;
			element.innerHTML = `
				<a href="#" class="book__cover book__cover--${books[i].id}">
					<img src=${books[i].cover} alt="Book cover">
				</a>
				
				<a href="#" class="book__title">${books[i].title}</a>
				<h3 class="book__author">by ${books[i].author}</h3>
			`;
			element.appendChild(createDivRating(i, books));
			
			fragment.appendChild(element);
		}
		
		filterResultsList.appendChild(fragment);
	}
	
	function rateBooks() {
		Controller.rateBooks(
				+this.parentNode.parentNode.id,
				+this.getAttribute('rating')
		);
		
		Controller.addNotification(
				'rating',
				this.parentNode.parentNode.children[1].innerHTML,
				+this.getAttribute('rating')
		);
	}
	
	function provideBooks() {
		if (this.id === 'allBooks') {
			makeFilterCriterionActive(this);
			document.getElementById('searchKeywords').value = '';
			Controller.provideAllBooks();
			Controller.addNotification(NOTIFICATION_FILTER, 'allBooks');
		} else if (this.id === 'mostPopular') {
			makeFilterCriterionActive(this);
			document.getElementById('searchKeywords').value = '';
			Controller.provideMostPopularBooks();
			Controller.addNotification(NOTIFICATION_FILTER, 'mostPopular');
		} else if (this.id === 'searchKeywords') {
			if ('filter-books__criterion--active' ===
					document.getElementById('mostPopular').classList[1]) {
				Controller.provideSearchMostPopularBooks(this.value);
				Controller.addNotification('search', this.value);
			}
			else {
				Controller.provideSearchBooks(this.value);
				Controller.addNotification('search', this.value);
			}
		}
	}
	
	function showMenu() {
		'use strict';
		
		let el = document.getElementById("sidebar");
		if (el.style.height == 0 || el.style.height == "0px") {
			el.style.minWidth = "200px";
			el.style.height = "calc(100% - 135px)";
		}
		else {
			el.style.minWidth = "0";
			el.style.height = "0";
		}
	}
	
	function addEventListeners() {
		document
				.getElementById('allBooks')
				.addEventListener('click', provideBooks);
		
		document
				.getElementById('mostPopular')
				.addEventListener('click', provideBooks);
		
		document
				.getElementById('searchKeywords')
				.addEventListener('input', provideBooks);
		
		document
				.getElementById('newBookButton')
				.addEventListener('click', addBook);
		
		document
				.getElementById('toggleMenu')
				.addEventListener('click', showMenu);
	}
	
	function makeFilterCriterionActive(button) {
		for (let i = 0; i < button.parentNode.parentNode.childNodes.length; i++) {
			if (button.parentNode.parentNode.childNodes[i] != '[object Text]') {
				button.parentNode.parentNode.childNodes[i].childNodes[1].classList.remove(
						'filter-books__criterion--active');
			}
		}
		
		button.classList.add('filter-books__criterion--active');
	}
	
	function addBook() {
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
				document.getElementById('newBookCover').files[0].name
		);
		
		Controller.addNotification(
				'addBook',
				document.getElementById('newBookTitle').value,
				document.getElementById('newBookAuthor').value
		);
	}
	
	return {
		refreshBooks: refreshBooks,
		rateBooks: rateBooks,
		addEventListeners: addEventListeners,
		makeFilterCriterionActive: makeFilterCriterionActive,
		addBook: addBook
	};
})();