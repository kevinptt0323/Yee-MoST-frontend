import React from 'react';
import request from 'superagent';
import superagent_prefix from 'superagent-prefix';
import Chart from '../components/Chart';


const prefix = superagent_prefix('http://cswwwdev.cs.nctu.edu.tw:7122');

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
    this.loadData();
  }
  loadData() {
    const { getToken, params: { filename } } = this.props;
    request.get(`/api/data/${filename}/raw`)
      .use(prefix)
      .set('Authorization', `Bearer ${getToken()}`)
      .end((err, res) => {
        if( err ) {
          console.error(res);
          console.error(err);
          if( res.status == 401 || res.status == 400) {
            this.props.login();
          } else if( res.status == 404 ) {
          }
        } else {
          this.setState({ data: res.text });
        }
      });
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
        <Chart title={this.props.params.filename} data={this.state.data} />
      </div>
    );
  }
}

export default Show;
