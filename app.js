const fs = require('fs')
const JSONtoCSV = require('json2csv').parse
const store_1 = require('./data1.json')
const store_2 = require('./data2.json')
const store_3 = require('./data3.json')

const data = [store_1, store_2, store_3]

let file = []

const recoder = (source, fields) => {
    for(let i = 0; i < source.length; i++) {
        const csv = JSONtoCSV(source[i], {fields: fields})
        fs.writeFileSync('./testing.csv', csv)
    }
}
    
const controll = data => {
        let array = []
        data.map((e, i) => {
            file.push(Object.keys(e))
            array = file[0].concat(file[i])    
        })

        recoder(data, array)
}

controll(data)







