export class ShoppingOrder {
    private _state: ShoppingOrderState = new OrderPending(this);

    get state(): ShoppingOrderState {
        return this._state
    }

    set state(state: ShoppingOrderState) {
        this._state = state
        console.log('O estado do pedido agora é', this.stateName)

    }

    get stateName(): string {
        return this.state.name
    }

    public approvePayment(): void {
        this.state.approvePayment()
    }

    public rejectPayment(): void {
        this.state.rejectPayment()
    }

    public waitPayment(): void {
        this.state.waitPayment()
    }

    public shipOrder(): void {
        this.state.shipOrder()
    }
}

export interface ShoppingOrderState {
    get name(): string;
    approvePayment(): void;
    rejectPayment(): void;
    waitPayment(): void;
    shipOrder(): void;
}

export class OrderPending implements ShoppingOrderState {
    private _name = 'OrderPending';
    constructor(private order: ShoppingOrder) { }

    get name(): string {
        return this._name
    }
    public approvePayment(): void {
        this.order.state = new OrderApproved(this.order)
        console.log('O pedido já está no estado de pagamento aprovado.')
    }
    public rejectPayment(): void {
        this.order.state = new OrderRejected(this.order)
    }
    public waitPayment(): void {
        console.log('O pedido já está no estado de pagamento pendente.')
    }
    public shipOrder(): void {
        console.log('Não posso enviar o pedido com pagamento pendente')
    }
}

export class OrderApproved implements ShoppingOrderState {
    private _name = 'OrderApproved';
    constructor(private order: ShoppingOrder) { }

    get name(): string {
        return this._name
    }
    public approvePayment(): void {
        console.log('O pedido já está no estado de pagamento aprovado.')

    }
    public rejectPayment(): void {
        this.order.state = new OrderRejected(this.order)
    }
    public waitPayment(): void {
        this.order.state = new OrderPending(this.order)
        console.log('O pedido já está no estado de pagamento pendente.')
    }
    public shipOrder(): void {
        console.log('Enviando o pedido para o cliente.')
    }
}

export class OrderRejected implements ShoppingOrderState {
    private _name = 'OrderRejected';
    constructor(private order: ShoppingOrder) { }

    get name(): string {
        return this._name
    }
    public approvePayment(): void {
        console.log('Não posso aprovar o pagamento porque o pedido foi recusado.')
    }
    public rejectPayment(): void {
        console.log('Pedido já recusado.')
    }
    public waitPayment(): void {
        console.log('Pagamentos recusados não podem ser movidos para pendente.')
    }
    public shipOrder(): void {
        console.log('Não posso enviar um pedido com pagamento recusado')
    }
}


const order = new ShoppingOrder()
order.approvePayment()
// order.rejectPayment()
order.shipOrder()
order.waitPayment()
order.approvePayment()
order.shipOrder()