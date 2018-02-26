import React from 'react';

export const ErrorMessage = ({error}) => {

	if(error==="network"){
		return(<p className="errorMessage">Sorry, there seems to be a network error.<br/>Try again in a while.</p>)
	}

	else if(error==="input"){
		return(<p className="errorMessage">Sorry, the term you searched didn't return any recipes.<br/>Try another term.</p>)
	}

}