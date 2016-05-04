import React from 'react';
import update from 'react-addons-update';
import { Avatar, TextField, RaisedButton } from 'material-ui';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      inputData: { },
      errorText: { }
    };
  }
  _checkEmpty(key, e, onFulfilled, onRejected) {
    let errorText2 = {}, inputData2 = {};

    if( e ) {
      inputData2[key] = e.target.value;
      inputData2 = update(this.state.inputData, {$merge: inputData2});
    } else {
      inputData2 = this.state.inputData;
    }

    errorText2[key] = inputData2[key]  ? '' : '不可為空白',
    errorText2 = update(this.state.errorText, {$merge: errorText2});

    this.setState({
      errorText: errorText2,
      inputData: inputData2,
      noEmptyInput: !!inputData2.username && !!inputData2.password
    }, () => {
      if( this.state.noEmptyInput ) {
        if (typeof onFulfilled === 'function') {
          onFulfilled();
        }
      } else {
        if (typeof onRejected === 'function') {
          onRejected();
        }
      }
    });
  }
  login() {
    let check = (field) =>
      new Promise((resolve, reject) => {
        this._checkEmpty(field, null, resolve, reject);
      })
    ;
    check('username')
      .then(() => check('password'), () => check('password'))
      .then(() => {
        console.log("done");
      }, () => {
        console.log("failed");
      })
      ;
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
          errorText={this.state.errorText.username||""}
          onChange={this._checkEmpty.bind(this, 'username')}
        />
        <TextField
          floatingLabelText="Password"
          type="password"
          style={styles}
          errorText={this.state.errorText.password||""}
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
