var indexPrimaPoza = document.getElementById("indexPrimaPoza");

window.addEventListener("scroll",function(){

	var offset = window.pageYOffset;

	indexPrimaPoza.style.backgroundPositionY = offset*0.7+"px";
	console.log(offset);
});