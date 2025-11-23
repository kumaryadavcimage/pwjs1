const firstName="Hello"
const lastName='Hitesh Choudhory'
console.log(`My firstName ${firstName} is and my lastName is ${lastName}`)

const userName= new String('Hitesh Choudhory')
console.log(userName[0])
console.log(userName.length)
console.log(userName.charAt(0))
console.log(userName.substring(0,4))

let email="   hc@gmail.com    "
console.log(email.trim())
let emailTwo="hc@gmail.com"
console.log(emailTwo.replace('hc','hitesh'))
console.log(email.includes('c'))
// method all runs as parenthecis ()
console.log(emailTwo.toUpperCase())