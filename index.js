console.log('teste')

const currency = require('./src/currency-converter')

async function aaa(){
    var teste = await currency.convertCurrencyByCode({value: 2, code: 'BRL'},{code: 'USD'})
    console.log(await teste)
}

aaa()
module.exports = require('./src/currency-converter')