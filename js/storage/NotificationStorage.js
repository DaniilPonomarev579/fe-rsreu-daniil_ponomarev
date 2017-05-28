var NotificationStorage = (function () {
	'use strict';
	
	let staticId = 0;
	let notifications = [];
	
	function addNotification(type, time) {
		if (notifications.length > 4) {
			notifications.shift();
		}
		
		if (type === NOTIFICATION_ADD_BOOK) {
			notifications.push(new NotificationAddBook('notification-'+staticId++, type, time, arguments[2][1], arguments[2][2]));
		} else if (type === NOTIFICATION_FILTER) {
			notifications.push(new NotificationFilter('notification-'+staticId++, type, time, arguments[2][1]));
		} else if (type === NOTIFICATION_SEARCH) {
			notifications.push(new NotificationSearch('notification-'+staticId++, type, time, arguments[2][1]));
		} else if (type === NOTIFICATION_RATING) {
			notifications.push(new NotificationRating('notification-'+staticId++, type, time, arguments[2][1], arguments[2][2]));
		} else {
			throw new Error('undefined type');
		}
		
		// setTimeout(function () {
		// 	notifications.shift();
		// }, 3000);
	}
	
	function getNotifications() {
		return notifications;
	}
	
	return {
		addNotification: addNotification,
		getNotifications: getNotifications
	};
})();