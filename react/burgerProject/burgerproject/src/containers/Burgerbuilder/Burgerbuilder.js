import React, {Component} from 'react';

import Aux from '../../hoc/auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Buildcontrols/BuildControls';

class Burgerbuilder extends Component{
	state ={
		ingredients : {
			meat : 0,
			cheese :0,
			bacon :0,
			salad :0
		}
	}
	render(){
		return (
			<Aux>
			<Burger ingredients= {this.state.ingredients}/>
			<BuildControls />
			</Aux>
			);	
	}

} 

export default Burgerbuilder;
