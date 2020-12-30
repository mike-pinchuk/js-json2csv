const fs = require('fs')
const JSONtoCSV = require('json2csv').parse
const store_1 = require('./data1.json')
const store_2 = require('./data2.json')
const store_3 = require('./data3.json')

const data = [store_1, store_2, store_3]

let file = []

const controll = data => {
    let array = []
    let filteredArray = []
    data.map((elem, i) => {
        file.push(Object.keys(elem))
        array = array.concat(...file[i])
    })
    for (let str of array) {
        if (!filteredArray.includes(str)) {
            filteredArray.push(str)
        }
    }

    mergeJSON(data, filteredArray)
}

const mergeJSON = (arrayJSON, transferData) => {

    const resourse = arrayJSON.map((elem, i) => {
        for (let keys in elem[i]) {
            if (elem[transferData] !== elem[keys]) {
                elem[keys] = elem[keys]
            }
        }
        return elem

    })

    recoder(resourse, transferData)
}

const recoder = (source, fields) => {
    const csv = JSONtoCSV(source, { fields: fields })
    const writer = fs.createWriteStream('./sample.csv')
    writer.write(csv, err => {
        if (err) {
            console.log('Error')
        }
        console.log('Success')
    })
}

controll(data)







