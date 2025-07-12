const prices = []
let count = 0
for (let i = 1000; i<=10000; i+=1000) {
  count++
  prices.push({id: count, price: i + "€"})
}
for (let i = 20000; i<=100000; i+=10000) {
  count++
  prices.push({id: count, price: i + "€"})
}

export default prices