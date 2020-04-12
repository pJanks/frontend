import React, { Component } from 'react';
import mockData from '../mockData/mockData';
import ActivityContext from '../context/ActivityContext';

export default class ActivityProvider extends Component {
  state = {
    mockData
  };

  render() {
    return (
      <ActivityContext.Provider value={this.state.mockData}>
        {this.props.children}
      </ActivityContext.Provider>
    )
  }
}