import React, { Component } from 'react';
import logo from './logo.svg';
import CSVReader from "react-csv-reader";
import _ from 'lodash';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

let setData = []
Charts(FusionCharts);

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data:''
    }
  }

  handleForce = csvdata => {

    this.setState({data:csvdata})
    this.state.data.map((item,index)=>{
      item.slice(1).map((series) => {
        setData[item[0]] = item
      })
    })

    const ser1 = setData['SERIES1']
    const ser2 = setData['SERIES2']
    const ser3 = setData['SERIES3']
    const ser4 = setData['SERIES4']

    const ser1res = ser1.shift()
    const ser2res = ser2.shift()
    const ser3res = ser3.shift()
    const ser4res = ser4.shift()
    this.setState({ser1,ser2,ser3,ser4})

    let ser1Store = [];
    let ser2Store = [];
    let ser3Store = []
    let ser4Store = []
    let splitval,splitval2,splitval3,splitval4;

    this.state.ser1.map((item)=>{
      splitval = _.split(item,'|')
      ser1Store.push({
        'label':splitval[0],
        'value':parseInt(splitval[1])
      })
    })
    this.setState({ser1Store})

    this.state.ser2.map((item)=>{
      splitval2 = _.split(item,'|')
      ser2Store.push({
        'label':splitval2[0],
        'value':parseInt(splitval2[1])
      })
    })
    this.setState({ser2Store})

    this.state.ser3.map((item)=>{
      splitval3 = _.split(item,'|')
      ser3Store.push({
        'label':splitval3[0],
        'value':parseInt(splitval3[1])
      })
    })
    this.setState({ser3Store})

    this.state.ser4.map((item)=>{
      splitval4 = _.split(item,'|')
      ser4Store.push({
        'label':splitval4[0],
        'value':parseInt(splitval4[1])
      })
    })
    this.setState({ser4Store})
  };


  render() {
    /*Sereies 1*/
    const myDataSource = {
      chart: {
        caption: 'Fission Lab Line Chart',
        subCaption: 'Series1',
      },
      data:this.state.ser1Store
    }
    const chartConfigs = {
      type: 'line',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource,
    };
    /*Sereies 2*/
    const myDataSource1 = {
      chart: {
        caption: 'Fission Lab Line Chart',
        subCaption: 'Series 2',
      },
      data:this.state.ser2Store
    }
    const chartConfigs1 = {
      type: 'line',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource1,
    };
    /*Sereies 3*/
    const myDataSource2 = {
      chart: {
        caption: 'Fission Lab Line Chart',
        subCaption: 'Series 3',
      },
      data:this.state.ser3Store
    }
    const chartConfigs2 = {
      type: 'line',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource2,
    };
    /*Sereies 4*/
    const myDataSource3 = {
      chart: {
        caption: 'Fission Lab Line Chart',
        subCaption: 'Series 4',
      },
      data:this.state.ser4Store
    }
    const chartConfigs3 = {
      type: 'line',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource3,
    };
    return (
      <div className="App">
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV File"
        onFileLoaded={this.handleForce}
      />
      {this.state.ser1Store!=undefined ?
          <div>
            <ReactFC {...chartConfigs} />
            <ReactFC {...chartConfigs1} />
            <ReactFC {...chartConfigs2} />
            <ReactFC {...chartConfigs3} />
          </div>   : null}
      </div>
    );
  }
}

export default App;
