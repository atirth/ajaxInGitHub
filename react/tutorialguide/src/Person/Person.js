import React from 'react';

const Person = (props) =>{
	return <div>
		<h1>Hello World</h1>
		<input onChange = {props.onchanged} type='text' />
		<h1>{props.value}</h1>
	</div>
}

export default Person;
