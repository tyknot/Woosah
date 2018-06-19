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

window.onload = setInterval(color, 10000);

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

	// main volume click
	if(target.matches(".main-vol")){
		target.classList.toggle("active-opacity");
		target.classList.toggle("feather-volume-2");
		target.setAttribute('data-feather', 'volume-x');
		if(target.classList.contains('feather-volume-2')){
			target.removeAttribute('data-feather', 'volume-x');
		}
	}

	// icon click
	if(target.matches("#noise-icon")){
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
				}else{
					rand_icon.classList.remove("active-opacity");
					rand_icon.classList.remove("random");
					audio.pause();
				}
				if(i > 3){
					i -= 1;
				}
			}catch(error){}
		}
	}
	// productivity btn click
	if(target.matches(".productivity-btn")){
		for(let i = 0; i < 3; i++){
			try{
				const icon = icons[Math.round(Math.random() * icons.length)];
				const br = icon.nextElementSibling;
				const vol = br.nextElementSibling;
				const audio = icon.parentNode.childNodes[1];
				if(icon.classList.contains("productivity")){
					console.log(icon.className);
					icon.classList.add("active-opacity");
					vol.classList.toggle("show-vol");
					if(vol.classList.contains("show-vol") && icon.classList.contains("active-opacity")){
						audio.play();
					}else{
						icon.classList.remove("active-opacity");
						audio.pause();
					}
				}
			}catch(error){}
		}
	}
	// relax btn click
	if(target.matches(".relax-btn")){
		
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

