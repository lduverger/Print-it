const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variable
let arrowRight= document.querySelector(".arrow_right");
let arrowLeft = document.querySelector(".arrow_left");
let divDots = document.querySelector(".dots")
let numberBulletPoint = slides.length;
let activeBP = 0;
let arrayDot;


//verification
console.log(arrowRight);
console.log(arrowLeft);
console.log(divDots);
console.log(numberBulletPoint);


//loop for create BulletPoint
for(i=0; i<numberBulletPoint; i++){
	let div = document.createElement("div");
	div.classList.add("dot");
	divDots.appendChild(div);
}

arrayDot = document.querySelectorAll(".dots .dot");
arrayDot[0].classList.add("dot_selected");
console.log(arrayDot);



arrowRight.addEventListener("click", () => {
	console.log("Click on right arrow")
});


arrowLeft.addEventListener("click", () => {
	console.log("Click on left arrow")
});