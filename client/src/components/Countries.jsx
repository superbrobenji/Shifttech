import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddToBlacklist } from '../actions';

class Countries extends Component {
	renderAvailableCountries() {
		const { blacklistedCountries, allCountries } = this.props.countries;
		let availableCountries = allCountries;
		blacklistedCountries.forEach((bannedCountry) => {
			const index = availableCountries.indexOf(bannedCountry);
			availableCountries.splice(index, 1);
		});

		return availableCountries.map((country) => {
			return (
				<div key={country} className='card grey lighten-3'>
					<div className='card-content '>
						<span className='card-title'>
							{country}
							<div
								className='btn-flat right'
								onClick={() => this.props.AddToBlacklist(country)}
							>
								<i className='material-icons right'>chevron_right</i>
							</div>
						</span>
					</div>
				</div>
			);
		});
	}

	renderBannedCountries() {
		const { blacklistedCountries } = this.props.countries;

		return blacklistedCountries.map((country) => {
			return (
				<div key={country} className='card grey lighten-3'>
					<div className='card-content '>
						<span className='card-title'>
							{country}
							<i className='material-icons right'>delete</i>
						</span>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className='row'>
				<div className='col s6'>
					{' '}
					<h4 className='center'>Available Countries</h4>{' '}
					{this.renderAvailableCountries()}
				</div>
				<div className='col s6'>
					<h4 className='center'>Banned Countries</h4>
					{this.renderBannedCountries()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ countries }) => {
	return {
		countries,
	};
};

export default connect(mapStateToProps, { AddToBlacklist })(Countries);
