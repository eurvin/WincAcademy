// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
	state = {
		text: 'Go home!',
	};

	inputTextChange = (event) => {
		let newText = Object.assign({}, this.state);
		newText = event.target.value;
		this.setState({ text: newText });
	};

	deleteCharHandler = (index) => {
		let word = [...this.state.text]
			.filter((letter, key) => key !== index)
			.reduce((a, b) => a + b);

		this.setState({ text: word });
	};

	render() {
		const chars = (
			<div>
				{[...this.state.text].map((letter, index) => {
					return (
						<CharComponent
							char={letter}
							key={index}
							click={() => this.deleteCharHandler(index)}
						/>
					);
				})}
			</div>
		);

		const validation = (
			<div>
				<ValidationComponent value={this.state.text.length} />
			</div>
		);

		return (
			<div className='App'>
				<ol>
					<li>
						Create an input field (in App component) with a change listener
						which outputs the length of the entered text below it (e.g. in a
						paragraph).
					</li>
					<li>
						Create a new component (=> ValidationComponent) which receives the
						text length as a prop
					</li>
					<li>
						Inside the ValidationComponent, either output "Text too short" or
						"Text long enough" depending on the text length (e.g. take 5 as a
						minimum length)
					</li>
					<li>
						Create another component (=> CharComponent) and style it as an
						inline box (=> display: inline-block, padding: 16px, text-align:
						center, margin: 16px, border: 1px solid black).
					</li>
					<li>
						Render a list of CharComponents where each CharComponent receives a
						different letter of the entered text (in the initial input field) as
						a prop.
					</li>
					<li>
						When you click a CharComponent, it should be removed from the
						entered text.
					</li>
				</ol>
				<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
				<div>
					<input
						type='text'
						value={this.state.text}
						onChange={(event) => this.inputTextChange(event)}></input>
					{chars}
					{validation}
				</div>
			</div>
		);
	}
}

export default App;
