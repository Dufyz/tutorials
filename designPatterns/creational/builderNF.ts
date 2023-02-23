//Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações;

interface CarBuilderProtocol {
    produceMotor(): void,
    produceParts(): void,
    produceDetails(): void
}

class CarBuilder implements CarBuilderProtocol {
    private _product: CarProduct = new CarProduct() //something of type car?
    constructor() {
        this.reset()
    }

    private reset() {
        this._product = new CarProduct()
    }

    public produceMotor(): void {
        //
    }

    public produceParts(): void {
        //
    }

    public produceDetails(): void {
        //
    }

    public product() {
        const result = this._product
        this.reset()
        return result
    }

}

class CarProduct {
    private _parts: string[] = []

    public listParts() {
        console.log(`Product parts: ${this._parts.join(', ')}\n`)
    }
}

const carBuilder = new CarBuilder()
console.log(carBuilder)