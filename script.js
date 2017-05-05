var Article = (function () {
	'use strict';
	
	function changeArticlesStyle() {
		var articles = document.getElementsByClassName('article');
		
		for (var i = 0; i < articles.length; i++) {
			articles[i].style.border = '5px solid lightblue';
			articles[i].style.borderRadius = '3px';
			articles[i].style.boxShadow = '1px 1px 0 blue, -1px -1px blue,\ ' +
					'inset 1px 1px blue, inset -1px -1px blue';
			articles[i].style.background = '#eee';
			articles[i].style.margin = '10px';
		}
	}
	
	function changeArticlesHeadersStyle() {
		var articlesHeaders = document.getElementsByClassName('article__h1');
		var articleHeadersAfter = document.getElementsByClassName('article__h1-after');
		
		for (var i = 0; i < articlesHeaders.length; i++) {
			articlesHeaders[i].style.margin = '1px';
			articlesHeaders[i].style.marginBottom = 0;
			articlesHeaders[i].style.background = 'yellow';
			articlesHeaders[i].style.fontWeight = 'lighter';
			articlesHeaders[i].style.fontSize = '1.5rem';
			articlesHeaders[i].style.padding = '5px';
			
			articleHeadersAfter[i].style.width = 0;
			articleHeadersAfter[i].style.height = 0;
			articleHeadersAfter[i].style.margin = 0;
			articleHeadersAfter[i].style.marginBottom = '-25px';
			articleHeadersAfter[i].style.marginLeft = '15px';
			articleHeadersAfter[i].style.border = '15px solid transparent';
			articleHeadersAfter[i].style.borderTop = '15px solid yellow';
			
		}
	}
	
	function changeArticleTextsStyle() {
		var articleTexts = document.getElementsByClassName('article__text');
		
		for (var i = 0; i < articleTexts.length; i++) {
			articleTexts[i].style.padding = '5px';
			articleTexts[i].style.color = '#779';
		}
	}
	
	return {
		changeArticlesStyle: changeArticlesStyle,
		changeArticlesHeadersStyle: changeArticlesHeadersStyle,
		changeArticleTextsStyle: changeArticleTextsStyle
	};
}());

Article.changeArticlesStyle();
Article.changeArticlesHeadersStyle();
Article.changeArticleTextsStyle();

var Menu = (function () {
	'use strict';
	
	var menu = document.getElementById('menu');
	var menuHeader = document.getElementById('menu__header');
	var menuItems = document.getElementsByClassName('menu__items');
	
	function changeMenuStyle() {
		document.body.style.margin = 0;
		
		menu.style.width = '100px';
		menu.style.marginLeft = '50px';
		
		var menuAllElements = document.querySelectorAll('#menu *');
		// var menuAllElements = document.getElementById('menu__list');
		
		for (var i=0; i<menuAllElements.length; i++){
		// menuAllElements[i].style.color = 'white';
		menuAllElements[i].style.background = '#35baf6';
		menuAllElements[i].style.fontSize = '1rem';
		menuAllElements[i].style.margin = 0;
		menuAllElements[i].style.padding = 0;
		menuAllElements[i].style.textAlign = 'center';
		menuAllElements[i].style.cursor = 'pointer';
		menuAllElements[i].style.padding = '2px';
		// menuAllElements[i].style.display = 'none';
		}
		
		menuHeader.style.color = 'white';
		menuHeader.style.background = '#35baf6';
		menuHeader.style.fontSize = '1rem';
		menuHeader.style.margin = 0;
		menuHeader.style.padding = 0;
		menuHeader.style.textAlign = 'center';
		menuHeader.style.cursor = 'pointer';
		menuHeader.style.padding = '2px';
		
		menuHeader.style.borderBottomRightRadius = '5px';
		menuHeader.style.borderBottomLeftRadius = '5px';
		
		for (var i = 0; i < menuItems.length; i++) {
			menuItems[i].style.padding = '2px';
		}
		
		menuHeader.addEventListener('mouseover', menuHeaderHoverHandler);
	}
	
	function menuHeaderHoverHandler() {
		menuHeader.style.boxShadow = '0 0 5px #35baf6';
	}
	
	return {
		changeMenuStyle: changeMenuStyle
	}
}());

Menu.changeMenuStyle();