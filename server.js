var http = require("http");
var path = require("path");
var fs = require("fs");
var checkMimeType = true;
var PORT_NUMBER = 8000;
var staticId = 0;
var books = [
	new Book(
			staticId++,
			'Jewels of Nizam',
			'Geeta Devi',
			3,
			'css/images/covers/1.png'
	),
	new Book(
			staticId++,
			'Cakes &amp; Bakes',
			'Sanjeev Kapoor',
			3,
			'css/images/covers/2.png'
	),
	
	new Book(
			staticId++,
			'Jamie’s Kitchen',
			'Jamie Oliver',
			5,
			'css/images/covers/3.png'
	),
	new Book(
			staticId++,
			'Inexpensive Family Meals',
			'Simon Holst',
			4,
			'css/images/covers/4.png'
	),
	new Book(
			staticId++,
			'Paleo Slow Cooking',
			'Chrissy Gower',
			2,
			'css/images/covers/5.png'
	),
	new Book(
			staticId++,
			'Cook Like an Italian',
			'Tobie Puttock',
			1,
			'css/images/covers/6.png'
	),
	new Book(
			staticId++,
			'Suneeta Vaswani',
			'Geeta Devi',
			4,
			'css/images/covers/7.png'
	),
	new Book(
			staticId++,
			'Jamie Does',
			'Jamie Oliver',
			5,
			'css/images/covers/8.png'
	),
	new Book(
			staticId++,
			'Jamie’s italy',
			'Jamie Oliver',
			3,
			'css/images/covers/9.png'
	),
	new Book(
			staticId++,
			'Vegetables Cookbook',
			'Matthew Biggs',
			5,
			'css/images/covers/10.png'
	)
	
	// {
	// 	title: 'Jewels of Nizam',
	// 	author: 'Geeta Devi',
	// 	rating: 3,
	// 	cover: 'css/images/covers/1.png'
	// },
	// {
	// 	title: 'Cakes &amp; Bakes',
	// 	author: 'Sanjeev Kapoor',
	// 	rating: 3,
	// 	cover: 'css/images/covers/2.png'
	// },
	// {
	// 	title: 'Jamie’s Kitchen',
	// 	author: 'Jamie Oliver',
	// 	rating: 5,
	// 	cover: 'css/images/covers/3.png'
	// },
	// {
	// 	title: 'Inexpensive Family Meals',
	// 	author: 'Simon Holst',
	// 	rating: 4,
	// 	cover: 'css/images/covers/4.png'
	// },
	// {
	// 	title: 'Paleo Slow Cooking',
	// 	author: 'Chrissy Gower',
	// 	rating: 2,
	// 	cover: 'css/images/covers/5.png'
	// },
	// {
	// 	title: 'Cook Like an Italian',
	// 	author: 'Tobie Puttock',
	// 	rating: 1,
	// 	cover: 'css/images/covers/6.png'
	// },
	// {
	// 	title: 'Suneeta Vaswani',
	// 	author: 'Geeta Devi',
	// 	rating: 4,
	// 	cover: 'css/images/covers/7.png'
	// },
	// {
	// 	title: 'Jamie Does',
	// 	author: 'Jamie Oliver',
	// 	rating: 5,
	// 	cover: 'css/images/covers/8.png'
	// },
	// {
	// 	title: 'Jamie’s italy',
	// 	author: 'Jamie Oliver',
	// 	rating: 3,
	// 	cover: 'css/images/covers/9.png'
	// },
	// {
	// 	title: 'Vegetables Cookbook',
	// 	author: 'Matthew Biggs',
	// 	rating: 5,
	// 	cover: 'css/images/covers/10.png'
	// }
];

http.createServer(function (req, res) {
	// console.log('req.url');
	// console.log(req.url);
	var filename = req.url || "index.html";
	
	filename = filename === '/' ? "/index.html" : filename;
	
	if (filename === '/getBooks') {
		onGetBooks(res);
		return;
	}
	
	if (filename.slice(0, 9) === '/rateBook') {
		// console.log(req.body);
		// console.log(res.body);
		// console.log(res.responseText);
		onRateBook(req, res);
		return;
	}
	
	if (filename.slice(0, 8) === '/addBook') {
		onAddBook(req, res);
		return;
	}
	
	var ext = path.extname(filename);
	var localPath = __dirname;
	var validExtensions = {
		".html": "text/html",
		".js": "application/javascript",
		".css": "text/css",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png",
		".woff": "application/font-woff",
		".woff2": "application/font-woff2",
		".otf": "application/font-otf"
	};
	
	var validMimeType = true;
	var mimeType = validExtensions[ext];
	
	if (checkMimeType) {
		validMimeType = validExtensions[ext] != undefined;
	}
	
	if (validMimeType) {
		localPath += filename;
		fs.exists(localPath, function (exists) {
			if (exists) {
				console.log("Serving file: " + localPath);
				getFile(localPath, res, mimeType);
			} else {
				console.log("File not found: " + localPath);
				res.writeHead(404);
				res.end();
			}
		});
		
	} else {
		console.log("Invalid file extension detected: " +
				ext +
				" (" +
				filename +
				")")
	}
	
}).listen(PORT_NUMBER);

function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function (err, contents) {
		if (!err) {
			res.setHeader("Content-Length", contents.length);
			if (mimeType != undefined) {
				res.setHeader("Content-Type", mimeType);
			}
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}

function onGetBooks(res) {
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	res.end(JSON.stringify(books));
}

function onRateBook(req, res) {
	'use strict';
	
	let params = req.url.slice(10).split('&');
	let bookId = +params[0].split('=')[1];
	let rating = +params[1].split('=')[1];
	
	rateBook(bookId, rating);
	
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	res.end(JSON.stringify(books[bookId]));
}

function onAddBook(req, res) {
	'use strict';
	
	let params = req.url.slice(9).split('&');
	let title = decodeURIComponent(params[0].split('=')[1]);
	let author = decodeURIComponent(params[1].split('=')[1]);
	let cover = decodeURIComponent(params[2].split('=')[1]);
	
	addBook(title, author, cover);
	
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	res.end(JSON.stringify(books[books.length-1]));
}

console.log("Starting web server at localhost:" + PORT_NUMBER);

function Book(id, title, author, rating, cover) {
	'use strict';
	
	this.id = id;
	this.title = title;
	this.author = author;
	this.rating = rating;
	this.cover = cover;
}

function rateBook(id, rating) {
	'use strict';
	
	for (let i = 0; i < books.length; i++) {
		if (books[i].id == id) {
			books[i].rating = rating;
		}
	}
}

function addBook(title, author, cover) {
	'use strict';
	
	books.push(
			new Book(
					staticId++,
					title,
					author,
					0,
					cover
			)
	);
}
	