import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
{ label : 'Meat',type :'meat'},
{ label : 'cheese',type :'cheese'},
{ label : 'Meat',type :'meat'},
{ label : 'Meat',type :'meat'}
];

const buildControls = (props) => (
 	<div className={classes.BuildControls}>
 		{controls.map(control => {
 			return <BuildControl label={control.label} key={control.label} /> 
 		}
 		)}
 	</div>
 )

export default buildControls;