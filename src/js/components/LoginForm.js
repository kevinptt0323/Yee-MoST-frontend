import React from 'react';
import update from 'react-addons-update';
import { Avatar, TextField, RaisedButton } from 'material-ui';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      inputData: {
        username: ''
      }
    };
  }
  _checkEmpty(key, e) {
    let inputData2 = {};
    inputData2[key] = e.target.value;
    inputData2 = update(this.state.inputData, {$merge: inputData2});
    this.setState({
      inputData: inputData2,
    });
  }
  login() {
    console.log(this.state);
    console.log('login');
  }
  render() {
    const styles = {
      width: 400
    };
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}
      >
        <Avatar size={70} style={{alignSelf: 'center'}}>L</Avatar>
        <TextField
          floatingLabelText="Username"
          style={styles}
          onChange={this._checkEmpty.bind(this, 'username')}
        />
        <TextField
          floatingLabelText="Password"
          type="password"
          style={styles}
          onChange={this._checkEmpty.bind(this, 'password')}
        />
        <div style={{marginTop: 24, display: 'inline-block'}}>
          <RaisedButton label="Login" primary={true} onTouchTap={this.login} />
        </div>
      </div>
    );
  }
}

export default LoginForm;
