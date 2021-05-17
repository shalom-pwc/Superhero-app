import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-6 '>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search your favourite Hero...'
			></input>
		</div>
	);
};

export default SearchBox;
