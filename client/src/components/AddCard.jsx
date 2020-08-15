import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class AddCard extends Component {
	render() {
		console.log(this.props);
		return (
			<StripeCheckout
				name='Shifty'
				description='Add a new credit card'
				token={(token) => this.props.handleToken(token, this.props.cards)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				{' '}
				<button className='btn'>Add Card</button>
			</StripeCheckout>
		);
	}
}

const mapStateToProps = ({ cards }) => {
	return { cards };
};

export default connect(mapStateToProps, actions)(AddCard);
