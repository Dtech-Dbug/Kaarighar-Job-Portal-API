import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import Routes from './routing/Routes';
import store from './store';
import setAuthToken from './utils/setAuthToken';

function App() {
	useEffect(() => {
		// check for token in LS
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		store.dispatch(loadUser());

		// log user out from all tabs if they log out in one tab
		window.addEventListener('storage', () => {
			if (!localStorage.token) store.dispatch({ type: LOGOUT });
		});
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route component={Routes} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
