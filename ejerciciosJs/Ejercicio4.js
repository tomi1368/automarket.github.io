let arr = [],
cantNumeros = prompt("Cuantosa numeros quieres poner")
for (let i = 0; i<cantNumeros;i++){
    let numIngresado = prompt(`Ingrese el numero ${i + 1}`)
    if (isNaN(numIngresado) == true) break
    arr.push(numIngresado)
}
let arrOrdenado = arr.sort()
alert(`Los numeros ordenados ${arrOrdenado}`)