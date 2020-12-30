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
    data.map((e, i) => {
        file.push(Object.keys(e))
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

    const resourse = arrayJSON.map((e, i) => {
        for (let keys in e[i]) {
            if (e[transferData] !== e[keys]) {
                e[keys] = e[keys]
            }
        }
        return e
       
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







