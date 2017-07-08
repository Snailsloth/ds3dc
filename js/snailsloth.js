
window.onload = init;
function init(){
	if(isNaN(localStorage.clickcount)){
        localStorage.setItem('clickcount', '0');
    }
    else{
    	document.getElementById("result").innerHTML = localStorage.clickcount;
    }


}

  <!-- //Initialize Swiper -->

    var swiper = new Swiper('.swiper-container', {
        speed: 600,

    });


function clickCounter() {
      if(typeof(Storage) !== "undefined") {
         if(isNaN(localStorage.clickcount)){
        localStorage.setItem('clickcount', '0');
    }
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


function clickDECounter(){

	localStorage.clickcount = Number(localStorage.clickcount)-1;
	document.getElementById("result").innerHTML = localStorage.clickcount;
}

