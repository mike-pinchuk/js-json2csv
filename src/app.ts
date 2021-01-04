import fs from 'fs'
import { parse } from 'json2csv'
import store_1 from '../data1.json'
import store_2 from '../data2.json'
import store_3 from '../data3.json'

const controll = () => {
    const storage: Array<object> = [store_1, store_2, store_3]

    filteredUniqueName(storage)
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

    convert2csv(data, filteredArray)
}

const convert2csv = (sourse: Array<object>, fields: Array<string>) => {
    const csv: Object = parse(sourse, { fields: fields })

    recorder(csv)
}

const recorder = (sourse: Object) => {
    const writer = fs.createWriteStream('./sample.csv')
    writer.write(sourse, err => {
        if (err) {
            console.log('Error')
        }
        console.log('Success')
    })
}

controll()
