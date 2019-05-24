import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_176074";
    item['en'] = "CONVERT";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_25825";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_345967";
    item['en'] = "SAVE";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_178535";
    item['en'] = "PS!! The amount will always count from 100. ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_869474";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_text_212738";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_text2_729453";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_text3_662572";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_377351";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text2_846649";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "saved2_text_550673";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "saved2_text2_551805";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_955599";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text2_36602";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "meny2_button_673640";
    item['en'] = "HOME";
    
    item = {};
    this.items.push(item);
    item['key'] = "meny2_button2_882892";
    item['en'] = "LOGIN";
    
    item = {};
    this.items.push(item);
    item['key'] = "meny2_button3_895929";
    item['en'] = "SAVED";
    
    item = {};
    this.items.push(item);
    item['key'] = "meny2_button4_698221";
    item['en'] = "CONVERT";
    
    item = {};
    this.items.push(item);
    item['key'] = "meny2_button5_166424";
    item['en'] = "LOGOUT";
    
    item = {};
    this.items.push(item);
    item['key'] = "saved2_text3_299264";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "saved2_text4_789025";
    item['en'] = "Bv0sxG1hrxqlGBHuFZqd";
    
    item = {};
    this.items.push(item);
    item['key'] = "component2_text_572970";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "convert_text_73245";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "login1_text_472348";
    item['en'] = "Please sign in with your Google Account to enter the page! ";
    
    item = {};
    this.items.push(item);
    item['key'] = "error_text_302470";
    item['en'] = "It seems that your email or password is wrong. Please try again.";
    
    item = {};
    this.items.push(item);
    item['key'] = "saved2_text_391003";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "result_text_143872";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "result_text2_110420";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "result_text3_242197";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "result_text4_429889";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "convert_text2_800854";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_503563";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text2_1030173";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "result_text_952542";
    item['en'] = "New text. Double-click to edit";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
