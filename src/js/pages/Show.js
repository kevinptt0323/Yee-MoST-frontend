import React from 'react';
import request from 'superagent';
import superagent_prefix from 'superagent-prefix';
import Chart from '../components/Chart';

const data = "1462331199435,0.44976807,5.4415894,9.607834\n1462331199445,-0.7503357,5.7132874,10.550278\n1462331199455,0.11538696,5.7304688,8.488678\n1462331199465,0.7520294,5.696213,6.8355713\n1462331199466,1.2172699,5.6743774,5.4481964\n1462331199484,1.996048,5.520935,5.068039\n1462331199494,2.7491302,5.642975,5.7339783\n1462331199504,3.0954285,5.792755,6.4673615\n1462331199505,3.1147156,5.8415985,6.996231\n1462331199513,3.0406342,5.8579407,7.807434\n1462331199523,2.708664,5.6942444,9.017563\n1462331199533,2.196701,5.257309,9.431564";

const prefix = superagent_prefix('http://cswwwdev.cs.nctu.edu.tw:7122');

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data };
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
          if( res.status == 401 ) {
            this.props.login();
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
        <Chart title="XD" data={this.state.data} />
      </div>
    );
  }
}

export default Show;
