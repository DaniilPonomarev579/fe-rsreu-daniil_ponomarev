function Notification(type, time) {
	this.type = type;
	this.time = time;
}

function NotificationAddBook(type, time, title, author) {
	'use strict';
	
	Notification.call(this, type, time);
	this.title = title;
	this.author = author;
}

function NotificationFilter(type, time, criterion) {
	'use strict';
	
	Notification.call(this, type, time);
	this.criterion = criterion;
}

function NotificationSearch(type, time, keywords) {
	'use strict';
	
	Notification.call(this, type, time);
	this.keywords = keywords;
}

function NotificationRating(type, time, title, rating) {
	'use strict';
	
	Notification.call(this, type, time);
	this.title = title;
	this.rating = rating;
}
