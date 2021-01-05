import fs from 'fs'
import { parse } from 'json2csv'
import store_1 from '../data1.json'
import store_2 from '../data2.json'
import store_3 from '../data3.json'

const storage: Array<object> = [store_1, store_2, store_3]

const controll = (data: Array<object>) => {
    const fields = filteredUniqueName(data)
    const csv = convert2csv(data, fields)
    recorder(csv, 'example')
}

const filteredUniqueName = (data: Array<object>) => {
    let array: Array<string> = []
    const filteredArray: Array<string> = []

    data.forEach(elem => {
        array = array.concat(...Object.keys(elem))
    })

    for (let str of array) {
        if (!filteredArray.includes(str)) {
            filteredArray.push(str)
        }
    }

    return filteredArray
}

const convert2csv = (sourse: Array<object>, fields: Array<string>) => {
    const csv: Object = parse(sourse, { fields: fields })

    return csv
}

const recorder = (sourse: Object, name: string): void => {
    const writer = fs.createWriteStream(`./${name}.csv`)
    writer.write(sourse, err => {
        if (err) {
            console.log('Error')
        }
        console.log('Success')
    })
}

controll(storage)
