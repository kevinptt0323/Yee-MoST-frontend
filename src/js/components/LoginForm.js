import React from 'react';
import { Avatar, TextField, RaisedButton } from 'material-ui';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
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
        <TextField floatingLabelText="Username" style={styles} />
        <TextField floatingLabelText="Password" style={styles} />
        <div style={{marginTop: 24, display: 'inline-block'}}>
          <RaisedButton label="Login" primary={true} />
        </div>
      </div>
    );
  }
}

export default LoginForm;
