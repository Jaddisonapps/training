// document.querySelector('button').addEventListener('click',function(){
// 	console.log("Hello")
// })


// Navigation js

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');




	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.3}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	}); 

}

navSlide();

// Band accordion js

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active");
	});
});


// smooth scroll mac
