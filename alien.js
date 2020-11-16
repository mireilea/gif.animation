
<html><head>
<script>
t          = undefined
stepNumber = 0

function move() {

    // When the alien is less than the window width and the alien is walking right, then keep moving him to the right
    if ((parseInt(alien.style.left) + alien.width) < parseInt(window.innerWidth) && alien.src.includes('alienrwalk'))  {
        stepRight();
        alien.style.left = parseInt(alien.style.left) + 1 + "px";
    }

    // When the alien hits window width and the alien is walking right, then change his direction
    else if ((parseInt(alien.style.left) + alien.width) === parseInt(window.innerWidth) && alien.src.includes('alienrwalk')) {
        stepLeft();
        alien.style.left = parseInt(alien.style.left) - 1 + "px";
    }

    // When the alien hits back where he started and the alien is walking left, then change his direction again
    else if (parseInt(alien.style.left) === 0 && alien.src.includes('alienlwalk')){
        stepRight();
        alien.style.left = parseInt(alien.style.left) + 1 + "px";
    }

    // When the alien is less than the window width, and he's walking left, then keep moving him to the left
    else if ((parseInt(alien.style.left) + alien.width) < parseInt(window.innerWidth) && alien.src.includes('alienlwalk')) {
        stepLeft();
        alien.style.left = parseInt(alien.style.left) - 1 + "px";
    }
}

// Stepping right function, change the source to alienRwalk
function stepRight(){
	stepNumber++;
	if(stepNumber > 30){
		stepNumber = 0
	}
	alien.src = "images/alien/alienrwalk" + stepNumber + ".gif"
}

// Stepping left function, change the source to alienLwalk
function stepLeft(){
    stepNumber++
    if(stepNumber > 30){
        stepNumber = 0
    }
    alien.src = "images/alien/alienlwalk" + stepNumber + ".gif"
}

onload=function(){
	alien = document.getElementById('alien')
	
	window.onclick=function(){
		if(t === undefined){
			t = setInterval(move, 10)
		}else{
			t = clearInterval(t)
		}
	}
}

</script>
</head>
<body>
<img src="images/alien/alienrwalk0.gif" id="alien" style="position:absolute;left:10px">
</body>
</html>