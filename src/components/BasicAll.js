import React from "react";
import { Col, Row } from "react-bootstrap";
import Person from "./Person";
import Price from "./Price";

const propTypes = {
  /*
  string: React.PropTypes.array,
  func: React.PropTypes.func,
  object: React.PropTypes.object,
  bool: React.PropTypes.bool,
  */
};


class BasicAll extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      price: null,
    }
  }

  callback(type, val) {
    if (type === 'person') {
      this.setState({
        person: val,
      })
    }

    if (type === 'price') {
      this.setState({
        price: val,
      })
    }

  }

  render() {
    let shown = [];
    if (this.state.person === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>ทั้งหมดกี่คน</h3>
        <Person callback={(val) => this.callback('person', val)} />
      </Col>
    } else if (this.state.price === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>ทั้งหมดกี่บาท</h3>
        <Price callback={(val) => this.callback('price', val)} />
      </Col>
    } else {
      let cal = Math.ceil(this.state.price/this.state.person);
      shown = <Col md={10} mdOffset={1}>
        <h3>มีทั้งหมด {this.state.person} คน</h3>
        <h3>ค่าอาหาร {this.state.price} บาท</h3>
        <h2>คนละ {cal} บาท</h2>
      </Col>
    }
    return (
    <Row>{shown}</Row>
    );
  }
}

BasicAll.propTypes = propTypes;

export default BasicAll;
