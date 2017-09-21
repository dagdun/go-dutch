import React from "react";
import { Button, FormControl, Col, Row } from "react-bootstrap";


const propTypes = {
  /*
  string: React.PropTypes.array,
  func: React.PropTypes.func,
  object: React.PropTypes.object,
  bool: React.PropTypes.bool,
  */
};


class Price extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    }
  }

  cal() {
    this.props.callback(this.price.value);
  }

  render() {
    return (<Row>
      <Col md={12}>
        <FormControl
          type="number"
          style={{textAlign: "center"}}
          inputRef={(e) => this.price = e}
        />
        <Button
          block
          onClick={() => this.cal()}
        >OK</Button>
      </Col>
    </Row>);
  }
}

Price.propTypes = propTypes;

export default Price;
