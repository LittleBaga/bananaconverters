import React, { Component } from 'react';
import './App.css';
import Saved2 from './Saved2';
import RESULT from './RESULT';
import btn_icon_462052 from './images/btn_icon_462052.png';
import btn_icon_back_saved from './images/btn_icon_back_saved.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class SAVEDScreen extends Component {

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
    
    const dataSheet_amountFromTo = this.props.dataSheets['amountFromTo'];
    const dataSheet_firebase = this.props.dataSheets['firebase'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#e5f6c9',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list.push({key: 'state0', visualStateIndex: 0});
    
    const style_elList2 = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list 2'.
    let items_list2 = [];
    let listComps_list2 = {};
    items_list2 = items_list2.concat(this.props.appActions.getDataSheet('amountFromTo').items);
    
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_462052+')',
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
      <div className="AppScreen SAVEDScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
            <ul style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Saved2 visualStateIndex={row.visualStateIndex} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </ul>
          
          </div>
          
          <div className='hasNestedComps elList2'>
            <ul style={style_elList2}>
              {items_list2.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list2[row._componentId] : <RESULT dataSheetId={'amountFromTo'} dataSheetRow={row} {...{ 'result': row['result'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList2_endMarker = el} />
            </ul>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">SAVED</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_saved} alt="" style={{width: '50%'}} /></div>
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
