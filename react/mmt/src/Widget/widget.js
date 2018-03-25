import React, { Component } from 'react';
import SelectCityComponent from "./Widget/SelectCityComponent.js"

class Widget extends Component{
	state ={
		[
	{
		"cityName": "New Delhi",
		"airportData": "Indira Gandhi International Airport",
		"countryName": "India",
		"code": "DEL",
		"cityType": "DF"
	},
	{
		"cityName": "Mumbai",
		"airportData": "Chhatrapati Shivaji International Airport",
		"countryName": "India",
		"code": "BOM",
		"cityType": "DF"
	},
	{
		"cityName": "Bangalore",
		"airportData": "Bengaluru International Airport",
		"countryName": "India",
		"code": "BLR",
		"cityType": "DF"
	},
	{
		"cityName": "Goa",
		"airportData": "Dabolim Goa International Airport",
		"countryName": "India",
		"code": "GOI",
		"cityType": "DF"
	},
	{
		"cityName": "Chennai",
		"airportData": "Madras,Chennai International Airport",
		"countryName": "India",
		"code": "MAA",
		"cityType": "DF"
	},
	{
		"cityName": "Kolkata",
		"airportData": "Netaji Subhash Chandra Bose International Airport",
		"countryName": "India",
		"code": "CCU",
		"cityType": "DF"
	},
	{
		"cityName": "Hyderabad",
		"airportData": "Rajiv Gandhi International Airport",
		"countryName": "India",
		"code": "HYD",
		"cityType": "DF"
	},
	{
		"cityName": "Pune",
		"airportData": "Pune Airport",
		"countryName": "India",
		"code": "PNQ",
		"cityType": "DF"
	},
	{
		"cityName": "Ahmedabad",
		"airportData": "Sardar Vallabhbhai Patel International Airport",
		"countryName": "India",
		"code": "AMD",
		"cityType": "DF"
	},
	{
		"cityName": "Cochin",
		"airportData": "Cochin International Airport Limited",
		"countryName": "India",
		"code": "COK",
		"cityType": "DF"
	},
	{
		"cityName": "Jaipur",
		"airportData": "Jaipur Airport",
		"countryName": "India",
		"code": "JAI",
		"cityType": "DF"
	},
	{
		"cityName": "Dubai",
		"airportData": "Dubai International Airport",
		"countryName": "UAE",
		"code": "DXB",
		"cityType": "IF"
	},
	{
		"cityName": "Singapore",
		"airportData": "Changi Airport",
		"countryName": "Singapore",
		"code": "SIN",
		"cityType": "IF"
	},
	{
		"cityName": "Bangkok",
		"airportData": "Suvarnabhumi Airport",
		"countryName": "Thailand",
		"code": "BKK",
		"cityType": "IF"
	},
	{
		"cityName": "New York",
		"airportData": "All Airports",
		"countryName": "US",
		"code": "NYC",
		"cityType": "IF"
	},
	{
		"cityName": "Kuala Lumpur",
		"airportData": "Kuala Lumpur International Airport",
		"countryName": "Malaysia",
		"code": "KUL",
		"cityType": "IF"
	},
	{
		"cityName": "London",
		"airportData": "All Airports",
		"countryName": "UK",
		"code": "LON",
		"cityType": "IF"
	},
	{
		"cityName": "Hong Kong",
		"airportData": "Hong Kong International Airport",
		"countryName": "China",
		"code": "HKG",
		"cityType": "IF"
	},
	{
		"cityName": "Doha",
		"airportData": "Hamad International Airport",
		"countryName": "Qatar",
		"code": "DOH",
		"cityType": "IF"
	},
	{
		"cityName": "Colombo",
		"airportData": "Bandaranaike International Airport",
		"countryName": "Sri Lanka",
		"code": "CMB",
		"cityType": "IF"
	}
]
	}
	render(){
		return (
			<div>
			<h1>Search Widget</h1>
			<SelectCityComponent airport={this.state.}/>
			</div>
			)
	}
}
export default Widget