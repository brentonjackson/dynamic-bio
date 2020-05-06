var footer = document.getElementById("footer");

footer.addEventListener('mouseover',showFoot);
footer.addEventListener('mouseout', hideFoot);
footer.addEventListener('click', toProfile);

function showFoot() {
    footer.style.opacity = 1;
}

function hideFoot() {
	this.style.opacity = .75;
}

function toProfile() {
	window.open('http://github.com/brentonjackson/dynamic-bio', '_blank');
}

