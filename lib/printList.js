const IsValid = require('./IsValid.js');
// funkcija kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu


function printList(list) {
    const availableCurrency = ['EUR', 'USD', 'Lit'];
    let table = [];
    let i = 0;
    for (const item of list) {
      const { name, price, inStock, sold } = item;

      if (!IsValid.correctObject(item, 4)
          || !IsValid.nonEmptyString(name)
          || !IsValid.correctObject(price, 2)
          || !IsValid.nonNegativeNumber(price.value)
          || !IsValid.nonEmptyString(price.currency)
          || !availableCurrency.includes(price.currency)
          || !IsValid.nonNegativeInteger(inStock)
          || !IsValid.nonNegativeInteger(sold)) {
            continue;
      }
      try {
        table.push(`${++i}). ${name}: ${price.value} ${price.currency}; parduota: ${sold}; likutis: ${inStock};`);
        
      } catch (error) {
        console.log('KRITINE KLAIDA');
        continue;
      }
    }
    return table.join('\n');
    
}


module.exports = printList;