window.onload = ()=>{


	var myFullpage = new fullpage('#fullpage', {
		sectionsColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', ],
		anchors:['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninethPage', 'tenthPage'],
		dragAndMove: true,
		autoScrolling:true,
		fadingEffect: true,
		menu: '#myMenu',
	});

	document.querySelector(".box-menu").addEventListener('click', ()=>{
		document.querySelector(".full-page-menu").style.display = "flex"
	})

	var menuLinks = document.querySelectorAll(".menu-link")
	for(var i of menuLinks){
		i.addEventListener('click', ()=>{
			document.querySelector(".full-page-menu").style.display = "none"
		})
	}
	document.querySelector(".close-menu").addEventListener('click', ()=>{
		document.querySelector(".full-page-menu").style.display = "none"
	})



	var spirals = document.querySelectorAll('.spiral')

	for (var spiral of spirals){
		spiral.style.left = spiral.dataset.left
		spiral.style.right = spiral.dataset.right
		spiral.style.top = spiral.dataset.top
		spiral.style.bottom = spiral.dataset.bottom

	}



}