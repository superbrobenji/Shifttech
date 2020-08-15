import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Countries from './Countries';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchCountries();
		this.props.fetchBannedCountries();
	}

	render() {
		return (
			<div className='container'>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path='/' component={Landing} />
						<Route exact path='/cards' component={Dashboard} />
						<Route exact path='/blacklist' component={Countries} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
