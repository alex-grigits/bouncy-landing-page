filterSelection(event, "all");

function filterSelection(e, c) {
    'use strict';
	var x, i,
		items = document.getElementsByClassName("gallery__item"),
		gallery = document.querySelector('.gallery');

	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < items.length; i++) {
		removeClass(items[i], "show");
		if (items[i].className.indexOf(c) > -1) addClass(items[i], "show");
	}
	if(event) addActive(e, c);
}

// Show filtered elements
function addClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function removeClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add class --active to the active tab
function addActive(event, tabName) {

	// Get all elements with class="tablinks" and remove the class "active"
	var gallery = document.querySelector('.gallery');
	console.log(gallery.classList);

	var tablinks = document.getElementsByClassName("tabs__tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" tabs__tablink--active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	event.currentTarget.className += " tabs__tablink--active";
}
