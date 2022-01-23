import {Validator} from "./index"

const truthy = [
    'aaa',
    'a123a',
    'aa-a_d'
]

const falsy = [
    '1234',
    'asd2345',
    '-jjj12',
    'fffs_',
    'dss0'
]


for (let key in truthy) { 
    const truthyValidator = new Validator(truthy[key])
    test('test ', () => {
        expect(truthyValidator.validateUsername()).toEqual(true);
    });
    
}

for (let key in falsy) {
    const falsyValidator = new Validator(falsy[key])
    test('test ', () => {
        expect(falsyValidator.validateUsername()).toEqual(false);
    });
}