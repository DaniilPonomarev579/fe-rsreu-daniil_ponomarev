var View = (function () {
	'use strict';
	
	function refreshBooks(books) {
		let filterResultsList = document.querySelector('.filter-results-list');
		
		filterResultsList.innerHTML = '';
		
		let fragment = document.createDocumentFragment();
		
		for (let i = 0; i < books.length; i++) {
			let divRating = document.createElement('div');
			
			divRating.className = 'book__rating';
			
			let star = document.createElement('input');
			
			for (let j = 5; j > 0; j--) {
				divRating.insertAdjacentHTML(
						'beforeEnd',
						`
							<input 
								title="Rating: ${j}" 
								type="radio" 
								name="book-rating-${books[i].id}" 
								class="rating-star rating-star-${j}" 
								rating="${j}"
							>
							<label title="Rating: ${j}"></label>
						`);
			}
			
			let stars = divRating.children;
			
			for (let j = 0; j < stars.length; j++) {
				if (stars[j].className ===
						'rating-star rating-star-' + books[i].rating) {
					stars[j].setAttribute('checked', 'true');
				}
			}
			
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
			<div class="book__rating">
				${divRating.innerHTML}
			</div>
		`;
			
			fragment.appendChild(element);
		}
		
		filterResultsList.appendChild(fragment);
		
		addStarEventListener();
	}
	
	function rateBooks() {
		Controller.rateBooks(
				+this.parentNode.parentNode.id,
				+this.getAttribute('rating')
		);
		Controller.addNotification(
				'rating',
				this.parentNode.parentNode.childNodes[3].innerHTML,
				+this.getAttribute('rating')
		);
	}
	
	function addStarEventListener() {
		let stars = document.getElementsByClassName('rating-star');
		
		for (let i = 0; i < stars.length; i++) {
			stars[i].addEventListener('change', rateBooks);
		}
	}
	
	function provideBooks() {
		if (this.id === 'allBooks') {
			makeFilterCriterionActive(this);
			Controller.provideAllBooks();
			Controller.addNotification('filter', 'allBooks');
		} else if (this.id === 'mostPopular') {
			makeFilterCriterionActive(this);
			Controller.provideMostPopularBooks();
			Controller.addNotification('filter', 'mostPopular');
		} else if (this.id === 'searchKeywords') {
			Controller.provideSearchBooks(this.value);
			Controller.addNotification('search', this.value);
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
	
	function refreshNotifications(notifications) {
		var notificationsList = document.querySelector('.history-list ul');
		notificationsList.innerHTML = '';
		
		for (let i = notifications.length - 1; i >= 0; i--) {
			var difference = new Date().getTime() - notifications[i].time.getTime();
			var hours = Math.floor(difference / (1000 * 60 * 60)) === 0 ?
					'' : Math.floor(difference / (1000 * 60 * 60)) + ' hours <br>';
			var minutes = Math.floor(difference / (1000 * 60)) === 0 ?
					'' : Math.floor(difference / (1000 * 60)) % 60 + ' minutes <br>';
			
			var time =
					hours +
					minutes +
					Math.round(difference / 1000) % 60 + ' seconds <br>';
			
			if (notifications[i].type === 'addBook') {
				notificationsList.insertAdjacentHTML(
						'beforeEnd',
						`
							<li>
								<div class="history-list-item"> 
									You added 
									<a href="#" class="title">${notifications[i].title}</a> 
									by <a href="#" class="author">${notifications[i].author}</a> 
									<span>${time} ago</span>
								</div>
							</li>
						`)
			} else if (notifications[i].type === 'filter') {
				notificationsList.insertAdjacentHTML(
						'beforeEnd',
						`
							<li>
								<div class="history-list-item"> 
									You filtered books 
									by <a href="#">${notifications[i].criterion}</a> 
									<span>${time} ago</span>
								</div>
							</li>
						`)
			} else if (notifications[i].type === 'search') {
				notificationsList.insertAdjacentHTML(
						'beforeEnd',
						`
							<li>
								<div class="history-list-item"> 
									You searched 
									<a href="#">${notifications[i].keywords}</a> 
									<span>${time} ago</span>
								</div>
							</li>
						`)
			} else if (notifications[i].type === 'rating') {
				notificationsList.insertAdjacentHTML(
						'beforeEnd',
						`
							<li>
								<div class="history-list-item"> 
									You rated  
									<a href="#" class="title">${notifications[i].title}</a> 
									to <a href="#">${notifications[i].rating}</a>
									<span>${time} ago</span>
								</div>
							</li>
						`)
			} else {
				throw new Error('undefined type of notification');
			}
		}
	}
	
	return {
		refreshBooks: refreshBooks,
		rateBooks: rateBooks,
		addEventListeners: addEventListeners,
		makeFilterCriterionActive: makeFilterCriterionActive,
		addBook: addBook,
		refreshNotifications: refreshNotifications
	};
})();