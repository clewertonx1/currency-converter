const axios = require('axios');


// codeBase is the currency code that will be the basis for the query
async function getCurrencys(codeBase) {
    
    const url = `https://api.exchangeratesapi.io/latest?base=${codeBase}`;

    try {
        let data = await axios.get(url);
        data = data.data.rates
        return data
        
    } catch (error) {
        return JSON.stringify({"erro": "It was not possible to search for currency values"});
    }
}

module.exports = getCurrencys;
