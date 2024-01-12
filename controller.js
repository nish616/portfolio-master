window.onload = () => {
	const about = document.getElementById("about");
	const torch = document.getElementById("torch");

	about.addEventListener('mousemove', function (e) {
		torch.style.top = e.pageY - 190 + 'px';
		torch.style.left = e.pageX - 120 + 'px';
	});
}
