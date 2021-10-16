const alAzar = ()=>{
    let arr =[],
    numeroDeNumeros = prompt("Cuantos numeros quiere poner");
    if (isNaN(numeroDeNumeros) == true) return "No es un numero"
    for(let i = 0; i<numeroDeNumeros; i++){
        let numAzar = Math.floor(Math.random() * 100)
        arr.push(numAzar) 
    }
    console.log(arr)
}

alAzar()