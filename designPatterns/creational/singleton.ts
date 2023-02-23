/* Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela.
Quebra o princípio de responsabilidade única */

interface User{
    name: string,
    age: number,
}

export class MyDataBaseClassic {
    private static _instance: MyDataBaseClassic | null = null;
    private _users: User[] = []

    private constructor() {}

    public static instance(): MyDataBaseClassic {
        if(MyDataBaseClassic._instance === null) {
            MyDataBaseClassic._instance = new MyDataBaseClassic()
        }
        
        return MyDataBaseClassic._instance
    }

    public add(user: User) {
        this._users.push(user)
    }

    public remove(user: User): void{
        const userIndex = this._users.indexOf(user)
        this._users.splice(userIndex, 1)
    }

    public showUsers() {
        return this._users
    }
}

const db1 = MyDataBaseClassic.instance()
const db2 = MyDataBaseClassic.instance()

const user1 = {'name': 'Guilherme', 'age': 17}
const user2 = {'name': 'Simone', 'age': 27}
const user3 = {'name': 'Pedro', 'age': 18}
const user4 = {'name': 'Murilo', 'age': 18}

console.log(`Is db === db2 ? ${db1 === db2}`) // db1 and db2 are the same object

db1.add(user1)
db2.add(user2) // Db2 add user on db1
db1.add(user3)
db1.add(user4)
db2.remove(user3) // db2 also remove user from db1

console.log(db1.showUsers())
