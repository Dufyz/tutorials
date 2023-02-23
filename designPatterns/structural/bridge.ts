// separa uma abstração da sua implementação, de modo que as duas possam variar independentemente.

export interface DeviceImplementation {
    name: string;
    get power(): boolean;
    set power(powerStatus: boolean);
    get volume(): number;
    set volume(volume: number);
}

export class TvDevice implements DeviceImplementation {
    public readonly name: string;
    private _power: boolean = false
    private _volume: number = 0
    constructor(name: string) {
        this.name = name
    }

    get power(): boolean {
        return this._power
    }

    set power(powerStatus: boolean) {
        this._power = powerStatus
    }

    get volume(): number {
        return this._volume
    }

    set volume(volume: number) {
        this._volume = volume
    }
}

export class RemoteControll {
    protected readonly device: DeviceImplementation;
    constructor(device: DeviceImplementation) {
        this.device = device
    }

    public togglePower(): boolean {
        this.device.power = (!this.device.power)
        return this.device.power
    }

    public get deviceInfo(): any {
        const devideInfo = {name: this.device.name, powerStatus: this.device.power, volume: this.device.volume}
        return devideInfo
    }
}

export class soundRemoteController extends RemoteControll {
    public volumeUp() {
        const volume = this.device.volume
        const newVolume = volume + 1
        this.device.volume = newVolume
    }
    public volumeDown() {
        const volume = this.device.volume
        const newVolume = volume - 1
        this.device.volume = newVolume
    }
}

function clientCode(abstraction: RemoteControll | soundRemoteController): void {
    const abstractionInfo = abstraction.deviceInfo

    abstraction.togglePower()
    // TypeGuard Sound Remote Controller 
    if ('volumeUp' in abstraction) {
        abstraction.volumeUp()
        abstraction.volumeDown()
        abstraction.volumeUp()
    }

    if (!('volumeUp' in abstraction)) {
        console.log(abstractionInfo.name, 'não possui comando de volume')
    }

    console.log(abstraction)
}

const samsungTv = new TvDevice("Smart TV LED 55''")
const tubeTv = new TvDevice("Old Tv")

const samsungTvRemoteController = new soundRemoteController(samsungTv)
const tubeTvRemoteController = new RemoteControll(tubeTv)

clientCode(samsungTvRemoteController)
console.log()
clientCode(tubeTvRemoteController)
