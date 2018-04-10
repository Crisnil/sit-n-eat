import React from 'react';
import { connect } from 'dva';
import { Modal, Button } from 'antd';
import LoginForm from "../forms/LoginForm";

class Loginwrapper extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>

        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <LoginForm />

        </Modal>
      </div>
    );
  }
}

export default Loginwrapper;
