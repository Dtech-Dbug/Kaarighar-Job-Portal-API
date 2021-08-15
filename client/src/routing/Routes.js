import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";
import Users from "../components/users/Users";
import Home from "../components/Home";
import Category from "../components/category/Category";
import ViewProfile from "../components/users/ViewProfile";
import Jobs from "../components/job/jobs";
import ViewJob from "../components/job/ViewJob";
// import EditCategory from "../components/category/EditCategory";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/users" component={Users} />
      <PrivateRoute exact path="/user/:id" component={ViewProfile} />
      <PrivateRoute exact path="/category" component={Category} />
      <PrivateRoute exact path="/jobs" component={Jobs} />
      <PrivateRoute exact path="/job/:id" component={ViewJob} />
      {/* <PrivateRoute exact path="/category/:slug" component={EditCategory} /> */}
    </Switch>
  );
};

export default Routes;
