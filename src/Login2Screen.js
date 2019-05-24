import React, { Component } from 'react';
import './App.css';
import FirebaseLogin from './FirebaseLogin';
import btn_icon_154591 from './images/btn_icon_154591.png';
import btn_icon_back_login2 from './images/btn_icon_back_login2.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class Login2Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elIconButton = (ev) => {
    // Go to screen 'MENY'
    this.props.appActions.goToScreen('meny', { transitionId: 'fadeIn' });
  
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
    const style_elFirebaseLogin_outer = {
        pointerEvents: 'auto',
     };
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_154591+')',
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
      <div className="AppScreen Login2Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_Login2Screen_elFirebaseLogin_988056">
          <div className='elFirebaseLogin' style={style_elFirebaseLogin_outer}>
            <div>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Login 2</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_login2} alt="" style={{width: '50%'}} /></div>
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
