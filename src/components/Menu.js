import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const propTypes = {
  /*
  string: React.PropTypes.array,
  func: React.PropTypes.func,
  object: React.PropTypes.object,
  bool: React.PropTypes.bool,
  */
};


class Menu extends React.Component {
  

  render() {
    return (<ListGroup>
      <ListGroupItem onClick={() => this.props.history.push('all')}>หารเท่า</ListGroupItem>
      <ListGroupItem onClick={() => this.props.history.push('except-alcohol')}>มีคนไม่กินเหล้า</ListGroupItem>
      <ListGroupItem onClick={() => this.props.history.push('fix-cost')}>บางคนเหมาจ่าย</ListGroupItem>
    </ListGroup>);
  }
}

Menu.propTypes = propTypes;

export default Menu;
