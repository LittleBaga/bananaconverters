import React, { Component } from 'react';
import './App.css';
import btn_icon_140421 from './images/btn_icon_140421.png';
import btn_icon_back_home from './images/btn_icon_back_home.png';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class HOMEScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      picker: '',
      picker2: '',
    };
  }

  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
    this.props.appActions.updateDataSlot("ds_SlotSelectedCurrenciesName", event.target.value);
    this.props.appActions.updateDataSlot("ds_Slot2", event.target.value);
  }
  
  pickerValueChanged_picker2 = (event) => {
    this.setState({picker2: event.target.value});
    this.props.appActions.updateDataSlot("ds_SlotSelectedCurrencyID", event.target.value);
    this.props.appActions.updateDataSlot("ds_Slot3", event.target.value);
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'CONVERT'
    this.props.appActions.goToScreen('convert', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    this.sendData_button2_to_firebase2();
  
  }
  
  
  onClick_elIconButton = (ev) => {
    // Go to screen 'MENY'
    this.props.appActions.goToScreen('meny', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_button2_to_firebase2 = () => {
    const dataSheet = this.props.appActions.getDataSheet('firebase2');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      CurrencyValue: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotResult'] : ''),
      CurrencyName: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotSelectedCurrencyID'] : ''),
    };
    this.props.appActions.addToDataSheet('firebase2', row);
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
    let selection_picker = this.state.picker;
    // Source datasheet and selected data column for picker element 'picker'
    const dataSource_picker = this.props.appActions.getDataSheet('currencyChoice');
    const valueColumnName_picker = 'column1';
    
    const style_elPicker_outer = {
        pointerEvents: 'auto',
     };
    let selection_picker2 = this.state.picker2;
    // Source datasheet and selected data column for picker element 'picker 2'
    const dataSource_picker2 = this.props.appActions.getDataSheet('currencyChoice');
    const valueColumnName_picker2 = 'column1';
    
    const style_elPicker2_outer = {
        pointerEvents: 'auto',
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
        fontSize: 14.2,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText = {
        fontSize: 20.6,
        color: '#ff0a1a',
        textAlign: 'left',
     };
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_140421+')',
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
      <div className="AppScreen HOMEScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_HOMEScreen_elPicker_221068">
          <div className='baseFont elPicker' style={style_elPicker_outer}>
            <Select  onChange={this.pickerValueChanged_picker} value={selection_picker} >
              {dataSource_picker.items.map(item => {
                const colValue = item[valueColumnName_picker];
                const labelColValue = item[valueColumnName_picker];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
          </div>
          <div className='baseFont elPicker2' style={style_elPicker2_outer}>
            <Select  onChange={this.pickerValueChanged_picker2} value={selection_picker2} >
              {dataSource_picker2.items.map(item => {
                const colValue = item[valueColumnName_picker2];
                const labelColValue = item[valueColumnName_picker2];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="primary" onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_176074}
            </Button>
          
          </div>
          
          <div className='elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  color="primary" onClick={this.onClick_elButton2} >
              {this.props.locStrings.start_button2_345967}
            </Button>
          
          </div>
          
          <div className='font-helvetica  elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.start_text_178535}</div>
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">HOME</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_home} alt="" style={{width: '50%'}} /></div>
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
