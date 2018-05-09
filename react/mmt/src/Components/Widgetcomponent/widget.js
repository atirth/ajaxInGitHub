import React, { Component } from 'react';
import SelectCityComponent from "./Widget/SelectCityComponent.js"

class Widget extends Component{
	state ={
		
	}
	render(){
		return (
			<div>
			<h1>Search Widget</h1>
			<SelectCityComponent /*airport={}*//>
			</div>
			)
	}
}
export default Widget