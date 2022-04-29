// $(window).on('DOMContentLoaded load resize scroll', handler);

function isElementInViewport(el) {

	// если используется jQuery то можно передавать jQuery элемент
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}

	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight ||
			document.documentElement.clientHeight) && /*или $(window).height() */
		rect.right <= (window.innerWidth ||
			document.documentElement.clientWidth) /*или $(window).width() */
	);
}