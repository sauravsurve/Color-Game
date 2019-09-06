var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.background="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i=0;i<squares.length;i++)
	{
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
});

colorDisplay.textContent=pickedColor;
resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	this.textContent="New Color";

	messageDisplay.textContent="";
	//change colors of squares
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=colors[i];
	h1.style.backgroundColor="steelblue;";
});


for (var i=0; i<squares.length;i++)
{
	//add initital colors
	squares[i].style.backgroundColor=colors[i];

	//add quick listeners to squares
	squares[i].addEventListener("click",function(){
		//grad color of picked color
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor)
			{
				messageDisplay.textContent="Correct";
				resetButton.textContent="Play Again?"
				h1.style.backgroundColor=clickedColor;
				for (var j=0; j<colors.length;j++)
					squares[j].style.backgroundColor=clickedColor;
			}

		else
			{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
	});
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];

	for (var i=0;i <num;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", "+g+", "+b+")"; 
}