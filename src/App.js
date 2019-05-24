import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import CONVERTScreen from './CONVERTScreen.js';
import HOMEScreen from './HOMEScreen.js';
import Login2Screen from './Login2Screen.js';
import SAVEDScreen from './SAVEDScreen.js';
import ERRORScreen from './ERRORScreen.js';
import MENYScreen from './MENYScreen.js';
import Login1Screen from './Login1Screen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_amountFromTo from './DataSheet_amountFromTo.js';
import DataSheet_latest from './DataSheet_latest.js';
import DataSheet_firebase from './DataSheet_firebase.js';
import DataSheet_firebase2 from './DataSheet_firebase2.js';
import DataSheet_currencyChoice from './DataSheet_currencyChoice.js';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['amountFromTo'] = new DataSheet_amountFromTo('amountFromTo', this.dataSheetDidUpdate);
    this.dataSheets['latest'] = new DataSheet_latest('latest', this.dataSheetDidUpdate);
    this.dataSheets['firebase'] = new DataSheet_firebase('firebase', this.dataSheetDidUpdate);
    this.dataSheets['firebase2'] = new DataSheet_firebase2('firebase2', this.dataSheetDidUpdate);
    this.dataSheets['currencyChoice'] = new DataSheet_currencyChoice('currencyChoice', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_SlotSelectedCurrencyID'] = "Bv0sxG1hrxqlGBHuFZqd";
    this.dataSlots['ds_SlotNumberOfCurrencies'] = "180";
    this.dataSlots['ds_SlotUserID'] = "";
    this.dataSlots['ds_SlotUserName'] = "";
    this.dataSlots['ds_SlotUserEmail'] = "";
    this.dataSlots['ds_SlotUserPhoto'] = "";
    this.dataSlots['ds_SlotRates'] = "";
    this.dataSlots['ds_SlotSelectedCurrenciesName'] = "";
    this.dataSlots['ds_Slot2'] = "EUR";
    this.dataSlots['ds_Slot3'] = "SEK";
    this.dataSlots['ds_SlotResult'] = "";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    // Initialize web service plugin 'firebase 1'
    firebase.initializeApp({
        apiKey: "AIzaSyAsx1icxd9ccN3tSIL-nuhwrvhGfJW8Ars",
        authDomain: "awesome-project-71619.firebaseapp.com",
        databaseURL: "https://awesome-project-71619.firebaseio.com",
        projectId: "awesome-project-71619",
        storageBucket: "awesome-project-71619.appspot.com",
        messagingSenderId: "420196982439",
        appId: "1:420196982439:web:915fe844b6ad511d"});
    firebase.firestore().settings({});
    
    this.serviceOptions_amountFromTo = {
      dataSlots: this.dataSlots,
      servicePath: "convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_amountFromTo.servicePath = this.dataSheets['amountFromTo'].expandSlotTemplateString("convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100", this.dataSlots);
      this.loadData_jsonsrc3(this.dataSheets['amountFromTo'], this.serviceOptions_amountFromTo, false);
    }, 10000);
    
    this.serviceOptions_latest = {
      dataSlots: this.dataSlots,
      servicePath: "",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_latest.servicePath = this.dataSheets['latest'].expandSlotTemplateString("", this.dataSlots);
      this.loadData_jsonsrc2(this.dataSheets['latest'], this.serviceOptions_latest, false);
    }, 10000);
    
    this.serviceOptions_firebase = {
      dataSlots: this.dataSlots,
      servicePath: "CurrencySave",
      query: "where(\"CurrencyID\", \"==\", \"$slot('ds_selectedCurrencyID')\").orderBy(\"SaveDate\",\"desc\")",
    };
    this.dataSheets['firebase'].firebase = firebase;
    
    this.serviceOptions_firebase2 = {
      dataSlots: this.dataSlots,
      servicePath: "Currency",
      query: "where(\"CurrencyID\", \"==\", \"$slot('ds_selectedCurrencyID')\").orderBy(\"SaveDate\",\"desc\")",
    };
    this.dataSheets['firebase2'].firebase = firebase;
    

    this.state = {
      currentScreen: 'login1',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);

    this.serviceOptions_amountFromTo.servicePath = this.dataSheets['amountFromTo'].expandSlotTemplateString("convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100", this.dataSlots);
    this.loadData_jsonsrc3(this.dataSheets['amountFromTo'], this.serviceOptions_amountFromTo, true);
    
    this.serviceOptions_latest.servicePath = this.dataSheets['latest'].expandSlotTemplateString("", this.dataSlots);
    this.loadData_jsonsrc2(this.dataSheets['latest'], this.serviceOptions_latest, true);
    
    this.serviceOptions_firebase.servicePath = this.dataSheets['firebase'].expandSlotTemplateString("CurrencySave", this.dataSlots);
    this.loadData_firebase1(this.dataSheets['firebase'], this.serviceOptions_firebase, true);
    
    this.serviceOptions_firebase2.servicePath = this.dataSheets['firebase2'].expandSlotTemplateString("Currency", this.dataSlots);
    this.loadData_firebase1(this.dataSheets['firebase2'], this.serviceOptions_firebase2, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    {
      let usedSlots = [];
      let servicePath = this.dataSheets['amountFromTo'].expandSlotTemplateString("convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_amountFromTo.servicePath = servicePath;
        this.loadData_jsonsrc3(this.dataSheets['amountFromTo'], this.serviceOptions_amountFromTo, true);
      }
    }
    if (this.serviceOptions_firebase.query.length > 0) {
      let usedSlots = [];
      this.dataSheets['firebase'].expandSlotTemplateString(this.serviceOptions_firebase.query, {}, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.loadData_firebase1(this.dataSheets['firebase'], this.serviceOptions_firebase, true);
      }
    }
    
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['firebase'].expandSlotTemplateString("CurrencySave", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_firebase.servicePath = servicePath;
        this.loadData_firebase1(this.dataSheets['firebase'], this.serviceOptions_firebase, true);
      }
    }
    if (this.serviceOptions_firebase2.query.length > 0) {
      let usedSlots = [];
      this.dataSheets['firebase2'].expandSlotTemplateString(this.serviceOptions_firebase2.query, {}, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.loadData_firebase1(this.dataSheets['firebase2'], this.serviceOptions_firebase2, true);
      }
    }
    
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['firebase2'].expandSlotTemplateString("Currency", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_firebase2.servicePath = servicePath;
        this.loadData_firebase1(this.dataSheets['firebase2'], this.serviceOptions_firebase2, true);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_jsonsrc3 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Generic JSON'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    const fetchOpts = {
      method: 'GET',
      headers: {},
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }
  loadData_jsonsrc2 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Generic JSON'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    const fetchOpts = {
      method: 'GET',
      headers: {},
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }
  loadData_firebase1 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Firebase (Cloud Firestore)'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
      dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const db = firebase.firestore();
    const collection = db.collection(options.servicePath);
    const query = dataSheet.expandSlotTemplateString(options.query, this.dataSlots);
    let queryObj;
    
    if (query.length < 1) {
      queryObj = collection;
    } else {
      console.log("loading firebase data for '%s' with query: %s", options.servicePath, query);
      try {
        queryObj = eval(`(function(c){ return c.${query}; })(collection)`);
      } catch (e) {
        console.log("** error creating firebase query object from '%s': ", query, e)
        return;
      }
    }
    
    queryObj.onSnapshot(
      (querySnapshot) => {
        let jsonArr = [];
        
        if (querySnapshot.docs) {
          querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), document_key: doc.id };
            jsonArr.push(data);
          });
        } else if (querySnapshot.data) {
          const doc = querySnapshot;
          const data = { ...doc.data(), document_key: doc.id };
          jsonArr.push(data);
        }    
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);  
      },
      (err) => {
        fetchComplete(err, options);
      });  
    
    
     /*
    dbLoadingPromise.get().then((querySnapshot) => {
        let jsonArr = [];
    
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), key: doc.id };
          jsonArr.push(data);
        });
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);
      },
      (err) => {
        fetchComplete(err, options);
      });  
      */
    
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_SlotSelectedCurrencyID': this.dataSlots['ds_SlotSelectedCurrencyID'],
        'ds_SlotNumberOfCurrencies': this.dataSlots['ds_SlotNumberOfCurrencies'],
        'ds_SlotUserID': this.dataSlots['ds_SlotUserID'],
        'ds_SlotUserName': this.dataSlots['ds_SlotUserName'],
        'ds_SlotUserEmail': this.dataSlots['ds_SlotUserEmail'],
        'ds_SlotUserPhoto': this.dataSlots['ds_SlotUserPhoto'],
        'ds_SlotRates': this.dataSlots['ds_SlotRates'],
        'ds_SlotSelectedCurrenciesName': this.dataSlots['ds_SlotSelectedCurrenciesName'],
        'ds_Slot2': this.dataSlots['ds_Slot2'],
        'ds_Slot3': this.dataSlots['ds_Slot3'],
        'ds_SlotResult': this.dataSlots['ds_SlotResult'],
      };
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_CONVERTScreen = this.dataSheets['amountFromTo'].items[0];
      const screenData_CONVERTScreen = {
        ...dataSheetRow_CONVERTScreen,
        dataSheetRow: dataSheetRow_CONVERTScreen,
      }
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_SAVEDScreen = this.dataSheets['amountFromTo'].items[0];
      const screenData_SAVEDScreen = {
        ...dataSheetRow_SAVEDScreen,
        dataSheetRow: dataSheetRow_SAVEDScreen,
      }
      switch (screenId) {
        default:
          return null;
        case 'convert':
          return (<CONVERTScreen {...screenProps} {...screenData_CONVERTScreen} />)
        case 'home':
          return (<HOMEScreen {...screenProps} />)
        case 'login2':
          return (<Login2Screen {...screenProps} />)
        case 'saved':
          return (<SAVEDScreen {...screenProps} {...screenData_SAVEDScreen} />)
        case 'error':
          return (<ERRORScreen {...screenProps} />)
        case 'meny':
          return (<MENYScreen {...screenProps} />)
        case 'login1':
          return (<Login1Screen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
