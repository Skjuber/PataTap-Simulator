var welcome = document.querySelector(".welcome")

document.addEventListener('keypress', function(){
  welcome.parentNode.removeChild(welcome);
});

function randomColor(){
	var r = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

document.addEventListener("keypress", function(){
         document.querySelector("canvas").style.backgroundColor = randomColor();
    })

