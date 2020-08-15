import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';
import { useAlert } from 'react-alert';

const AddCard = (props) => {
	const alert = useAlert();
	useEffect(() => {
		if (props.showAlert.show) {
			alert.show(props.showAlert.error);
		}
	});
	return (
		<StripeCheckout
			name='Shifty'
			description='Add a new credit card'
			token={(token) => props.handleToken(token, props.cards)}
			stripeKey={process.env.REACT_APP_STRIPE_KEY}
		>
			<button className='btn'>Add Card</button>
		</StripeCheckout>
	);
};

const mapStateToProps = ({ cards, showAlert }) => {
	return { cards, showAlert };
};

export default connect(mapStateToProps, actions)(AddCard);
