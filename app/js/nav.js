const navEl = document.getElementById('navigation');
const navLinkEls = navEl.querySelectorAll('[data-tab-link]');
const tabEls = document.querySelectorAll('#tabs > div');
const tabIds = Array.from(tabEls).map((i) => i.id);

navLinkEls.forEach((navLink) => {
	navLink.addEventListener('click', (e) => {
		tabEls.forEach((tab) => tab.classList.add('D(n)'));
		const activeId = e.target.closest('a').dataset.tabLink;
		document.getElementById(activeId).classList.remove('D(n)');
	})
});

document.addEventListener("DOMContentLoaded", () => {
	const hash = window.location.hash;
	if (tabIds.includes(hash.substring(1))) {
		tabEls.forEach((tab) => tab.classList.add('D(n)'));
		document.querySelector(hash).classList.remove('D(n)');
	}
});