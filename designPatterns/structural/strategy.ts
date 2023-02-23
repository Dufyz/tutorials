export interface ECommerceProductProtocol {
    name: string;
    price: number;
}

export class ECommerceShoppingCart {
    private _products: ECommerceProductProtocol[] = []
    private _discount: number = 0
    private _dicountStrategy: DiscountStrategy = new DiscountStrategy()

    public addProduct(...product: ECommerceProductProtocol[]): void {
        product.forEach((product) => this._products.push(product))
    }

    get products(): ECommerceProductProtocol[] | [] {
        return this._products
    }

    public totalPrice(): number {
        return this._products.reduce((sum, product) => sum + product.price, 0)
    }

    public totalWithDicount(): number {
        return this._dicountStrategy.getDiscount(this)
    }

    set discount(discount: DiscountStrategy) {
        this._dicountStrategy = discount
    }
}

export class DiscountStrategy {
    protected _discount = 0;

    getDiscount(cart: ECommerceShoppingCart): number {
        return cart.totalPrice()
    }
}

export class DefaultDiscount extends DiscountStrategy {
    protected _discount = 0;

    getDiscount(cart: ECommerceShoppingCart): number {
        const totalPrice = cart.totalPrice()
        if (totalPrice >= 100 && totalPrice < 200) {
            this._discount = 10
        } else if (totalPrice >= 200 && totalPrice < 300) {
            this._discount = 20;
        } else if (totalPrice >= 300) {
            this._discount = 30;
        }

        return totalPrice - (totalPrice * (this._discount / 100))
    }
}

const shoppinCart = new ECommerceShoppingCart()
shoppinCart.discount = new DefaultDiscount()
shoppinCart.addProduct({ name: 'notebook', price: 2500 })
shoppinCart.addProduct({ name: 'smartphone', price: 3500 })
console.log(shoppinCart.totalPrice())
console.log(shoppinCart.totalWithDicount())