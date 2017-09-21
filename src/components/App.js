import React from "react";
import { Navbar } from "react-bootstrap";
import { Route, Link } from "react-router-dom";

import Menu from "./Menu";
import BasicAll from "./BasicAll";
import ExceptAlcohol from "./ExceptAlcohol";
import ServiceCharge from "./ServiceCharge";
import FixCost from "./FixCost";

const propTypes = {
  /*
  string: React.PropTypes.array,
  func: React.PropTypes.func,
  object: React.PropTypes.object,
  bool: React.PropTypes.bool,
  */
};


class App extends React.Component {

  render() {
    return (<div style={{background: "#fff"}}>
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <div>
      <Route path="/home" component={Menu} />
      <Route path="/all" component={BasicAll} />
      <Route path="/except-alcohol" component={ExceptAlcohol} />
      <Route path="/service-charge" component={ServiceCharge} />
      <Route path="/fix-cost" component={FixCost} />
    </div>
    </div>);
  }
}

App.propTypes = propTypes;

export default App;
