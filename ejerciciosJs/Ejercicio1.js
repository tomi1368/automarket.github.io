const cantidadMayusculas = (frase)=>{
    if(isNan(frase) == false) return "No enviar numero"
    let contador= 0,
    palabra = frase.split(" ").join("")
    console.log(palabra)
    for(let i=0; i<palabra.length ; i++){
        let letra = palabra[i]
        console.log(palabra[i])
        if (letra.toUpperCase() == palabra[i]) contador+= 1
    }
    alert(`La frase tiene ${contador} mayusculas`)
}

cantidadMayusculas(prompt("Ingrese la frase"))






