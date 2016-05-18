import React from 'react';
import Highcharts from 'react-highcharts';
import HighchartsData from 'highcharts-data';
HighchartsData(Highcharts.Highcharts)

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
      <Highcharts config={config} />
    );
  }
}

export default Chart;
