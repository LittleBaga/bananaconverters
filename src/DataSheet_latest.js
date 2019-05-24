import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_latest extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "rates";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Generic JSON'.
    
    item = {};
    this.items.push(item);
    item['HRK'] = "7.425808";
    item['HUF'] = "327.090986";
    item['CDF'] = "1845.162465";
    item['ILS'] = "4.011026";
    item['NGN'] = "401.175368";
    item['GYD'] = "233.376823";
    item['BYR'] = "21852.07395";
    item['BHD'] = "0.420329";
    item['SZL'] = "16.030612";
    item['INR'] = "77.767179";
    item['SDG'] = "50.237651";
    item['PEN'] = "3.731241";
    item['EUR'] = "1";
    item['QAR'] = "4.059636";
    item['PGK'] = "3.758278";
    item['LRD'] = "202.298936";
    item['ISK'] = "137.799192";
    item['SYP'] = "574.174624";
    item['TRY'] = "6.748386";
    item['UAH'] = "29.125695";
    item['SGD'] = "1.537059";
    item['MMK'] = "1709.924032";
    item['NIO'] = "36.637937";
    item['BIF'] = "2041.886777";
    item['AFN'] = "88.256182";
    item['LKR'] = "196.345321";
    item['GTQ'] = "8.530169000000001";
    item['CHF'] = "1.126067";
    item['THB'] = "35.564495";
    item['AMD'] = "534.639642";
    item['AOA'] = "366.653825";
    item['SEK'] = "10.780991";
    item['SAR'] = "4.180545";
    item['KWD'] = "0.339601";
    item['IRR'] = "46942.937958";
    item['WST'] = "2.9499";
    item['BMD'] = "1.114902";
    item['BGN'] = "1.955646";
    item['PHP'] = "58.572496";
    item['ZMW'] = "15.367755";
    item['XAF'] = "654.881931";
    item['BDT'] = "94.093219";
    item['NOK'] = "9.798982000000001";
    item['BOB'] = "7.694996";
    item['TZS'] = "2564.274004";
    item['XAG'] = "0.07726";
    item['VEF'] = "11.13508";
    item['ANG'] = "2.087991";
    item['VUV'] = "129.674446";
    item['BND'] = "1.505787";
    item['XCD'] = "3.013077";
    item['SCR'] = "15.229211";
    item['KYD'] = "0.928078";
    item['DJF'] = "198.140064";
    item['CLF'] = "0.028126";
    item['LSL'] = "16.021458";
    item['MOP'] = "9.003503";
    item['ALL'] = "122.583356";
    item['UZS'] = "9417.742491999999";
    item['UYU'] = "39.199327";
    item['PLN'] = "4.306475";
    item['LTL'] = "3.292015";
    item['LYD'] = "1.556124";
    item['JPY'] = "122.820932";
    item['MNT'] = "2945.042397";
    item['FJD'] = "2.408578";
    item['ZWL'] = "359.39416";
    item['KPW'] = "1003.485413";
    item['PKR'] = "167.653377";
    item['MRO'] = "398.019702";
    item['OMR'] = "0.429254";
    item['GBP'] = "0.878427";
    item['LVL'] = "0.674393";
    item['SHP'] = "1.472672";
    item['GEL'] = "3.071537";
    item['TND'] = "3.345594";
    item['DKK'] = "7.46856";
    item['NPR'] = "124.255789";
    item['KRW'] = "1332.04039";
    item['BSD'] = "1.11362";
    item['CRC'] = "652.568732";
    item['EGP'] = "18.998109";
    item['MAD'] = "10.793754";
    item['AUD'] = "1.621011";
    item['BTC'] = "0.00014";
    item['SLL'] = "9950.497740000001";
    item['MWK'] = "801.40532";
    item['RSD'] = "117.944081";
    item['NZD'] = "1.713754";
    item['SRD'] = "8.314984000000001";
    item['CLP'] = "776.088703";
    item['RUB'] = "71.965233";
    item['NAD'] = "16.057263";
    item['HKD'] = "8.751143000000001";
    item['GMD'] = "55.30473";
    item['VND'] = "26079.223868";
    item['LAK'] = "9676.232243";
    item['CUC'] = "1.114902";
    item['RON'] = "4.763637";
    item['MUR'] = "39.526639";
    item['XAU'] = "0.000874";
    item['GGP'] = "0.878393";
    item['MXN'] = "21.291011";
    item['BRL'] = "4.567586";
    item['STD'] = "23469.349968";
    item['AWG'] = "2.006823";
    item['MVR'] = "17.166332";
    item['PAB'] = "1.113731";
    item['TJS'] = "10.500758";
    item['GNF'] = "10170.555423";
    item['MGA'] = "4084.148759";
    item['XDR'] = "0.80947";
    item['ETB'] = "31.982104";
    item['ZAR'] = "16.088533";
    item['COP'] = "3738.265508";
    item['IDR'] = "16149.909041";
    item['SVC'] = "9.744965000000001";
    item['CVE'] = "110.089296";
    item['TTD'] = "7.539355";
    item['GIP'] = "0.875878";
    item['PYG'] = "6994.564689";
    item['MZN'] = "70.63457";
    item['FKP'] = "0.875878";
    item['KZT'] = "422.000847";
    item['USD'] = "1.114902";
    item['UGX'] = "4192.702094";
    item['RWF'] = "1009.956032";
    item['GHS'] = "5.89752";
    item['ARS'] = "50.379024";
    item['JEP'] = "0.878393";
    item['DOP'] = "56.274661";
    item['LBP'] = "1684.561131";
    item['BZD'] = "2.244744";
    item['BTN'] = "77.767934";
    item['MYR'] = "4.662075";
    item['YER'] = "279.060909";
    item['JMD'] = "151.447806";
    item['TOP'] = "2.560428";
    item['SOS'] = "650.550441";
    item['TMT'] = "3.902156";
    item['MDL'] = "19.961754";
    item['XOF'] = "654.895212";
    item['TWD'] = "35.096778";
    item['BBD'] = "2.228967";
    item['CAD'] = "1.497146";
    item['CNY'] = "7.703581";
    item['JOD'] = "0.789408";
    item['XPF'] = "119.059887";
    item['IQD'] = "1328.795629";
    item['HNL'] = "27.229255";
    item['AED'] = "4.095201";
    item['ERN'] = "16.723461";
    item['KES'] = "112.728383";
    item['KMF'] = "491.727082";
    item['MKD'] = "61.514713";
    item['DZD'] = "133.397672";
    item['CUP'] = "29.544896";
    item['BWP'] = "11.981818";
    item['SBD'] = "9.148382";
    item['AZN'] = "1.900929";
    item['KGS'] = "77.875984";
    item['BYN'] = "2.315635";
    item['KHR'] = "4515.073503";
    item['ZMK'] = "10035.454556";
    item['HTG'] = "97.626925";
    item['CZK'] = "25.78544";
    item['BAM'] = "1.952583";
    item['IMP'] = "0.878393";
    item.key = key++;
  }

  
  urlFromOptions(options) {
    const baseUrl = "https://data.fixer.io/api/latest?access_key=ed5524bff9f68cb2f44fd671c59ce866";
    
    let path = options.servicePath || '';
    if (path.length > 0 && path.substr(0, 1) !== '/' && baseUrl.substr(baseUrl.length - 1, 1) !== '/')
      path = '/'+path;
  
    let query = options.query || '';
    if (query.length > 0) {
      const dataSlots = options.dataSlots || {};
      query = "?" + this.expandSlotTemplateString(query, dataSlots);
    }
  
    return baseUrl + path + query; 
  }
  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  addItem(item, options) {
    super.addItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'POST',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  removeItem(item, options) {
    super.removeItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'DELETE',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  replaceItemByRowIndex(idx, item, options) {
    super.replaceItemByRowIndex(idx, item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'PUT',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  

}
