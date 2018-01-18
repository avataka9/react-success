import React, { Component } from 'react';

import { HeaderSaleView } from "./view";

export class HeaderSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: ''
    };
  }

  componentWillMount() {
    this.setCurrentMonth();
  };

  setCurrentMonth() {
    let array = ["январе","феврале","марте","апреле","мае","июне","июле","августе","сентябре","октябре","ноябре","декабре"];
    let date = new Date().getMonth();
    this.setState({month: array[date]});
  };

  render() {
    return (
      <HeaderSaleView month={this.state.month} />
    );
  }
}