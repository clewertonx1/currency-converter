
const currency = require('./src/currency-converter')

async function exemple(){
    var test = await currency.convertCurrencyByCode({value: 4, code: 'USD'},{code: 'BRL'})
    console.log(await test)
}
exemple()

module.exports = require('./src/currency-converter')