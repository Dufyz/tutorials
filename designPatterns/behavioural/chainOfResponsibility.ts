abstract class ObjetoDaCadeia {
    protected proximo: ObjetoDaCadeia | null = null


    adcProximo(proximo: ObjetoDaCadeia): ObjetoDaCadeia {
        this.proximo = proximo
        return proximo
    }

    trata(requisicao: string) : string {
        if(this.proximo) return this.proximo.trata(requisicao)
        return requisicao
    }
}

class ObjA extends ObjetoDaCadeia {
    trata(requisicao: string): string {
        return super.trata(requisicao + 'ObjA, ')
    }
}

class ObjB extends ObjetoDaCadeia {
    trata(requisicao: string): string {
        return super.trata(requisicao + 'Objb, ')
    }
}

const objetoA = new ObjA()
objetoA.adcProximo(new ObjB()).adcProximo(new ObjB()).adcProximo(new ObjA())
console.log(objetoA.trata('Inicial, '))