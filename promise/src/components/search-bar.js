import React from 'react';
import searchIcon from './search.png';

export const SearchBar = ({onInputChange, inputValue, placeholder,initializeSearch}) => {

	const keyPressHandler = e => {
		if (e.keyCode===13) {initializeSearch()}
	}

	return(
		<div className="searchBar">
			<input 
				onChange={onInputChange}
				value={inputValue}
				onKeyDown={keyPressHandler}
			/>
			<button onClick={initializeSearch}><img alt="Search" src={searchIcon}/></button>
		</div>
	);
}
