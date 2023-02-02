class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const product1 = new Product('caneta', 1);
const product2 = new Product('caneta', 2);

console.log(JSON.stringify(product1) === JSON.stringify(product2))