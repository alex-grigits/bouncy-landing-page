function initMap() {
	var selidovo = {lat: 48.1475145, lng: 37.297136};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: selidovo
	});

	var img = '../../img/contact-us/map-marker.png';

	var marker = new google.maps.Marker({
		position: selidovo,
		map: map,
		icon: img
	});
}
