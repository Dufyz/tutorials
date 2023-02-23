export abstract class ProductComponent {
    abstract getPrice(): number;

    public add(product: ProductComponent): void { }
    public remove(product: ProductComponent): void { }
}

export class ProductLeaf extends ProductComponent {
    public name: string;
    private price: number
    constructor(name: string, price: number) {
        super()
        this.name = name
        this.price = price
    }

    public getPrice(): number {
        return this.price
    }

    public add(product: ProductComponent): void {
        //
    }

    public remove(product: ProductComponent): void {
        //
    }
}

export class ProductComposite extends ProductComponent {
    private _children: ProductComponent[] = []

    public getPrice(): number {
        return this._children.reduce((sum, child) => sum + child.getPrice(), 0)
    }
    public add(product: ProductComponent): void {
        this._children.push(product)
    }

    public remove(product: ProductComponent): void {
        const productIndex = this._children.indexOf(product)
        if(productIndex !== -1) {this._children.splice(productIndex, 1)}
    }
}

const smartphone = new ProductLeaf('iPhone 13 Pro Max', 1050)
const tablet = new ProductLeaf('iPad Pro', 980)
const notebook = new ProductLeaf('Macbook Air M1', 1200)

const appleKitBox = new ProductComposite()
appleKitBox.add(smartphone)
appleKitBox.add(tablet)
appleKitBox.add(notebook)
console.log(appleKitBox)

console.log('Single product prices:', smartphone.getPrice(), tablet.getPrice(), notebook.getPrice())
console.log('Apple kitBox price:', appleKitBox.getPrice())