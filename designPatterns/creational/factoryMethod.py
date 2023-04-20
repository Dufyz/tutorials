# Definir uma interface para criar um objeto,
# mas deixar as subclasses decidirem qual classe a ser instanciada.
# O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses;

from abc import ABC, abstractmethod

class AbstractCreator(ABC):
    @abstractmethod
    def factory_method(self):
        pass
    
    def some_method(self) -> str:
        product = self.factory_method()
        result = f"Creator: Abstract creator {product.operation()}"
        return result

class AbstractProduct():
    @abstractmethod
    def operation(self) -> str:
        pass

class ConcreteCreatorA(AbstractCreator):
    def factory_method(self) -> AbstractProduct:
         return ConcreteProductA()

class ConcreteProductA(AbstractProduct):
    def operation(self) -> str:
        return "Result of the ConcreteProductA"
            
def client_code(creator: AbstractCreator) -> None:
    print("Client: classe criadora: ")
    print(creator.some_method())
    
if __name__ == "__main__":
    print("App: Concrete Creator 01:")
    client_code(ConcreteCreatorA())
            
            
    