let arr1 = [1,2,4,6,7,8],
arr2=[1,2,4,5,6,7,8],
arrUnion=[];
arr1.forEach(el=>{
    console.log()
    if(arr2.includes(el)) arrUnion.push(el)
})
let arrOrdenado = arrUnion.sort()
alert(`La union ordenada es ${arrUnion}`)