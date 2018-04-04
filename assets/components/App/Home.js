import React from 'react'
import {connect} from 'dva'
import {
  Row, Col, Alert,Input,Layout,Divider,Card,Button
} from 'antd'
import  { Link } from 'dva/router'
import { Parallax,Background  } from 'react-parallax'
const Search = Input.Search;


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  onTEst = () =>{
    this.props.dispatch({
      type:"auth/login",
      payload:{
        email:"cacuyado@gmail.com",
        password:"1234567890"
      }
    })
  }

  render() {
    const image1 = "http://www.sitneat.in/App_Themes/105656_1.jpg";
    const insideStyles = { position: 'absolute', top: '50%', left: '20%',width:'500px'};

    return (
      <Row>
      <Button onClick={this.onTEst} > Test gwapo ko</Button>
        <Col span={24}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Layout style={{
          width:"100%",
          marginLeft:'auto',
          marginRight:'auto',
        }}>
            <Parallax bgImage={image1}
              strength={500}>
              <div style={{height: 500}}>
                <div style={insideStyles}>
                      <Search placeholder="input search text" enterButton="Search" size="large" />
                </div>
              </div>
            </Parallax>
        </Layout>

          <Divider style={{background:'#fff'}}/>
            <Row>
                <Col span={8}>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                </Col>
                <Col span={8}>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                </Col>
                <Col span={8}>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                </Col>
            </Row>
        </div>
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
