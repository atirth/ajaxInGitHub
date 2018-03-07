/*document.getElementsByClassName("cardno")[0].addEventListener("keyup",function(event){
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
}*/
document.getElementsByClassName("form-control")[0].addEventListener("keyup",function(event){
	console.log(event.target.value);
	var str = event.target.value,
	length = str.length;
	if(length == 0){
		resetCardDetails();
	}
	else{
		updateCardonSideBar(str,length);
	}
	
	//event.target.getAttributeNode("value").value = event.target.value;
});
function resetCardDetails(){
	document.getElementsByClassName("input-group-addon")[0].innerHTML = "";
}

function updateCardonSideBar(str,length){
	var cardFind =str[0],
	containerbtn = document.getElementsByClassName("input-group-addon")[0];

	if(cardFind == 4){
		containerbtn.innerHTML = "Visa";
		if(length >= 13 && length <= 16){
			containerbtn.style.backgroundColor = "#ADFF2F";
		}else{
			containerbtn.style.backgroundColor = "#eee";
		}
	}else if( cardFind == 5){
		containerbtn.innerHTML = "Mastercard";
		if(length == 16){
			containerbtn.style.backgroundColor = "#ADFF2F";
		}else{
			containerbtn.style.backgroundColor = "#eee";
		}
	}else if( cardFind == 3){
		if(str[1]==4 || str[1] ==7){
			containerbtn.innerHTML = "American Express";	
		}else{
			containerbtn.innerHTML = "?";
		}
		if(length == 15){
			containerbtn.style.backgroundColor = "#ADFF2F";
		}else{
			containerbtn.style.backgroundColor = "#eee";
		}
	}else{
			containerbtn.innerHTML = "?";
			containerbtn.style.backgroundColor = "#eee";
		}
}
