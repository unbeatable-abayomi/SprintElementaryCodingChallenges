// const img = document.getElementById('img');

function changeImage(imgElement, imagePath) {
	imgElement.src = imagePath;
}

function styleControl(formElement, color) {
	formElement.style.backgroundColor = color;
}

$(document).ready(function() {

	$('#menu').click(function() {
		$('#navPanel').fadeIn('slow');
	});

	$('#navPanel').click(function() {
		$(this).fadeOut("slow");
	});
});

//  function hideStyle(formElement) {
//     formElement.style.backgroundColor = '#fff';
// }
