var NotificationStorage = (function () {
	'use strict';
	
	let notifications = [];
	
	function addNotification(type, time) {
		if (notifications.length > 4) {
			notifications.shift();
		}
		
		if (type === NOTIFICATION_ADD_BOOK) {
			notifications.push(new NotificationAddBook(type, time, arguments[2][1], arguments[2][2]));
		} else if (type === NOTIFICATION_FILTER) {
			notifications.push(new NotificationFilter(type, time, arguments[2][1]));
		} else if (type === NOTIFICATION_SEARCH) {
			notifications.push(new NotificationSearch(type, time, arguments[2][1]));
		} else if (type === NOTIFICATION_RATING) {
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