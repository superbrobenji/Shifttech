import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions';

class CardList extends Component {
	componentDidMount() {
		this.props.fetchCards();
	}
	renderSurveys() {
		return this.props.cards.map((card) => {
			return (
				<div key={card.id} className='card grey lighten-3'>
					<div className='card-content '>
						<span className='card-title'>
							{' '}
							Card Number: **** **** **** {card.last4}
						</span>
						<p>country: {card.country}</p>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

const mapStateToProps = ({ cards }) => {
	return {
		cards,
	};
};

export default connect(mapStateToProps, { fetchCards })(CardList);
