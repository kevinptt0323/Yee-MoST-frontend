import React from 'react';
import { Paper } from 'material-ui';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Paper
        zDepth={1}
        style={{
          padding: 24,
          textAlign: 'center',
          display: 'inline-block'
        }}
      >
        <LoginForm />
      </Paper>
    );
  }
}

export default Login;

