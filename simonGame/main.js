var Game = {
	outcomes: ['green','red','yellow','blue'],
	compterArray:[],
	level:1,
	playerArray:[],
	i:0
};

document.getElementById("start").addEventListener("click", function(){
    reset();
	intialMoves();
});

function reset(){
	Game.compterArray=[];
	Game.playerArray=[];
	Game.i=0;
	Game.level=1;
}

function intialMoves(){
	Game.i=0;
	var counter = setInterval(function(level){
		var id;
		Game.compterArray.push(Math.floor(Math.random()*4));
		id = Game.outcomes[Game.compterArray[Game.i]];
		
		document.getElementById(id).className += " reduceOpacity";
		setTimeout(function(id){
			document.getElementById(id).className ="block";
		},200,id);
		Game.i++;
		if(Game.i == level){
			clearInterval(counter);
		}
			
		},1000,Game.level);
}

document.getElementsByClassName("simon-game")[0].addEventListener("click", function(event){
    playerMoves(event.target.value);
});

function playerMoves(value){
	length = Game.playerArray.push(value);
	if(Game.compterArray.length == length){
		alert("grt u have completed");
		Game.level++;
		alert("let start another Level");
		Game.compterArray=[];
		Game.playerArray=[];
		intialMoves();
	}
	else if( Game.playerArray[length-1] == Game.compterArray[length-1]){
		alert("Go On");
	}else{
		alert("wrong move");
		Game.playerArray=[];
	}
}