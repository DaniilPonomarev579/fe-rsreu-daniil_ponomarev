var RequestService = (function () {
	'use strict';
	
	function makeRequest(xhr, method, url, onreadystatechangeFunction) {
		// let xhr = new XMLHttpRequest();
		
		xhr.open(method, url, true);
		
		xhr.onreadystatechange = onreadystatechangeFunction;
		
		xhr.send();
	}
	
	return {
		makeRequest: makeRequest
	}
})();