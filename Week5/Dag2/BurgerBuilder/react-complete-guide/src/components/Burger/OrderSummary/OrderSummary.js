import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	// could be a functional component
	// componentWillUpdate() {
	// 	console.log('[Ordersummary] WillUpdate');
	// }

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			(igKey) => {
				return (
					<li key={igKey}>
						<span style={{ textTransform: 'capitalize' }}>{igKey}</span>{' '}
						{this.props.ingredients[igKey]}
					</li>
				);
			}
		);
		return (
			<React.Fragment>
				<h3>Your Order</h3>
				<p>A deicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to checkout?</p>
				<Button btnType='Danger' clicked={this.props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button btnType='Success' clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</React.Fragment>
		);
	}
}

export default OrderSummary;
