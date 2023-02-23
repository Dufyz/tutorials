// define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.

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