const getCurrencys = require('../../services/currency');


// fistCoin is the one to be converted based on secondCoin
async function getConvertCurrencyByCode(fistCoin, secondCoin){

    const fistCoinValue = fistCoin.value 
    const fistCoinCode = fistCoin.code
    const secondCoinValue = secondCoin.value 
    const secondCoinCode = secondCoin.code


    /*console.log(nome.length)
    if (nome.length < 3) {
        return JSON.stringify({"error": "O nome deve ter no minino 3 caracteres."});
    } */

    try {
        console.log(fistCoinCode)
        const listCurrency  = await getCurrencys(fistCoinCode);
        
        return listCurrency;
    
    } catch (error) {
        return JSON.stringify({"error":"The code of coin is wrong"});
    }

}

module.exports = getConvertCurrencyByCode;