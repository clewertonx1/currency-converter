# Currency Converter 

### Description: 

This is a nodeJS module to facilitate the conversion of currencies, it uses the api of the central bank of europe as a reference (https://exchangeratesapi.io/)

npm package: https://www.npmjs.com/package/currency-converter-module


### Install 

To install just run: 
> npm install currency-converter-module

### Import 

In your project import the module, that way: 
```javascript
import currency from 'currency-converter-module'
```

### Example usage 

```javascript
import currency from 'currency-converter-module'
async function Example(){
    var convertedValue = await currency.convertCurrencyByCode({value: 4, code: 'USD'},{code: 'BRL'})
    console.log(await valueConvert)
}
Example()
```

converterCurrencyBy it is a function that expects two objects, the first is the currency that will be converted, that object must contain the value and the currency code, the second object must contain only the currency code

Other example:

```javascript
import currency from 'currency-converter-module'

var valueINPUT = 3 

async function Example(){
    var convertedValue = await currency.convertCurrencyByCode({value: valueINPUT, code: 'EUR'},{code: 'BRL'})
    console.log(await valueConvert)
    // This console.log will show the conversion from 3 EUR to USD
}
Example()
```
The *value* must be an int or float, and the *code* must be a string


### Codes of currencies


```yaml
  {
  "BRL": "Brazilian real",
  "USD": "US dollar",
  "JPY": "Japanese yen",
  "BGN": "Bulgarian lev",
  "CZK": "Czech koruna",
  "DKK": "Danish krone"
  "GBP": "Pound sterling",
  "HUF": "Hungarian forint",
  "PLN": "Polish zloty",
  "RON": "Romanian leu",
  "SEK": "Swedish krona",
  "CHF": "Swiss franc",
  "ISK": "Icelandic krona",
  "NOK": "Norwegian krone",
  "HRK": "Croatian kuna",
  "RUB": "Russian rouble",
  "TRY": "Turkish lira",
  "AUD": "Australian dollar",
  "CAD": "Canadian dollar",
  "CNY": "Chinese yuan renminbi",
  "HKD": "Hong Kong dollar",
  "IDR": "Indonesian rupiah",
  "ILS": "Israeli shekel",
  "INR": "Indian rupee",
  "KRW": "South Korean won",
  "MXN": "Mexican peso",
  "MYR": "Malaysian ringgit",
  "NZD": "New Zealand dollar",
  "PHP": "Philippine peso",
  "SGD": "Singapore dollar",
  "THB": "Thai baht",
  "ZAR": "South African rand",
  }
```



