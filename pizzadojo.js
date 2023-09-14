function pizzaOven (tipoCorteza, tipoSalsa, quesos, salsas, ingredientes) {
  const pizza = {}
  pizza.tipoCorteza = tipoCorteza
  pizza.tipoSalsa = tipoSalsa
  pizza.quesos = quesos
  pizza.salsas = salsas
  pizza.ingredientes = ingredientes
  return pizza
}

console.log(pizzaOven(
  "estilo Chicago", 
  "tradicional",
  ["mozzarella"],
  [],
  ["pepperoni", "salchicha"]
))

console.log(pizzaOven(
  "lanzada a mano" , 
  "marinara" , 
  ["mozzarella", "feta"],
  [],
  ["champiñones", "aceitunas", "cebollas"]
))

console.log(pizzaOven(
  "a la piedra",
  "salsa blanca",
  ['mozzarela', 'provolone'],
  ['pesto', 'tomate'],
  ['rucula', 'champinoes', 'aceitunas']
))

console.log(pizzaOven(
  "bordes de queso",
  "tradicional",
  ['mozzarela'],
  ['pesto', 'extra salsa de tomate'],
  ['champinones', 'carne de soya']
))