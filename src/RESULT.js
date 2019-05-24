import React, { Component } from 'react';
import './App.css';


export default class RESULT extends Component {

  // Properties used by this component:
  // result

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
    const style_elText = {
        color: 'rgba(7, 7, 4, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.result;
    
    
    return (
      <div className="RESULT" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.result_text_952542}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
