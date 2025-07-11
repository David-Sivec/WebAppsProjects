const registration = [
  {id: 1, year: ">1970"}
]
for (let i = 1970; i <= 2025; i++) {
  registration.push({id: i - 1968, year: i})
}

export default registration