import React, { Component } from 'react';
import './App.css';
import btn_icon_63443 from './images/btn_icon_63443.png';
import btn_icon_back_meny from './images/btn_icon_back_meny.png';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class MENYScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'HOME'
    this.props.appActions.goToScreen('home', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    // Go to screen 'Login 2'
    this.props.appActions.goToScreen('login2', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton3 = (ev) => {
    // Go to screen 'SAVED'
    this.props.appActions.goToScreen('saved', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton4 = (ev) => {
    // Go to screen 'CONVERT'
    this.props.appActions.goToScreen('convert', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton5 = (ev) => {
    // 'Sign out (lock gate)' action.
    this.clearSavedLogin();
    this.props.appActions.goToScreen('login1');
  
  }
  
  
  onClick_elIconButton = (ev) => {
    // Go to screen 'MENY'
    this.props.appActions.goToScreen('meny', { transitionId: 'fadeIn' });
  
  }
  
  
  clearSavedLogin() {
    // Logout
    firebase.auth().signOut();
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#e5f6c9',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton3 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton4 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton4_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton5 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton5_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_63443+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.562%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen MENYScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_MENYScreen_elButton_673640">
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="primary" onClick={this.onClick_elButton} >
              {this.props.locStrings.meny2_button_673640}
            </Button>
          
          </div>
          
          </div>
          <div className='actionFont elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  color="primary" onClick={this.onClick_elButton2} >
              {this.props.locStrings.meny2_button2_882892}
            </Button>
          
          </div>
          
          <div className='actionFont elButton3' style={style_elButton3_outer}>
            <Button style={style_elButton3}  color="primary" onClick={this.onClick_elButton3} >
              {this.props.locStrings.meny2_button3_895929}
            </Button>
          
          </div>
          
          <div className='actionFont elButton4' style={style_elButton4_outer}>
            <Button style={style_elButton4}  color="primary" onClick={this.onClick_elButton4} >
              {this.props.locStrings.meny2_button4_698221}
            </Button>
          
          </div>
          
          <div className='actionFont elButton5' style={style_elButton5_outer}>
            <Button style={style_elButton5}  color="primary" onClick={this.onClick_elButton5} >
              {this.props.locStrings.meny2_button5_166424}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">MENY</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_meny} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elIconButton' style={style_elIconButton}  onClick={this.onClick_elIconButton}  />
          </div>
        </div>
      </div>
    )
  }
  

}
