var BookStorage = (function () {
	'use strict';
	
	var books = [];
	var staticId = 0;
	
	books.push(
			{
				id: staticId++,
				title: 'Jewels of Nizam',
				author: 'Geeta Devi',
				rating: 3,
				cover: 'css/images/covers/1.png'
			},
			{
				id: staticId++,
				title: 'Cakes &amp; Bakes',
				author: 'Sanjeev Kapoor',
				rating: 3,
				cover: 'css/images/covers/2.png'
			},
			{
				id: staticId++,
				title: 'Jamie’s Kitchen',
				author: 'Jamie Oliver',
				rating: 5,
				cover: 'css/images/covers/3.png'
			},
			{
				id: staticId++,
				title: 'Inexpensive Family Meals',
				author: 'Simon Holst',
				rating: 4,
				cover: 'css/images/covers/4.png'
			},
			{
				id: staticId++,
				title: 'Paleo Slow Cooking',
				author: 'Chrissy Gower',
				rating: 2,
				cover: 'css/images/covers/5.png'
			},
			{
				id: staticId++,
				title: 'Cook Like an Italian',
				author: 'Tobie Puttock',
				rating: 1,
				cover: 'css/images/covers/6.png'
			},
			{
				id: staticId++,
				title: 'Suneeta Vaswani',
				author: 'Geeta Devi',
				rating: 4,
				cover: 'css/images/covers/7.png'
			},
			{
				id: staticId++,
				title: 'Jamie Does',
				author: 'Jamie Oliver',
				rating: 5,
				cover: 'css/images/covers/8.png'
			},
			{
				id: staticId++,
				title: 'Jamie’s italy',
				author: 'Jamie Oliver',
				rating: 3,
				cover: 'css/images/covers/9.png'
			},
			{
				id: staticId++,
				title: 'Vegetables Cookbook',
				author: 'Matthew Biggs',
				rating: 5,
				cover: 'css/images/covers/10.png'
			}
	);
	
	function getMostPopularBooks() {
		'use strict';
		
		var mostPopularBooks = [];
		
		for (var i = 0; i < books.length; i++) {
			if (books[i].rating === 5) {
				mostPopularBooks.push(books[i]);
			}
		}
		
		return mostPopularBooks;
	}
	
	function getSearchedBooks(keywords) {
		'use strict';
		
		var searchedBooks = [];
		
		for (var i = 0; i < books.length; i++) {
			if (books[i].title.indexOf(keywords) !== -1) {
				searchedBooks.push(books[i]);
			}
		}
		
		return searchedBooks;
	}
	
	function rateBook(id, rating) {
		'use strict';
		
		for (var i = 0; i < books.length; i++) {
			if (books[i].id === id) {
				books[i].rating = +rating;
			}
			
			console.log(books[i]);
		}
	}
	
	function addBookToBookStorage(title, author, cover) {
		'use strict';
				
		books.push(
				{
					id: staticId++,
					title: title,
					author: author,
					rating: 0,
					cover: cover
				});
		
		for (var i = 0; i < books.length; i++) {
			console.log(books[i]);
		}
	}
	
	function getBooks() {
		return books;
	}
		
	return {
		getMostPopularBooks: getMostPopularBooks,
		getSearchedBooks: getSearchedBooks,
		rateBook: rateBook,
		addBookToBookStorage: addBookToBookStorage,
		getBooks: getBooks
	};
})();