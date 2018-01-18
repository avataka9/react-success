import React, { Component } from 'react';

import { Error404View } from "./view";

export class Error404 extends Component {
  render() {
    return (
      <Error404View location={this.props.location}/>
    );
  }
}