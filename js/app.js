bookView.refreshBooks(BookStorage.getBooks());
bookView.addEventListeners();

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// Для асинхронного запроса указываем true третьим параметром
xhr.open('GET', 'phones.json', true);
// 3. Добавляем обработчики на события
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			alert(xhr.responseText);
		}
	}
};
// 4. Отсылаем запрос
xhr.send();
