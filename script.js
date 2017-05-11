var Article = (function () {
	'use strict';
	
	function changeArticlesStyle() {
		var articles = document.getElementsByClassName('article');
		
		for (var i = 0; i < articles.length; i++) {
			articles[i].style.cssText = `
				border: 5px solid lightblue;
				borderRadius: 3px;
				background: #eee;
				margin: 10px;
				margin-top: 30px;
				box-shadow: 1px 1px 0 blue, -1px -1px blue,
					inset 1px 1px blue, inset -1px -1px blue;
			`;
		}
	}
	
	function changeArticlesHeadersStyle() {
		var articlesHeaders = document.getElementsByClassName('article__h1');
		var articleHeadersAfter = document.getElementsByClassName('article__h1-after');
		
		for (var i = 0; i < articlesHeaders.length; i++) {
			articlesHeaders[i].style.cssText = `
				margin: 1px;
				margin-bottom: 0;
				background: yellow;
				font-weight: lighter;
				font-size: 1.5rem;
				padding: 5px;
			`;
			
			articleHeadersAfter[i].style.cssText = `
				width: 0;
				height: 0;
				margin: 0;
				margin-bottom: -25px;
				margin-left: 15px;
				border: 15px solid transparent;
				border-top: 15px solid yellow;
			`;
		}
	}
	
	function changeArticleTextsStyle() {
		var articleTexts = document.getElementsByClassName('article__text');
		
		for (var i = 0; i < articleTexts.length; i++) {
			articleTexts[i].style.cssText = `
				padding: 5px;
				color: #779;
			`;
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
		
		menu.style.cssText = `
			width: 100px;
			margin-left: 50px;
			position: absolute;
			top: 0;
			left: 0;
		`;
		
		var menuAllElements = document.querySelectorAll('#menu *');
		
		for (var i = 0; i < menuAllElements.length; i++) {
			menuAllElements[i].style.color = 'white';
			menuAllElements[i].style.background = '#35baf6';
			menuAllElements[i].style.fontSize = '1rem';
			menuAllElements[i].style.margin = 0;
			menuAllElements[i].style.paddingTop = '2px';
			menuAllElements[i].style.paddingBottom = '2px';
			menuAllElements[i].style.textAlign = 'center';
			menuAllElements[i].style.cursor = 'pointer';
			menuAllElements[i].style.listStyle = 'none';
		}
		
		var menuList = document.querySelector('#menu__list');
		menuList.style.height = 0;
		menuList.style.overflow = 'hidden';
		menuList.style.padding = 0;
		menuList.style.transition = 'all .3s ease-in-out';
		
		for (var i = 0; i < menuItems.length; i++) {
			// menuItems[i].style.display = 'none';
			menuItems[i].addEventListener('mouseover', menuItemHoverHandler);
			menuItems[i].addEventListener('mouseout', menuItemUnHoverHandler);
		}
		
		menuHeader.style.borderBottomRightRadius = '5px';
		menuHeader.style.borderBottomLeftRadius = '5px';
		
		menuHeader.addEventListener('mouseover', menuHeaderHoverHandler);
		menuHeader.addEventListener('mouseout', menuHeaderUnHoverHandler);
		menuHeader.addEventListener('click', menuHeaderClickHandler);
	}
	
	function menuHeaderHoverHandler() {
		menuHeader.style.boxShadow = '0 0 5px #35baf6';
	}
	
	function menuHeaderUnHoverHandler() {
		menuHeader.style.boxShadow = '';
	}
	
	function menuHeaderClickHandler() {
		var menuList = document.querySelector('#menu__list');
		
		if (menuList.style.height === '0px') {
			menuList.style.height = '110px';
		} else {
			menuList.style.height = 0;
		}
	}
	
	function menuItemHoverHandler() {
		this.style.background = '#3783c3';
	}
	
	function menuItemUnHoverHandler() {
		this.style.background = '';
	}
	
	return {
		changeMenuStyle: changeMenuStyle
	};
}());

Menu.changeMenuStyle();