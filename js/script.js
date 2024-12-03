


//Бургер меню

$(document).ready(function () {
	$('.navigation__burger').click(function (event) {
		$('.navigation__burger, .navigation__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.navigation__menu a').click(function () {
		$('.navigation__burger,.navigation__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

// Из фото в БГ

function ibg(){
		$.each($('.ibg'), function(_index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
}
ibg();

document.addEventListener("DOMContentLoaded", () => {
	const photos = document.querySelectorAll(".projects__photo"); // Все фото
	const button = document.querySelector(".projects__btn"); // Кнопка
	let visibleCount = 6; // Сколько фото отображается изначально
	const loadMoreCount = 4; // Сколько фото подгружается на каждый клик

	// Скрываем фотографии, начиная с 7-й
	photos.forEach((photo, index) => {
		if (index >= visibleCount) {
			photo.classList.add("hidden");
		}
	});

	// Обработка клика на кнопку
	button.addEventListener("click", (event) => {
		event.preventDefault(); // Отключаем переход по ссылке

		// Показываем следующие фото
		let shown = 0;
		photos.forEach((photo, index) => {
			if (photo.classList.contains("hidden") && shown < loadMoreCount) {
				photo.classList.remove("hidden");
				shown++;
			}
		});

		// Увеличиваем счётчик видимых фото
		visibleCount += shown;

		// Если все фото показаны, скрываем кнопку
		if (visibleCount >= photos.length) {
			button.style.display = "none";
		}
	});
});



