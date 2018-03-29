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
          <div>Go to <Link to="/">Go back to home</Link></div>
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
