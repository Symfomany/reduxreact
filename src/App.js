import React, { Component } from "react";
import { routes } from "./routes";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { VelocityTransitionGroup } from "velocity-react";
import { withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewComponent: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showNewComponent: !this.state.showNewComponent
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/messages">Messages</Link>
              </li>
            </ul>
            <button onClick={this.toggle}>Changer etat</button>
            <VelocityTransitionGroup
              enter={{ animation: "slideDown" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.showNewComponent ? (
                undefined
              ) : (
                <div>INITIAL COMPONENT</div>
              )}
              {this.state.showNewComponent ? (
                <div>NEW COMPONENT</div>
              ) : (
                undefined
              )}
            </VelocityTransitionGroup>

            {routes.map((route, i) => (
              <Route
                path={route.path}
                key={i}
                exact={true}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
