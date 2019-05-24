import React, { Component } from 'react';
import './App.css';
import btn_icon_875937 from './images/btn_icon_875937.png';
import btn_icon_back_convert from './images/btn_icon_back_convert.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class CONVERTScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, result

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
    const style_elText = {
        color: 'rgba(7, 7, 4, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.result;
    
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_875937+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '87.108%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen CONVERTScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.convert_text_73245}</span>)}</div>
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">CONVERT</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_convert} alt="" style={{width: '50%'}} /></div>
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
