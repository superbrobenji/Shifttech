import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import App from './components/App';
import reducers from './reducers';

const options = {
	position: positions.BOTTOM_CENTER,
	timeout: 5000,
	offset: '30px',
	transition: transitions.SCALE,
};

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<AlertProvider template={AlertTemplate} {...options}>
		<Provider store={store}>
			<App />
		</Provider>
	</AlertProvider>,
	document.querySelector('#root'),
);
