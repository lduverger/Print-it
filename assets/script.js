const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variable
let arrowRight = document.querySelector(".arrow_right");
let arrowLeft = document.querySelector(".arrow_left");
let divDots = document.querySelector(".dots");
let bannerImg = document.querySelector(".banner-img");
let bannerText = document.querySelector("#banner p");

let numberBulletPoint = slides.length;
let activeBP = 0;
let arrayDot;


//loop for create BulletPoint

for (i = 0; i < numberBulletPoint; i++) {
	let div = document.createElement("div");
	div.classList.add("dot");
	divDots.appendChild(div);
}



arrayDot = document.querySelectorAll(".dots .dot");


//verification
console.log(arrowRight);
console.log(arrowLeft);
console.log(divDots);
console.log(numberBulletPoint);
console.log(arrayDot);
console.log(bannerImg);
console.log(bannerText);


//start on the first dot
arrayDot[activeBP].classList.add("dot_selected");




arrowRight.addEventListener("click", (event) => {
	console.log("Click on right arrow");
	changeBanner(event);
});


arrowLeft.addEventListener("click", (event) => {
	console.log("Click on left arrow");
	changeBanner(event);
});

function changeBanner(event) {
	console.log(event);
	console.log(event.target === arrowRight);

	arrayDot[activeBP].classList.remove("dot_selected");
	if (event.target === arrowRight) {
		activeBP++;
		if (activeBP > numberBulletPoint - 1) {
			activeBP = 0;
		}
	}
	else {
		activeBP--;
		if (activeBP < 0) {
			activeBP = numberBulletPoint - 1;
		}
	}
	arrayDot[activeBP].classList.add("dot_selected");
	bannerImg.src = "./assets/images/slideshow/" + slides[activeBP].image;
	bannerText.innerHTML = slides[activeBP].tagLine;
}