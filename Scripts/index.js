var indexPrimaPoza = document.getElementById("indexPrimaPoza");
var sw=4,SW=true,
	topBar = document.getElementById("top");



var baraJosMeniu = document.getElementById("baraJosMeniu"),
baraJosMeniu2 = document.getElementById("baraJosMeniu2"),
 meniu4 = document.getElementById("meniu4"),
 meniu3 = document.getElementById("meniu3"),
 meniu2 = document.getElementById("meniu2"),
 meniu1 = document.getElementById("meniu1"),
 switchForMoveAll=1;

 moveAll();


console.log(meniu3.offsetWidth);



window.addEventListener("scroll",function(){

	var offset = window.pageYOffset;

	indexPrimaPoza.style.backgroundPositionY = offset*0.7+"px";


	if(offset>500&&SW){

		topBar.classList.add("topSchimba");
			moveAll();
		baraJosMeniu.style.display="none";
		setTimeout(function(){ 
			moveAll();
			baraJosMeniu.style.display="block"; 
		},301);

			switchForMoveAll=1;
		console.log("peste500");
		
		SW=0;
	}
	else if(offset<=500){

		topBar.classList.remove("topSchimba");

		if(switchForMoveAll==1){
			moveAll();
			switchForMoveAll=0;

			console.log("da");
		}

		SW=1;
	}

});
window.addEventListener('DOMContentLoaded', function(){
		setTimeout(function(){ 
			moveAll();
		}, 301);
		


});

window.addEventListener("resize",function(){
	moveAll();


})

function move(el,bara) {
  const rect = el.getBoundingClientRect();

	bara.style.width=el.offsetWidth+"px";
	bara.style.left=rect.left + window.scrollX-19+"px";
};
function moveAll(){
		if(sw==1)
			move(meniu1,baraJosMeniu);
		else if(sw==2)
			move(meniu2,baraJosMeniu);
		else if(sw==3)
			move(meniu3,baraJosMeniu);
		else
			move(meniu4,baraJosMeniu);

		console.log("ceva");
}

meniu1.addEventListener("mousemove",function(){move(meniu1,baraJosMeniu2);baraJosMeniu2.style.display="block";});
meniu2.addEventListener("mousemove",function(){move(meniu2,baraJosMeniu2);baraJosMeniu2.style.display="block";});
meniu3.addEventListener("mousemove",function(){move(meniu3,baraJosMeniu2);baraJosMeniu2.style.display="block";});
meniu4.addEventListener("mousemove",function(){move(meniu4,baraJosMeniu2);baraJosMeniu2.style.display="block";});

meniu1.addEventListener("mouseleave",function(){baraJosMeniu2.style.display="none";});
meniu2.addEventListener("mouseleave",function(){baraJosMeniu2.style.display="none";});
meniu3.addEventListener("mouseleave",function(){baraJosMeniu2.style.display="none";});
meniu4.addEventListener("mouseleave",function(){baraJosMeniu2.style.display="none";});

meniu1.addEventListener("click",function(){move(meniu1,baraJosMeniu);sw=1});
meniu2.addEventListener("click",function(){move(meniu2,baraJosMeniu);sw=2});
meniu3.addEventListener("click",function(){move(meniu3,baraJosMeniu);sw=3});
meniu4.addEventListener("click",function(){move(meniu4,baraJosMeniu);sw=4});