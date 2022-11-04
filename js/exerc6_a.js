const frm = document.querySelector("form")
let resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nomeC = frm.inClube.value
    clubes.push(nomeC)
    frm.reset()
    frm.inClube.focus()
    frm.outLista.dispatchEvent(new Event("click"))
})

frm.outLista.addEventListener("click",()=>{
    if(clubes.length==0){
        alert("Nenhum clube digitado.")
        return
    }
    let lista = ""
    for(clube of clubes){
        lista += `${clube}\n`
        resp.innerText = lista
    }

})

frm.outJogos.addEventListener("click",()=>{
    let resumo = ""
    if(clubes.length==0||!(clubes.length%2==0)){
        alert("Nenhum clube digitado ou o numero de times e impar.")
        return
    }
    let arrcop = [].concat(clubes)

    arrcop.forEach(() =>{
        resumo += arrcop.slice(0,-(arrcop.length-1)) + " x " + arrcop.slice(-1) + "\n"
        arrcop.shift()
        arrcop.pop()
        
    })

    if(!(arrcop.length==0)){
        resumo += arrcop.slice(0,-(arrcop.length-1)) + " x " + arrcop.slice(-1) + "\n"
    }
    resp.innerText = resumo
})