import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
//import * as actions from './actionCreators';
import { connect } from 'react-redux';
import { constants } from '../../constants';

import { HeaderHamburgerView } from "./view";

class _HeaderHamburger extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.props.onClick(this.props.isOpen)
  }

  render() {
    return (
      <HeaderHamburgerView text="МЕНЮ" isOpen={this.props.isOpen} onClick={this.toggleMenu}/>
    );
  }
}

/*const mapStateToProps = function(state){
  return {
    isOpen: state.menu.isOpen
  }
};*/

/*const mapDispatchToProps = function (dispatch) {
 return bindActionCreators({
 onClick: actions.onClick,
 }, dispatch)
 };*/

/*const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (isOpen) => {
      dispatch(actions.onClick(isOpen))
    }
  }
};*/

export const HeaderHamburger = connect(
  state => ({
    isOpen: state.menu.isOpen
  }),
  dispatch => ({
    onClick: (bool) => {
      dispatch({ type: constants.TOGGLE_MENU_STATUS, payload: !bool})
    }
  })
)(_HeaderHamburger);








/*class _HeaderHamburger extends Component {
  render() {
    return (
      <HeaderHamburgerView text="МЕНЮ" isOpen={this.props.isOpen} onClick={this.props.onClick}/>
    );
  }
}

const mapStateToProps = function(state){
  return {
    isOpen: state.menu.isOpen
  }
};

/*const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    onClick: actions.onClick,
  }, dispatch)
};*/

/*const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (isOpen) => {
      dispatch(actions.onClick(isOpen))
    }
  }
};

export const HeaderHamburger = connect(mapStateToProps, mapDispatchToProps)(_HeaderHamburger);*/





/*
class _HeaderHamburger extends Component {
  constructor(props) {
    super(props);
    const {dispatch} = props;
    this.boundActionCreators = bindActionCreators(actions, dispatch);
    console.log(this.boundActionCreators);
  }

  render() {
    let { todos, dispatch } = this.props
    return (
      <HeaderHamburgerView text="МЕНЮ" isOpen={this.props.isOpen} onClick={this.props.onClick} {...this.boundActionCreators}/>
    );
  }
}

const mapStateToProps = function(state){
  return {
    isOpen: state.menu.isOpen
  }
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    onClick: actions.onClick,
  }, dispatch)
};

export const HeaderHamburger = connect(state => ({ onClick: actions.onClick }))(_HeaderHamburger);*/