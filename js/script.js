//button

const createBtn = () => {
	const btn = document.createElement('button');
	btn.classList.add('toTop', 'hidden');
	document.body.appendChild(btn);
	
	return btn;
}

const button = createBtn();

const animateScroll = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

button.addEventListener('click', (e)=> {
	e.stopPropagation();
	animateScroll();
})

window.onscroll = function() {
	if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
		button.classList.remove('hidden')
	} else {
		button.classList.add('hidden')
	}
}