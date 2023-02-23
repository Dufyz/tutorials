/* representa uma operação a ser executada sobre os elementos da estrutura de um objeto. 
O visitor permite que você defina uma nova operação sem mudar as classes dos elementos sobre os quais 
opera. */

export abstract class VisitableProduct{
    constructor(protected _name: string, protected _price: number) {}

    get name() {
        return this._name
    }

    get price() {
        return this._price
    }

    abstract priceWithTaxes(visitor: TaxVisitorProtocol): number
}

export class Food extends VisitableProduct {
    constructor(protected _price: number) {
        super('Food', _price)
    }

    priceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculteTaxesForFood(this)
    }
}

export class AlcoholicDrink extends VisitableProduct {
    constructor(protected _price: number) {
        super('AlcoholicDrink', _price)
    }

    priceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculteTaxesForAlcoholicDrink(this)
    }
}

export class Cigarette extends VisitableProduct {
    constructor(protected _price: number) {
        super('Cigarette', _price)
    }

    priceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculteTaxesForCigarette(this)
    }
}

export interface TaxVisitorProtocol {
    calculteTaxesForFood(food: Food): number
    calculteTaxesForCigarette(cigarette: Cigarette): number
    calculteTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number
}

export class BrazilTaxVisitor implements TaxVisitorProtocol {
    calculteTaxesForFood(food: Food): number {
        return food.price + (food.price * 0.05)
    }
    calculteTaxesForCigarette(cigarette: Cigarette): number {
        return cigarette.price + (cigarette.price * 1.5)
    }
    calculteTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
        return alcoholicDrink.price + (alcoholicDrink.price * 0.5)
    }
}

const mcDonalds = new Food(10)
const malboro = new Cigarette(3)
const greenLabel = new AlcoholicDrink(100)

const brazilTaxVisitor = new BrazilTaxVisitor()

const cart = [mcDonalds, malboro, greenLabel]
const totalCartPrice = cart.reduce((sum, item) => item.price + sum, 0)
const totalWithBrazilTaxesCartPrice = cart.reduce((sum, item) => item.priceWithTaxes(brazilTaxVisitor) + sum, 0)
console.log(totalCartPrice, totalWithBrazilTaxesCartPrice)