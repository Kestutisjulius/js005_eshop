// funkcija kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function printList(list) {
    let table = [];
    let i = 0;
    for (const item of list) {
        if (typeof item.price !== 'object' || typeof item.sold !== 'number') {continue;}
      table.push(`${++i}). ${item.name}: ${item.price.value} ${item.price.currency}; parduota: ${item.sold}; likutis: ${item.inStock};`);
    }
    return table.join('\n');
}

module.exports = printList;