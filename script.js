document.getElementById('toggle-theme').addEventListener('click', () => {
document.body.classList.toggle('dark');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
	e.preventDefault();
	alert("Thank you for your message!(Form not connected to backend)");
	});