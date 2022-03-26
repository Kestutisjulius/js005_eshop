// funkcija kuri skaiciuoja neparduotu prekiu kieki
function inStockTotalCount(list) {
    let t = [0, 0, ''];
    for(let p of list) { 
      t[0] += (+p.inStock);
      t[1] += (+p.inStock * +p.price.value);
      t[2] = p.price.currency;
    }
    
    return t;
}
module.exports = inStockTotalCount;