document.getElementById('toggle-icon').addEventListener('click', () => {
	document.querySelector('.menu-overlay').classList.toggle('active');
	document.querySelector('header').classList.toggle('active');
	if (document.querySelector('.menu-overlay').classList.contains('active')) {
		document.querySelector('.material-icons').textContent = 'menu_open';
	} else {
		document.querySelector('.material-icons').textContent = 'menu';
	}
});