import React, { Component } from 'react';

import { PhoneView } from "./view";

export class Phone extends Component {
  render() {
    return (
      <PhoneView place={this.props.place} />
    );
  }
}