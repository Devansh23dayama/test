const inventory = [
  { id: 1, name: "Tablet", inStock: true },
  { id: 2, name: "Laptop", inStock: false },
  { id: 3, name: "Headphones", inStock: false },
  { id: 4, name: "Charger", inStock: true }
];
 const  outofstock= inventory.filter((i)=> i.inStock = false);
console.log(outofstock);
