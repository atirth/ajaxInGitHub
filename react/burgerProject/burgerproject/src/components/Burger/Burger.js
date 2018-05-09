import React from 'react';
import classes from './Burger.css';
import  BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
	let transformedingredient = Object.keys(props.ingredients).map((igkey)=>{
		return [...Array(props.ingredients[igkey])].map((_,key) => {
			return <BurgerIngredients key={igkey + key} type={igkey} />;
		})
	}).reduce((acc,initial) => acc.concat(initial)
	);
	if(transformedingredient.length === 0){
		transformedingredient = <p>Please add Ingredient</p>;
	}
	return(	
	<div className = {classes.Burger}>
		<BurgerIngredients type="bread-top" />
		{transformedingredient}
		<BurgerIngredients type="bread-bottom" />
	</div>
	);
}
export default burger;
