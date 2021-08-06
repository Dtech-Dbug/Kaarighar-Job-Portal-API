import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Users from "./components/users/Users";
import Home from "./components/Home";
import Category from "./components/category/Category";
import EditCategory from "./components/category/editCategory";
function App() {
	return (
		<div className="h-screen w-sreen flex overflow-hidden">
			<Router>
				<Route path="/" exact component={Dashboard} />
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<Route path="/users" exact component={Users} />
				<Route path="/home" exact component={Home} />
				<Route path="/category" exact component={Category} />
				<Route path="/category/:slug" exact component={EditCategory} />
			</Router>
		</div>
	);
}

export default App;
