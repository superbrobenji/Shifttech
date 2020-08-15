import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCard from './AddCard';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href='/auth/google'>Login with Google</a>
					</li>
				);
			default:
				return [
					<li key='1'>
						<AddCard />
					</li>,
					<li key='2'>
						<a href='/api/logout'>Logout</a>
					</li>,
				];
		}
	}

	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<Link
						to={this.props.auth ? '/cards' : '/'}
						className='left brand-logo'
					>
						Shifty
					</Link>
					<ul className='right'>{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}
const mapStateToProps = ({ auth }) => {
	return { auth };
};
export default connect(mapStateToProps, null)(Header);
