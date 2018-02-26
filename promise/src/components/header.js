import React from 'react';
import logo from './salad.svg';

export const Header = ({children}) => {
	return(
		<header className="header">
			<img src={logo} alt="logo, salad"/>
			<h1>{children}</h1>
		</header>
	)
}