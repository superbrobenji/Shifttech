import React, { Component } from 'react';
import { connect } from 'react-redux';

class Countries extends Component {
	renderCountries() {
		return this.props.countries.allCountries.map((country) => {
			return (
				<div key={country} className='card grey lighten-3'>
					<div className='card-content '>
						<span className='card-title'>{country}</span>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderCountries()}</div>;
	}
}

const mapStateToProps = ({ countries }) => {
	return {
		countries,
	};
};

export default connect(mapStateToProps, null)(Countries);
