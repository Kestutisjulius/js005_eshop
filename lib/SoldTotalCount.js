// funkcija kuri skaiciuoja parduotu prekiu kiekis
function soldTotalCount(list) {

    let t = [0, 0.00, ""];
    for(let p of list) { 
      t[0] += (+p.sold);
      t[1] += (+p.sold * +p.price.value);
      t[2] = p.price.currency;
    }
    
    return t;
}
module.exports = soldTotalCount;