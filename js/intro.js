let width = window.innerWidth;
let height = window.innerHeight;

const intro = document.getElementsByClassName('intro')[0];
const intro_1 = document.getElementsByClassName('intro_1')[0];
const story = document.getElementsByClassName('story')[0];
const paragraphs = document.getElementsByClassName('paragraphs')[0];
const sound = document.getElementById('sound');
const whats = document.getElementsByClassName('whats')[0];
const iconSite = document.getElementsByClassName('iconSite')[0];

intro.style.fontSize = width / 30 + 'px';
intro_1.style.fontSize = width / 30 + 'px';
story.style.fontSize = width / 20 + 'px';

paragraphs.style.height = height + 'px';
iconSite.style.width = width * 0.15 + 'px';
iconSite.style.height = height * 0.1 + 'px';

function start() {
	intro.className = 'intro text_intro animation_intro';   
	intro_1.className = 'intro_1 text_intro animation_intro_1'; 
	story.className = 'story text_story animation_story';
	sound.play();
}
		 
function WhatsOk() {
	console.log("Whats ok");
	window.open("https://api.whatsapp.com/send?phone=+*5535988621807*&text=%20*Aceito/Aceitamos*sua*convocação.");
} 

function WhatsNo() {
	console.log("Whats No");
	window.open("https://api.whatsapp.com/send?phone=+*5535988621807*&text=%20*Infelizmente*estamos*em*uma*outra*missão.*");
} 

window.addEventListener('resize', () => {
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
	
	intro.style.fontSize = width / 30 + 'px';
	intro_1.style.fontSize = width / 30 + 'px';  
	story.style.fontSize = width / 20 + 'px';
	
	paragraphs.style.height = height + 'px';	
	iconSite.style.width = width * 0.15 + 'px';
	iconSite.style.height = height * 0.1 + 'px';
});

sound.addEventListener('ended', (event) => {
	document.getElementById("secWhats").style.display = "block";  
}); 

document.getElementById('btnOk').addEventListener("click", WhatsOk, false);
document.getElementById('btnNo').addEventListener("click", WhatsNo, false);

/* Background with Stars */

let canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 100;
const size = 2;
const elements = [];

function starts() {
	for (let i = 0; i < num; i++) {
		elements[i] = {
			x: Math.ceil(Math.random() * width),
			y: Math.ceil(Math.random() * height),
			size: Math.random() * size,
		};
	}
}

function snow() {
	ctx.clearRect(0, 0, width, height);
	for (let i = 0; i < num; i++) {
		const e = elements[i];
		ctx.beginPath();
		ctx.fillStyle = '#FFFFFF';
		ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
		ctx.fill();
	}
}

starts();
snow();