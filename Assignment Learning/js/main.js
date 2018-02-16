
document.addEventListener('DOMContentLoaded', funref, true);
document.addEventListener('load', funref1, true);

	function funref(){
		console.log("DOMContentLoaded");
	}
	function funref1(){
		console.log("Load");
	}


$(document).ready(function(){

	/*$(".year-select").off('change').change(function(event){
		var value = event.target.value;
		requestTableReport(value);
	});
	$(function(){
		requestTableReport("2012");
	});*/
	/*var requestTableReport = function(value){
		$.ajax({
			url:'json/report.json',
			dataType:'json',
			type:'get',
			cache:true,
			success : function(data){
				var arrayLength = data[value] ? data[value].length : 0 ,
				doc = $(".table-data tbody"),str;
				str += "<tr><th>months</th><th>task</th><th>status</th></tr>";
				for(  var i =0 ;i < arrayLength; i++){ 
					str += "<tr><td>" + data[value][i].month +"</td>";
					str += "<td>" + data[value][i].task +"</td>";
					str += "<td>" + data[value][i].status +"</td></tr>";
				}
				if(arrayLength !== 0){
					doc.html(str);
				}
				else{
					doc.html("empty");
				}
			},
			error : function(){
				console.log(error);
			}
		});
	}*/
	


	/*var car1 = new Promise(function(resolve,reject){
		setTimeout(reject,1000,'car1'); 
	});
	var car2 = new Promise(function(resolve,reject){
		setTimeout(resolve,2000,'car2'); 
	});
	var car3 = new Promise(function(resolve,reject){
		setTimeout(resolve,2000,'car3'); 
	});

	function updatePromiseArray(arrayOfPromise,key){
		var length= arrayOfPromise.length;
		for( var i = 0; i < length ; i++){
			if(arrayOfPromise[i] == key){
				arrayOfPromise.splice(i,1);
				return arrayOfPromise;
			}
		}
	}

	var arrayOfPromise = [car1,car2,car3];
	Promise.properRace = function(promises){
		if(promises.length<1){
			return Promise.reject("cann't do racing");
		}
		return Promise.race(promises);
	}
	Promise.properRace(arrayOfPromise)
	.then(function resolve(value){
		console.log("race won By" + value);
	},function reject(err){
		console.log(err + " Race se bhar due to crash");
		var arrayofPromise = updatePromiseArray(arrayOfPromise,err);
		return Promise.properRace(arrayOfPromise);
	}).then(function(){

	})
	.catch(function error(err){
		console.log("catch block" + err);
	});*/

	//Flatten Array

	/*var arr = ["car0","car1","car2",["car3","car4" ,["car5","car6"],"car7"]];
	var newArray = flatten(arr);
	console.log(newArray);
	function flatten(arr){
	   for (key in arr){
	 	  var result = checkIsArray(arr[key]);
			if(result){
				flatten(arr[key]);	
			}else{
				newArray.push(arr[key]);	
			}
	   }
	   return newArray;
    }
	
	function checkIsArray(arr){
		return arr.constructor.name == "Array";
	}*/

	//inheritence via bind

	function parent(){
		this.name = "parent";
		this.method = function(){
			console.log("name :" + this.name );
		}
	} 
	var p1= new parent();
	//p1.method();
	function child(){
		this.name = "child";
	}
	//var c1 = new child();
	c1= Object.create(parent);
	//var c1ref = child.bind(parent);
	c1.method();
	

});
