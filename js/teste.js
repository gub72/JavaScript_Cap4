let arr = []
let arrcop = []
let resumo = ""
arr.push(1,2,3,4)
//[4,5,6,7]
arrcop = [].concat(arr)

arrcop.forEach(() =>{
    resumo = `${arrcop.slice(0,-(arrcop.length-1))} x ${arrcop.slice(-1)}`
    console.log(resumo)
    arrcop.shift()
    arrcop.pop()
    
})

if(!(arrcop.length===0)){
    resumo = `${arrcop.slice(0,-(arrcop.length-1))} x ${arrcop.slice(-1)}`
    console.log(resumo)
}
