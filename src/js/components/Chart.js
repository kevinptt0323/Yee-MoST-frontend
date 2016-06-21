import React from 'react';
import Highcharts from 'react-highcharts';
import HighchartsData from 'highcharts-data';

const chart = Highcharts.Highcharts;
chart.setOptions({
  global: {
    timezoneOffset: -8 * 60
  }
});
HighchartsData(chart);

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const config = {
      title: {
        text: this.props.title,
      },
      chart: {
        zoomType: 'x'
      },
      data: {
        csv: ",x,y,z\n" + this.props.data
      },
    };
    return (
      <Highcharts style={{width: 'calc(100% - 64px)'}} config={config} ref="chart" />
    );
  }
}

export default Chart;
