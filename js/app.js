function showMenu() {
	'use strict';
	
	var el = document.getElementById("sidebar");
	if (el.style.height == 0 || el.style.height == "0px") {
		el.style.minWidth = "200px";
		el.style.height = "calc(100% - 135px)";
	}
	else {
		el.style.minWidth = "0";
		el.style.height = "0";
	}
}

View.refreshBooks(BookStorage.getBooks());
View.addEventListeners();