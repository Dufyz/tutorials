export class ImageEditor {
    constructor(private filePath: string, private fieFormat: string) { }

    convertFormartTo(format: 'jpg' | 'png' | 'jpeg ' | 'gif'): void {
        this.fieFormat = format
        this.filePath = this.filePath.split('.').slice(0, -1).join('')
        this.filePath += '.' + format
    }

    save(): Readonly<Memento> {
        const date = new Date()

        return new ConcreteMemento(date.toISOString(), date, this.filePath, this.fieFormat)
    }

    restore(memento: Memento): void {
        const concreteMemento = memento as ConcreteMemento
        this.filePath = concreteMemento.filePath
        this.fieFormat = concreteMemento.fileFormat
    }
}

export interface Memento {
    get name(): string;
    get date(): Date;
}

export class ConcreteMemento implements Memento {
    constructor(private _name: string, private _date: Date, private _filePath: string, private _fileFormat: string) { }

    get name(): string {
        return this._name
    }
    get date(): Date {
        return this._date
    }

    get filePath(): string {
        return this._filePath
    }

    get fileFormat(): string {
        return this._fileFormat
    }
}

export class ImageEditorBackupManager {
    private mementos: Memento[] = []
    constructor(private readonly imageEditor: ImageEditor) {}

    backup(): void {
        console.log('Backup: salvando o estado de ImageEditor')
        this.mementos.push(this.imageEditor.save())
    }

    undo(): void {
        const memento = this.mementos.pop();

        if(!memento) {
            console.log('Backuo: no mementos')
            return
        }

        this.imageEditor.restore(memento)
        console.log('Backup: ', memento.name, 'foi restaurado com sucesso')
    }

    showMementos(): void {
        for (const memento of this.mementos) {
            console.log(memento)
        }
    }
}

// const img = new ImageEditor('/media/imagem.png', 'png');
// img.convertFormartTo('jpg');
// console.log(img)

const imageEditor = new ImageEditor('/media/imagem.png', 'png')
const backupManager = new ImageEditorBackupManager(imageEditor)

backupManager.backup()
imageEditor.convertFormartTo('gif')
console.log(imageEditor)
backupManager.undo()
console.log(imageEditor)
