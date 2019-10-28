// eslint-disable-next-line no-unused-vars
import React from 'react';

const ValidationComponent = (props) => {
	return (
		<p>
			Your tekst is
			{props.value >= 5
				? 'long enough!'
				: 'too short! It should be at least 5 characters long'}
		</p>
	);
};

export default ValidationComponent;
