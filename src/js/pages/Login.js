import React from 'react';
import { Paper } from 'material-ui';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { router } = this.context;
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
          <LoginForm setToken={this.props.setToken} onLogin={() => { router.push('/files') }}/>
        </Paper>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Login;

