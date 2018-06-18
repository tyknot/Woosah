// background color change
function color(){
	let newColor = '#';
	const values = ['a','b','c','d','e',
					'0','1','2','3','4','5','6','7','8','9'];

	for(let x = 0; x < 6; x++){
		const rand_num = Math.round(Math.random() * 5);
		const x = values[rand_num];
		newColor += x;
	}		
	document.body.style.backgroundColor = "transparent";		
	document.body.style.backgroundColor = newColor;
}

// window.onload = setInterval(color, 10000);

// everything audio related
//const volSlider = document.querySelector("#vol-slider");
const volSlider = document.getElementsByTagName("input");
const icons = document.querySelectorAll("svg");
const audioEl = document.querySelectorAll("audio");

const rndom_btn = document.querySelectorAll(".random-btn");
const prod_btn = document.querySelector(".productivity-btn-btn");
const relax_btn = document.querySelector(".relax-btn");
const audio_class = {rain:"rain",storm:"storm",
								radio:"radio",droplet:"droplet",moon:"moon",
								activity:"activity",clock:"clock",
								truck:"truck",users:"users"};

// icon click control
document.addEventListener("click", function(e){
	let target = e.target;
	// icon click
	if(target.matches("svg")){
		const br = target.nextElementSibling;
		const vol = br.nextElementSibling;
		const audio = target.parentNode.childNodes[1];
		// remove classes that were added w/ random|prod|relax
		target.classList.remove("random");
		vol.classList.toggle("show-vol");
		target.classList.toggle("active-opacity");
		if(vol.classList.contains("show-vol") && target.classList.contains("active-opacity")){
			audio.play();
		}else{
			audio.pause();
		}
	}
	// random btn click
	if(target.matches(".random-btn")){
		for(let i = 0; i < 3; i++){
			try{
				const rand_icon = icons[Math.round(Math.random() * icons.length)];
				const br = rand_icon.nextElementSibling;
				console.log(br);
				const vol = br.nextElementSibling;
				const audio = rand_icon.parentNode.childNodes[1];
				console.log(rand_icon.className);
				rand_icon.classList.add("random");
				rand_icon.classList.add("active-opacity");
				vol.classList.toggle("show-vol");
				if(vol.classList.contains("show-vol") && rand_icon.classList.contains("active-opacity") && rand_icon.classList.contains("random")){
					audio.play();
				}
				else{
					rand_icon.classList.remove("active-opacity");
					rand_icon.classList.remove("random");
					audio.pause();
				}
			}catch(error){
			}
		}
	}
});	

// volume control
document.addEventListener('input', function(e){
	let target = e.target;
	if(target.matches("input")){
		const audio = target.parentNode.childNodes[1];
		audio.volume = target.value;
	}

});						

// icons play pause audio | random, productivity, relax
/*
for(let i = 0; i < icon.length; i++){
	// volume control
	volSlider[i].addEventListener('input', function(){
		audioEl[i].volume = this.value;
	});
	// icon control
	icon[i].addEventListener("click", function(e){
		let target = e.target;
		volSlider[i].classList.toggle("show-vol");
		if(volSlider[i].classList.contains("show-vol")){
			target.style.opacity = 1;
			for(let key in audio_class){
				if(icon[i].classList.contains(audio_class[key])){
					audioEl[i].play();
				}
			}
		}
		else{
			audioEl[i].pause();
			target.style.opacity = 0.6;
			return false;
		}
	});
	// random audio btn click
	rndom_btn.addEventListener("click", function(){
		if(i < 3){
			i++;
			let rndom_icon = icon[Math.round(Math.random() * icon.length)];
			console.log(rndom_icon.className);

			audioEl[i].classList.add("random");
			if(true){
				i =- 1;

			}
		}
	});
}
*/
