# fornece uma interface unifica para um conjunto de interfaces em um subsistema.
# O Façade define uma interface de nível mais alto que torna o subsistema mais fácil de usar.

from __future__ import annotations

class Facade:

    def __init__(self, operacao1: Operacao1, operacao2: Operacao2) -> None:
        self._operacao1 = operacao1
        self._operacao2 = operacao2

    def operation(self): 
        print("Incializando subsistemas de funcionamento")
        self._operacao1.operation_a()
        self._operacao2.operation_a()
        print("Ordem de funcionamento dos subsistemas")
        self._operacao1.operation_n()
        self._operacao2.operation_n()

class Operacao1:
    def operation_a():
        print('Passo A da operação 01')

    def operation_n():
        print('Passo N da operação 01')

class Operacao2:
    def operation_a():
        print('Passo A da operação 02')

    def operation_n():
        print('Passo N da operação 02')

def client_Code(facade: Facade) -> None:
    facade.operation()