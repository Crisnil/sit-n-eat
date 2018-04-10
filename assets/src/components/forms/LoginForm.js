import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import { Alert } from 'antd';


function LoginForm({login,auth,dispatch,form}) {

  const { getFieldDecorator } = form;

  let  handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {

        dispatch({
          type:'auth/login',
          loginstate:values

        });

      }
    });
  };




  return (
    <div >
      <div style={{
        textAlign:'center'
      }}>
        <div style={{
          width:400,
          marginLeft:'auto',
          marginRight:'auto'
        }}>

          <br/>
          <br/>
          <Form  className="login-form"
                 onSubmit={handleSubmit}
          >
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your Username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"
                />
              )}
            </FormItem>
            {/*{auth.isWrongCredentials ?*/}
              {/*<Alert*/}
                {/*message="Error"*/}
                {/*description="Wrong username and password"*/}
                {/*type="error"*/}
                {/*showIcon*/}
              {/*/>:*/}
              {/*null*/}
            {/*}*/}
            <FormItem>
              <br/>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>

          <br/>
        </div>

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {login:state.login,
    auth:state.auth
  };
}




export default connect(mapStateToProps)(Form.create({
  onFieldsChange(props, changedFields) {

    let {dispatch} = props;

    dispatch({
      type:'login/setField',
      payload:changedFields
    })
  },
  mapPropsToFields(props) {

  },

})(LoginForm));
