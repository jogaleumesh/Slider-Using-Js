var container = document.querySelector('.container');
var slider = container.querySelector('#slider');
var slides = container.querySelector('.slides');

var id = setInterval(myMove, 5);																													
var posLeft = 0;
function myMove() {																				
	posLeft++;																					
	if(posLeft == 2160){
	 	posLeft = 0;
	 }															
	else{
	  	slides.style.marginLeft ="-"+ posLeft + 'px'; 
	 }
   }


slides.addEventListener("mouseenter", function(){
    clearInterval();
});

slides.addEventListener("mouseleave", function(){
    myMove();
});

document.onload = myMove();