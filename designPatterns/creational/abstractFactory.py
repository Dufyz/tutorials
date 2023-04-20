# Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes
# sem especificar suas classes concretas; 

from abc import ABC, abstractmethod

class AbstractFactory(ABC):
    @abstractmethod
    def create_product_a(self):
        pass
    
class AbstractProductA(ABC):
    @abstractmethod
    def useful_function_a(self) -> str:
        pass
    
class ConcreteProductA1(AbstractProductA):
    def useful_function_a(self) -> str:
        return "The result of the product A1."

class ConcreteFactoryA(AbstractFactory):
    def create_product_a(self) -> ConcreteProductA1:
        return ConcreteProductA1()
        
def client_code(factory: AbstractFactory) -> None:
    product_a1 = factory.create_product_a()
    print(product_a1.useful_function_a())

if __name__ == "__main__":
    print("Client: Testing client code with the Factory type")
    client_code(ConcreteFactoryA())