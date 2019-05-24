import React, { Component } from 'react';
import './App.css';


export default class Saved2 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#e5f6c9',
     };
    const style_elText3 = {
        color: 'rgba(7, 7, 4, 0.8500)',
        textAlign: 'left',
     };
    const value_text3 = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotSelectedCurrenciesName'] : '');
    
    const style_elText4 = {
        color: 'rgba(7, 7, 4, 0.8500)',
        textAlign: 'left',
     };
    const value_text4 = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotSelectedCurrencyID'] : '');
    
    
    return (
      <div className="Saved2" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='baseFont elText3'>
            <div style={style_elText3}>
              <div>{value_text3 !== undefined ? value_text3 : (<span className="propValueMissing">{this.props.locStrings.saved2_text3_299264}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText4'>
            <div style={style_elText4}>
              <div>{value_text4 !== undefined ? value_text4 : (<span className="propValueMissing">{this.props.locStrings.saved2_text4_789025}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
