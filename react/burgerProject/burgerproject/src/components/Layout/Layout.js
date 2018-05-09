import React from 'react';
import Aux from "../../hoc/auxilary";

const Layout = (props) => {
	return(
		<Aux>
			<div>sidebar nav bar </div>
			<main>{props.children}</main>
		</Aux>
		);
		
}

export default Layout;