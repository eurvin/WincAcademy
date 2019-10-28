import React from 'react';
import './UserOutput.css';

const userOutput = props => {
	return (
		<div className="OutputBox">
			<p>My username is {props.userName}</p>
			<p>I really love React!</p>
		</div>
	);
};

export default userOutput;
