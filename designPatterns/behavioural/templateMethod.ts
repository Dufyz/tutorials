export abstract class TemplateMethodBaseClass {
    readonly templateMethod = (): void => {
        this.stepA()
        this.hook()
        this.stepB()
    }

    abstract stepA(): void
    abstract stepB(): void
    hook(): void {}
}

export class ConcreteTemplateMethod extends TemplateMethodBaseClass {
    stepA(): void {
        console.log('A - stepA')
    }

    stepB(): void {
        console.log('A - stepB')
    }

    hook(): void {
        console.log('A - hook used')
    }
}

const concrete = new ConcreteTemplateMethod()
concrete.templateMethod()