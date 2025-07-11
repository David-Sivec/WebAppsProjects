const kilometers = []
for (let i = 0; i<=100000; i+=10000) {
  kilometers.push({id: i - 4999, kilometer: i + "km"})
}

export default kilometers