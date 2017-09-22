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


class FixCost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      fix_person: null,
      fix_price: null,
      price: null,
    }
  }

  callback(type, val) {
    this.setState({
      [type]: val,
    })
  }

  render() {
    let shown = [];
    if (this.state.person === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>มากันทั้งหมด</h3>
        <Person callback={(val) => this.callback('person', val)} />
      </Col>
    } else if (this.state.price === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>ราคาในบิล</h3>
        <Price callback={(val) => this.callback('price', val)} key="price" />
      </Col>
    } else if (this.state.fix_person === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>คนที่เหมามีกี่คน</h3>
        <Person callback={(val) => this.callback('fix_person', val)} />
      </Col>
    } else if (this.state.fix_price === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>เหมาจ่ายคนละเท่าไหร่</h3>
        <Price callback={(val) => this.callback('fix_price', val)}  key="fix_price" />
      </Col>
    } else {
      let cal = Math.ceil( (this.state.price - this.state.fix_price) / (this.state.person - this.state.fix_person) );

      shown = <Col md={10} mdOffset={1}>
        <h3>มีทั้งหมด {this.state.person} คน</h3>
        <h3>ราคาในบิล {this.state.price} บาท</h3>
        <h3>เหมาจ่ายไป {this.state.fix_person} คน คนละ {this.state.fix_price} บาท</h3>
        <h3>รวม {this.state.fix_price * this.state.fix_person} บาท</h3>
        <h3>ที่เหลือ {this.state.person - this.state.fix_person} คน จ่าย {this.state.price - (this.state.fix_price * this.state.fix_person)} บาท</h3>
        <h2>ที่เหลือ คนละ {cal} บาท</h2>
      </Col>
    }
    return (
    <Row>{shown}</Row>
    );
  }
}

FixCost.propTypes = propTypes;

export default FixCost;
