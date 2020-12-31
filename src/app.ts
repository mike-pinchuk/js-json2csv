import fs from 'fs'
import { parse } from 'json2csv'
import store_1 from '../data1.json'
import store_2 from '../data2.json'
import store_3 from '../data3.json'

const data: Array<object> = [store_1, store_2, store_3]

let file: Array<string[]> = []

const controll = (data: Array<object>) => {
    let array: Array<string> = []
    let filteredArray: Array<string> = []

    data.map((elem, i) => {
        file.push(Object.keys(elem))
        array = array.concat(...file[i])
    })

    for (let str in array) {
        if (!filteredArray.includes(str)) {
            filteredArray.push(str)
        }
    }

    mergeJSON(data, filteredArray)
}

const mergeJSON = (arrayJSON: Array<any>, transferData: any) => {
    const resourse: Object = arrayJSON.map((elem, i) => {
        for (let keys in elem[i]) {
            if (elem[transferData] !== elem[keys]) {
                elem[keys] = elem[keys]
            }
        }
        return elem
    })

    recorder(resourse, transferData)
}

const recorder = (sourse: Object, fields: Array<string>) => {
    const csv: Object = parse(sourse, { fields: fields })
    const writer = fs.createWriteStream('./sample.csv')
    writer.write(csv, err => {
        if (err) {
            console.log('Error')
        }
        console.log('Success')
    })
}

console.log(data)