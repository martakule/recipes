import React from 'react';

export const Details = ({view, data}) => {
	if(view===true){
		return(
			<div className="details">
				<img src={data.image} alt={data.label}/>
				<br/>
				<a href={data.url} target="_blank">Go to recipe</a>
			</div>		
		);
	} else {return null}
}