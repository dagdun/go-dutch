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


class Person extends React.Component {
  
  render() {
    const person = [];

    for (let i=1; i<=100; i++) {
      person.push(<ListGroupItem onClick={() => this.props.callback(i)}>{i} คน</ListGroupItem>)
    }

    return (<ListGroup>
      {person}
    </ListGroup>);
  }
}

Person.propTypes = propTypes;

export default Person;
