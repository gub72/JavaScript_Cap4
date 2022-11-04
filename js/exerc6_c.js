const frm = document.querySelector("form")
const resp = document.querySelector("pre")
let candidato = []
let resumo=""
let aux = []
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)
    candidato.push({ nome, acertos })
    frm.reset()
    frm.inCandidato.focus()
    frm.btnListar.dispatchEvent(new Event("click"))//fara a funcao de clicar no botao"Listar todos"
})

frm.btnListar.addEventListener("click",()=>{
    resumo=""
    if(candidato.length===0){
        alert("Nao a nenhum candidato na lista.")
        return
    }
    for(copia of candidato){
        const {nome,acertos} = copia
        resumo+= nome + " - " + acertos + " acertos\n"
    }
    resp.innerText = resumo
})

frm.btnAprovados.addEventListener("click",()=>{
    resumo=""
    if(candidato.length===0){
        alert("Nao a nenhum candidato na lista.")
        return
    }
    const media = Number(prompt("Numero de Acertos para aprovacao?"))
    for(copia of candidato){
        const {nome,acertos} = copia
        if(acertos>=media){
            // resumo+= nome + " - " + acertos + " acertos\n"
            aux.push({ nome, acertos })
        }
    }
    aux.sort((a,b)=>{
        return a.acertos-b.acertos
    })
    aux.reverse()
    for(copia of aux){
        const {nome,acertos} = copia
        resumo+= nome + " - " + acertos + " acertos\n"
    }
    resp.innerText=resumo
})