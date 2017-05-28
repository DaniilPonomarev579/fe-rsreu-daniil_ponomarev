function Notification(id, type, time) {
	this.id = id;
	this.type = type;
	this.time = time;
}

function NotificationAddBook(id, type, time, title, author) {
	'use strict';
	
	Notification.call(this, id, type, time);
	this.title = title;
	this.author = author;
}

function NotificationFilter(id, type, time, criterion) {
	'use strict';
	
	Notification.call(this, id, type, time);
	this.criterion = criterion;
}

function NotificationSearch(id, type, time, keywords) {
	'use strict';
	
	Notification.call(this, id, type, time);
	this.keywords = keywords;
}

function NotificationRating(id, type, time, title, rating) {
	'use strict';
	
	Notification.call(this, id, type, time);
	this.title = title;
	this.rating = rating;
}
