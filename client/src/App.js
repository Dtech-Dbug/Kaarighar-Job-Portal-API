import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Users from './components/users/Users';
import Home from './components/Home';
function App() {
	return (
		<div className="h-screen w-sreen flex overflow-hidden">
			<Router>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/users" component={Users} />
					<Route path="/home" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
