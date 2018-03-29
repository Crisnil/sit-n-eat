import React from 'react'
import {connect} from 'dva'
import {
  Row, Col, Alert
} from 'antd'


class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Alert message="Hi! You're at Test Page" type="success" />
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state){
  return {

  }
}
export default connect(mapStateToProps)(Test);
