import React from "react";
import { BrowserRouter as Router, Route } from "rect-router-dom";
import Home from "./Home";
import Puppies from "./Puppies";

const Routes = () => {
  return (
    // history alows to go back in browser
    <Router history={history}>
      <div>
        <nav>
          <div className="navItem">
            <Link to="/">Welcome!</Link>
          </div>
          <div className="navItem">
            <Link to="/puppies">Puppies</Link>
          </div>
          <div className="navItem">
            <Link to="/users">Users</Link>
          </div>
        </nav>
        <Route path="/" component={Home} />
        <Route path="/puppies" component={Puppies} />
        <Route path="/puppies/:puppyId" component={SinglePuppy} />
        <Route path="/users" component={Users} />
        <Route path="/users/:userId" component={SingleUser} />
      </div>
    </Router>
  );
};
export default Routes;
