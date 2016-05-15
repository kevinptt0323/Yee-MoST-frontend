import React from 'react';
import { Paper } from 'material-ui';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
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
      </div>
    );
  }
}

export default Login;

