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
const audioEl = document.querySelectorAll("audio");
const icons = document.querySelectorAll("#noise-icon");
const volEl = document.querySelectorAll("#vol-slider");
const vol_on = document.querySelector(".vol-on");
const vol_off = document.querySelector(".vol-off");
const rndom_btn = document.querySelectorAll(".random-btn");
const prod_btn = document.querySelector(".productivity-btn-btn");
const relax_btn = document.querySelector(".relax-btn");
const audio_class = {rain:"rain",storm:"storm",
			radio:"radio",droplet:"droplet",moon:"moon",
			activity:"activity",clock:"clock",
			truck:"truck",users:"users"};

// main volume control
document.addEventListener("click", function(e){
	let target = e.target;
	// mute audio click
	if(target.matches(".main-vol")){
		vol_on.classList.toggle("hide-vol");
		vol_off.classList.toggle("show-vol");
		for(let i = 0; i < audioEl.length; i++){
			// vol off
			if(vol_on.classList.contains("hide-vol")){
				vol_off.classList.add("active-opacity");
				audioEl[i].classList.add("muted");
				audioEl[i].pause();
			// vol on	
			}else if(icons[i].classList.contains("active-opacity")){
				audioEl[i].classList.remove("muted");
				audioEl[i].play();
			}else{
				vol_off.classList.remove("active-opacity");
				audioEl[i].classList.remove("muted");
			}
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
		// audio muted
		if(audio.classList.contains("muted")){
			audio.pause()
		// active opacity, vol		
		}else if(vol.classList.contains("show-vol") && target.classList.contains("active-opacity")){
			audio.play();
		}else{
			audio.pause();
		}

	}

	// random btn click
	if(target.matches(".random-btn")){
		for(let i = 0; i < 2; i++){
			try{
				const rand_icon = icons[Math.round(Math.random() * icons.length)];
				const br = rand_icon.nextElementSibling;
				const vol = br.nextElementSibling;
				const audio = rand_icon.parentNode.childNodes[1];
			
				rand_icon.classList.add("random");
				rand_icon.classList.add("active-opacity");
				vol.classList.toggle("show-vol");
				console.log(rand_icon.className);
				if(audio.classList.contains("muted")){
					audio.pause();
				}else if(vol.classList.contains("show-vol") && rand_icon.classList.contains("active-opacity") && rand_icon.classList.contains("random")){
					audio.play();
				}else{
					rand_icon.classList.remove("active-opacity");
					rand_icon.classList.remove("random");
					audio.pause();
				}
				
			}catch(error){}

		}
	}

	// productivity btn click
	if(target.matches(".productivity-btn")){
		for(let i = 0; i < 2; i++){
			try{
				const icon = icons[Math.round(Math.random() * icons.length)];
				const br = icon.nextElementSibling;
				const vol = br.nextElementSibling;
				const audio = icon.parentNode.childNodes[1];
				if(icon.classList.contains("productivity")){
					console.log(icon.className);
					icon.classList.add("active-opacity");
					vol.classList.toggle("show-vol");
					if(audio.classList.contains("muted")){
						audio.pause();
					}else if(vol.classList.contains("show-vol") && icon.classList.contains("active-opacity")){
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
		for(let i = 0; i < 2; i++){
			try{
				const icon = icons[Math.round(Math.random() * icons.length)];
				const br = icon.nextElementSibling;
				const vol = br.nextElementSibling;
				const audio = icon.parentNode.childNodes[1];
				if(icon.classList.contains("relax")){
					console.log(icon.className);
					icon.classList.add("active-opacity");
					vol.classList.toggle("show-vol");
					if(audio.classList.contains("muted")){
						audio.pause();
					}else if(vol.classList.contains("show-vol") && icon.classList.contains("active-opacity")){
						audio.play();
					}else{
						icon.classList.remove("active-opacity");
						audio.pause();
					}
				}
			}catch(error){}
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

