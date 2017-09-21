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


class ExceptAl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      except: null,
      price: null,
      alcohol: null,
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
    } else if (this.state.alcohol === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>เฉพาะเบียร์</h3>
        <Price callback={(val) => this.callback('alcohol', val)}  key="alcohol" />
      </Col>
    } else if (this.state.except === null) {
      shown = <Col md={10} mdOffset={1}>
        <h3>คนที่ไม่กินเบียร์</h3>
        <Person callback={(val) => this.callback('except', val)} />
      </Col>
    } else {
      let noAl = Math.ceil( (this.state.price - this.state.alcohol) / this.state.person);
      let al = Math.ceil( this.state.alcohol / (this.state.person - this.state.except) );

      shown = <Col md={10} mdOffset={1}>
        <h3>มีทั้งหมด {this.state.person} คน</h3>
        <h3>ค่าอาหาร {this.state.price} บาท</h3>
        <h3>ค่าเครื่องดื่ม {this.state.alcohol} บาท</h3>
        <h3>คนที่ไม่กิน {this.state.except} คน</h3>
        <h2>คนกินโค้ก คนละ {noAl} บาท</h2>
        <h2>คนกินเบียร์ คนละ {noAl + al} บาท</h2>
      </Col>
    }
    return (
    <Row>{shown}</Row>
    );
  }
}

ExceptAl.propTypes = propTypes;

export default ExceptAl;
