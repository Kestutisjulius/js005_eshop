const jsonParse = require('./lib/jsonParse.js');
const readFile = require('./lib/readFile.js');
const printList = require('./lib/printList.js');



(async () => {

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
            continue;}        
        goodsInfo.push(itemObj);          
    }


    console.log("Univermagas pardavime turi..");
    console.log("----------------------------");
    console.log(printList(goodsInfo));
    
    
    console.log("----------------------------");

})();

