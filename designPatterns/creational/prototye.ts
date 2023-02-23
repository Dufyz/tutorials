interface PersonPrototype {
    clone(): PersonPrototype;
}

interface AdressPrototype {
    street: string;
    number: number;
    zipCode: string;
}

export class Person implements PersonPrototype {
    public name: string;
    public age: number;
    public address: Adress[] = []

    constructor(name: string, age: number, address: Adress) {
        this.name = name
        this.age = age;
        this.address.push(address)
    }

    public clone(): this {
        const newObj = Object.create(this)
        return newObj
    }

    public addAdrees(address: Adress): void {
        this.address.push(address)
    }
}


export class Adress implements AdressPrototype {
    public street: string;
    public number: number;
    public zipCode: string;

    constructor(street: string, number: number, zipCode: string) {
        this.street = street;
        this.number = number;
        this.zipCode = zipCode
    }
}

const person1 = new Person('Guilherme', 18, {'street': 'Av Brasil', 'number': 15, 'zipCode': '00000-000'})
const shallowCopyPerson1 = person1.clone()

// console.log(person1)
console.log(person1.name, person1.age, person1.address)

console.log('')

console.log(shallowCopyPerson1)
shallowCopyPerson1.address = [{'street': 'Av Holanda', 'number': 30, 'zipCode': '11111-111'}]
console.log(shallowCopyPerson1.name, shallowCopyPerson1.age, shallowCopyPerson1.address)
shallowCopyPerson1.name = 'Adrian'
shallowCopyPerson1.age = 19
console.log(shallowCopyPerson1.name, shallowCopyPerson1.age, shallowCopyPerson1.address)

console.log('')
person1.address = [{'street': 'Av England', 'number': 45, 'zipCode': '22222-222'}]
console.log(person1.name, person1.age, person1.address)

//lodash to deep clone
// clonedOjt = _.cloneDeep(obj)