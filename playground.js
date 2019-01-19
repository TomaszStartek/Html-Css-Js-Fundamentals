console.log("Tomasz Startek".toUpperCase())
console.log("JavaScrip jest mocno typowanym jezykiem".replace("mocno", "slabo"))
console.log("JavaScript jest jezykiem wysokiego poziomu.".split(" "))
console.log("Jestem krolem front- endu!".repeat(3))

console.log((23).toString(2))
console.log(23.2345432.toFixed(3))
console.log(parseFloat("54.34test"))
console.log(isFinite("2e134"))

const expenses = 250
const amount = 1000
let imie = "Tomek"
console.log(amount - expenses)

const String1 = "Ala"
const String2 = "kota"
const newString = String1 + " ma " + String2
console.log(newString)
console.log(`${String1} ma ${String2}`)

const subtract = (var1, var2, var3) => (var1 - var2 - var3)
const customerName = (imie, nazwisko) => (`Customer name: ${imie} ${nazwisko}`)

console.log(subtract(8, 6, 2))
console.log(customerName("Tomasz", "Startek"))