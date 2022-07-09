const navEl = document.getElementById('navigation');
const navLinksEls = navEl.querySelectorAll('[data-tab-link]');
const tabsEls = document.querySelectorAll('#tabs > div');

navLinksEls.forEach((navLink) => {
	navLink.addEventListener('click', (e) => {
		e.preventDefault();
		tabsEls.forEach((tab) => tab.classList.add('D(n)'));
		const activeId = e.target.closest('a').dataset.tabLink;
		document.getElementById(activeId).classList.remove('D(n)');
	})
});
