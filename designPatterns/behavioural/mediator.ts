// define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas interações independentemente.

export type SellerProduct = { id: string; name: string; price: number }

export class Seller {
    private _products: SellerProduct[] = []
    private _mediator?: Mediator

    public showProducts(): void {
        this._products.forEach((product) => console.log(product.id, product.name, product.price),
        )
    }

    public addProduct(...products: SellerProduct[]): void {
        products.forEach((product) => this._products.push(product))
    }

    set mediator(mediator: Mediator) {
        this._mediator = mediator
    }

    public sell(id: string): SellerProduct | void {
        const productIndex = this._products.findIndex((product) => product.id === id)

        if (productIndex === - 1) return

        const product = this._products.splice(productIndex, 1)
        return product[0]
    }
}

export class Mediator {
    private sellers: Seller[] = []

    public addSeller(...sellers: Seller[]): void {
        sellers.forEach((seller) => {
            this.sellers.push(seller);
            seller.mediator = this
        })
    }

    public buy(id: string): SellerProduct | void {
        let product;

        for (let i = 0; i < this.sellers.length; i++) {
            product = this.sellers[i].sell(id)

            if (product) {
                console.log('Aqui está', product.id, product.name, product.price)
                return
            }
        }
        console.log('Não encontrei nenhum produto com o id', id)
    }

    showProducts(): void {
        this.sellers.forEach((seller) => seller.showProducts())
    }
}

export class Buyer {
    constructor(private mediator: Mediator) { }

    viewProducts(): void {
        if (!this.mediator) return
        this.mediator.showProducts()
    }

    buy(id: string): void {
        if (!this.mediator) return
        this.mediator.buy(id)
    }
}

const mediator = new Mediator()
const seller1 = new Seller()
seller1.addProduct({ id: '1', name: 'smartphone', price: 2500 })
seller1.addProduct({ id: '2', name: 'notebook', price: 4500 })

const seller2 = new Seller()
seller2.addProduct({ id: '3', name: 'Carr', price: 25000 })
seller2.addProduct({ id: '4', name: 'Bike', price: 400 })

mediator.addSeller(seller1, seller2)
// mediator.showProducts()

const buyer = new Buyer(mediator)
buyer.viewProducts()
console.log()
buyer.buy('2')
console.log()
buyer.viewProducts()
