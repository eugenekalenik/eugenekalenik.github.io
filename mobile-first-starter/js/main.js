const navIcon = document.querySelector('.nav-icon');
const menu = document.querySelector('.menu');

navIcon.onclick = function() {
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
		navIcon.style.backgroundImage = 'url(images/menu_icon.png)';
	} else {
		menu.style.display = 'block';
		navIcon.style.backgroundImage = 'url(images/close_icon.png)';
	}
}

const buttonTop = document.getElementById('buttonTop');


window.onscroll = function() {
	const scrolled = window.pageYOffset || document.documentElement.scrollTop;

	if (scrolled > 264) {
		buttonTop.classList.add('show-button-top');
	} else {
		buttonTop.classList.remove('show-button-top');
	}

	console.log(window.pageYOffset);
}

buttonTop.onclick = function() {
	// window.pageYOffset = 0;
	document.documentElement.scrollTop = 0;
	console.log(window.pageYOffset);
}