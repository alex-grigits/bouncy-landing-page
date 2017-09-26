var slideIndex = 1;
showSlides(slideIndex, "team-slide", "dots");
showSlides(slideIndex, "card", "indicators");
showSlides(slideIndex, "news-slide", "news-slide-indicators");

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n, "team-slide", "dots");
}

function currentSlide2(n) {
	showSlides(slideIndex = n, "card", "indicators");
}

function currentSlide3(n) {
	showSlides(slideIndex = n, "news-slide", "news-slide-indicators");
}

function showSlides(n, slidesClass, indicators) {
	var i;
	var slides = document.getElementsByClassName(slidesClass);
	var dots = document.getElementsByClassName(indicators + "__dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" " + indicators + "__dot--active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " " + indicators + "__dot--active";
}
