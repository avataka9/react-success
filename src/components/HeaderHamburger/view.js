import React from 'react';


export const HeaderHamburgerView = ({text,isOpen,onClick}) => {
  //let hamburger;
  return (
    <div className={isOpen ? "header-hamburger header-hamburger--open" : "header-hamburger"}
         //ref={(node) => {hamburger = node;}}
         onClick={onClick}
    >
      <span/>
      <span/>
      <span/>
      <div className="header-hamburger__text">{text}</div>
    </div>
  );
};

/*
 import {bindActionCreators} from 'redux';
 import {connect} from 'react-redux';

 const _Hamburger = (props) => {
 let text = props.text;
 let isOpen = props.isOpen;
 let handleClick = props.handleClick;
 console.log(props);
 return (
 <div className={isOpen ? "header-hamburger header-hamburger--open" : "header-hamburger"}
 onClick={handleClick}
 >
 <span></span>
 <span></span>
 <span></span>
 <div className="header-hamburger__text">{text}</div>

 </div>
 );
 };

 const mapStateToProps = (state) => {
 return {
 isOpen: state.menu.isOpen
 }
 };

 const mapDispatchToProps = (dispatch) =>{
 return {
 handleClick: bindActionCreators({
 type: 'OPEN_MENU'
 }, dispatch)
 }
 };

 export const Hamburger = connect(mapStateToProps,mapDispatchToProps)(_Hamburger);

 */