import React, { Component } from 'react';
import './App.css';
import img_elStop from './images/ERRORScreen_elStop_992525.jpg';
import btn_icon_back_error from './images/btn_icon_back_error.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class ERRORScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    const style_elText = {
        color: 'rgba(7, 7, 4, 0.8500)',
        textAlign: 'left',
     };
    const style_elStop = {
        backgroundImage: 'url('+img_elStop+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <div className="AppScreen ERRORScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.error_text_302470}</div>
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">ERROR</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_error} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elStop' style={style_elStop} />
          </div>
        </div>
      </div>
    )
  }
  

}
