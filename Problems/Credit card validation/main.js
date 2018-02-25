document.getElementsByClassName("cardno")[0].addEventListener("keyup",function(event){
	console.log(event.target.value);
	str = event.target.value;
	if(str.length == 1){
		updateCardonSideBar(str);
	}
	
	//event.target.getAttributeNode("value").value = event.target.value;
});

function updateCardonSideBar(cardFind){
	if(cardFind == 4){
		document.getElementsByClassName("checkbox")[0].innerHTML = "Visa"
	}else if( cardFind == 5){
		document.getElementsByClassName("checkbox")[0].innerHTML = "Mastercard"
	}else if( cardFind == 3){
		document.getElementsByClassName("checkbox")[0].innerHTML = "American Express"
	}else{
		document.getElementsByClassName("checkbox")[0].innerHTML = "?"
	}
}