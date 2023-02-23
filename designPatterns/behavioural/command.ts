// encapsula uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas.

export class SmartHouseLight {
    private isOn = false
    private intensity = 50;

    public name: string;

    constructor(name: string) {
        this.name = name
    }

    public get powerStatus(): string {
        return this.isOn ? 'On' : 'Off'
    }

    public on(): boolean {
        this.isOn = true;
        return this.isOn
    }

    public off(): boolean {
        this.isOn = false;
        return this.isOn
    }

    public increaseIntensity(): number {
        if (this.intensity >= 100) return this.intensity
        this.intensity++
        return this.intensity
    }

    public decreaseIntensity(): number {
        if (this.intensity <= 0) return this.intensity
        this.intensity--
        return this.intensity
    }
}


export interface SmartHouseCommand {
    execute(): void;
    undo(): void;
}


export class LightPowerCommand implements SmartHouseCommand{
    private readonly light: SmartHouseLight
    constructor(light: SmartHouseLight) {
        this.light = light
    }

    execute(): void {
        this.light.on()
        console.log(`${this.light.name} is ${this.light.powerStatus}`)
    }

    undo(): void {
        this.light.off()
        console.log(`${this.light.name} is ${this.light.powerStatus}`)
    }
}

export class LightIntensityCommand implements SmartHouseCommand{
    private readonly light: SmartHouseLight
    constructor(light: SmartHouseLight) {
        this.light = light
    }

    execute(): void {
        this.light.increaseIntensity()
        console.log(`${this.light.name} is increasing light intensity`)
    }

    undo(): void {
        this.light.decreaseIntensity()
        console.log(`${this.light.name} is decreasing light intensity`)
    }
}

export class SmartHouseApp {
    private commands: { [k: string]: SmartHouseCommand} = {}

    public addComand(key: string, command: SmartHouseCommand) :void {
        this.commands[key] = command
    }

    public executeCommand(key:string): void {
        this.commands[key].execute()
    }

    public undoCommand(key:string): void {
        this.commands[key].undo()
    }
}

const bedRoomLight = new SmartHouseLight('Bedroom light')
const lightPowerCommand = new LightPowerCommand(bedRoomLight)
const lightIntensityCommand = new LightIntensityCommand(bedRoomLight)

const smartHouseApp = new SmartHouseApp()
smartHouseApp.addComand('btn-1', lightPowerCommand)
smartHouseApp.addComand('btn-2', lightIntensityCommand)

smartHouseApp.executeCommand('btn-1')
smartHouseApp.executeCommand('btn-2')
smartHouseApp.undoCommand('btn-2')
smartHouseApp.undoCommand('btn-1')

