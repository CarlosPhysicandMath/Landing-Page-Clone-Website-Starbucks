

		let themeSwitch = document.querySelector('.themeSwitch');
		let body = document.querySelector('body');
		themeSwitch.onclick = function(){
			themeSwitch.classList.toggle('active');
			body.classList.toggle('dark');
		}


	function imgSlider(anything){
		document.querySelector('.starbucks').src = anything;
	} 

	function changeCircleColor(color){
		const circle = document.querySelector('.circle');
		circle.style.background = color;
	}

	function toggleMenu(){
		var menuToggle = document.querySelector('.toggle');
		var navigation = document.querySelector('.navigation')

		menuToggle.classList.toggle('active')
		navigation.classList.toggle('active')
	}
