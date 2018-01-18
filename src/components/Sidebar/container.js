import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SidebarView } from "./view";

export class _Sidebar extends Component {
  render() {
    return (
      <SidebarView isOpen={this.props.isOpen} />
    );
  }
}

export const Sidebar = connect(
  state => ({
    isOpen: state.menu.isOpen
  })
)(_Sidebar);