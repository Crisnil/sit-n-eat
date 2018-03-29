import React from 'react'
import {connect} from 'dva'
import {
  Row, Col, Alert
} from 'antd'
import  { Link } from 'dva/router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Alert message={
            <div>
              <div>You are at home</div>
              <div>Go to <Link to="/test"> Test Page </Link></div>
            </div>
          } type="info" />

        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state){
  return {

  }
}
export default connect(mapStateToProps)(Home);
