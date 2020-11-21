const getCurrencys = require('../../services/currency');


// fistCoin is the one to be converted based on secondCoin
async function convertCurrencyByCode(fistCoin, secondCoin){

    const fistCoinValue = fistCoin.value 
    const fistCoinCode = fistCoin.code

    const secondCoinCode = secondCoin.code

    /*console.log(nome.length)
    if (nome.length < 3) {
        return JSON.stringify({"error": "O nome deve ter no minino 3 caracteres."});
    } */

    try {
        const listCurrency  = await getCurrencys(fistCoinCode);
        const result = fistCoinValue * listCurrency[secondCoinCode]
        return result;
    
    } catch (error) {
        return JSON.stringify({"error":"The code of coin is wrong"});
    }

}

module.exports = convertCurrencyByCode;