const jsonParse = require('./lib/jsonParse.js');
const readFile = require('./lib/readFile.js');
const printList = require('./lib/printList.js');
const IsValid = require('./lib/IsValid.js');
const inStockTotalCount = require('./lib/inStockTotalCount.js');
const soldTotalCount = require('./lib/soldTotalCount.js');
const futureProfit = require('./lib/futureProfit.js');



(async () => {
    const availableCurrency = ['EUR', 'USD', 'Lit'];
    const goods = ['arbata', 'kvepalai', 'masina', 'pomidoras','on','of', 5, [], ()=> {}, undefined, ''];

    const goodsInfo = [];

    // for (const item of goods) {
    //     if (typeof item === 'string' && item !== '') {
    //         const itemText = await readFile(item)
    //         if (itemText !== false && itemText !== '') {
    //            const itemObj = jsonParse(itemText);
    //            if (itemObj !== false) {
    //                goodsInfo.push(itemObj);

    //            }
    //         }        
    //     }      
    // }

    for (const item of goods) {
        if (typeof item !== 'string' || item == '') {
                continue; }
        const itemText = await readFile(item)
        const itemObj = jsonParse(itemText);
        if (itemObj == false) {
            continue;
        }    

        const { name, price, inStock, sold } = itemObj;

        if (!IsValid.correctObject(itemObj, 4)
            || !IsValid.nonEmptyString(name)
            || !IsValid.correctObject(price, 2)
            || !IsValid.nonNegativeNumber(price.value)
            || !IsValid.nonEmptyString(price.currency)
            || !availableCurrency.includes(price.currency)
            || !IsValid.nonNegativeInteger(inStock)
            || !IsValid.nonNegativeInteger(sold)) {
              continue;
        }


        goodsInfo.push(itemObj);          
    }

    totalIn = inStockTotalCount(goodsInfo);
    totalSold = soldTotalCount(goodsInfo);
    const precision = 2;
    
    let b = (+totalSold[1]) + (+totalIn[1]);
        b = b.toFixed(precision);
    

    console.log("Univermagas pardavime turi..");
    console.log("----------------------------");
    console.log(printList(goodsInfo));
    console.log("----------------------------");
    console.log("Parduotuves suvestine:");
    console.log(`turimu prekiu sandely kiekis ${totalIn[0]} vnt`);
    console.log(`parduotu prekiu sandely kiekis ${totalSold[0]} vnt`);
    console.log(`parduotu prekiu  is sandelio suma uz ${totalSold[1]} ${totalSold[2]}`);
    console.log(`likutis sandely uz ${totalIn[1]} `);
    console.log(`sandelio galima apyvarta uz ${b} ${totalIn[2]}`);
    
    

})();

