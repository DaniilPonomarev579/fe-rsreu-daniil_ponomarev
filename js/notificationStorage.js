var NotificationStorage = (function () {
	'use strict';
	
	let notifications = [];
	
	function addNotification(type, time) {
		if (notifications.length > 4) {
			notifications.shift();
		}
		
		if (type === 'addBook') {
			notifications.push(new NotificationAddBook(type, time, arguments[2][1], arguments[2][2]));
		} else if (type === 'filter') {
			notifications.push(new NotificationFilter(type, time, arguments[2][1]));
		} else if (type === 'search') {
			notifications.push(new NotificationSearch(type, time, arguments[2][1]));
		} else if (type === 'rating') {
			notifications.push(new NotificationRating(type, time, arguments[2][1], arguments[2][2]));
		} else {
			throw new Error('undefined type');
		}
	}
	
	function getNotifications() {
		return notifications;
	}
	
	return {
		addNotification: addNotification,
		getNotifications: getNotifications
	};
})();

function NotificationAddBook(type, time, title, author) {
	'use strict';
	
	this.type = type;
	this.time = time;
	this.title = title;
	this.author = author;
}

function NotificationFilter(type, time, criterion) {
	'use strict';
	
	this.type = type;
	this.time = time;
	this.criterion = criterion;
}

function NotificationSearch(type, time, keywords) {
	'use strict';
	
	this.type = type;
	this.time = time;
	this.keywords = keywords;
}

function NotificationRating(type, time, title, rating) {
	'use strict';
	
	this.type = type;
	this.time = time;
	this.title = title;
	this.rating = rating;
}
