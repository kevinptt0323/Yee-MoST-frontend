import React from 'react';
import { TextField, RaisedButton } from 'material-ui';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TextField floatingLabelText="Username" /><br />
        <TextField floatingLabelText="Password" /><br />
        <RaisedButton label="Login" primary={true} />
      </div>
    );
  }
}

export default LoginForm;
