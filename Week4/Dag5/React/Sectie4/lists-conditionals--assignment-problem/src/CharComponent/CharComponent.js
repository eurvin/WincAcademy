import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
	return (
		<div className='chars' onClick={props.click}>
			{props.char}
		</div>
	);
};

export default CharComponent;
