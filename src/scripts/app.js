const viewport = {
	width : window.innerWidth,
	height : window.innerHeight
}

window.addEventListener("resize", () => {
	viewport.width = window.innerWidth;
	viewport.height = window.innerHeight;

	//console.log(viewport);
});

document.addEventListener('DOMContentLoaded', (event) => {
	//Initialize you modules here...
	console.log('ready');
	let showSolution = document.getElementsByClassName('js-toggle-solution');
	for (let i = 0; i < showSolution.length; i++) {
		const element = showSolution[i];
		element.addEventListener('click', function(e) {
			e.preventDefault();
			let parent = this.parentNode;
			if ( parent.className == "open") {
				parent.classList.remove("open");
				this.innerHTML = "&DownArrowBar; Show Solution";
			} else {
				parent.classList.add("open");
				this.innerHTML = "&UpArrowBar; Hide Solution";
			}
			let childs = parent.childNodes;
			for (let i = 0; i < childs.length; i++) {
				const element = childs[i];
				if ( element.className == "solution" && parent.className != "open") {
					element.style.display = "none";
				} else if ( element.className == "solution" && parent.className == "open" ) {
					element.style.display = "block";
				}
			}
		});
	}
});
