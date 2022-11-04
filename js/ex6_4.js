const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const crianca = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    crianca.push({ nome, idade })
    frm.reset()
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event("click"))//fara a funcao de clicar no botao"Listar todos"
})

frm.btListar.addEventListener("click", () => {
    if (crianca.length == 0) {
        alert("Nao a criancas na lista.")
        return
    }
    let lista = ""
    for(const criancas of crianca){
        const {nome,idade} = criancas
        lista += nome + " - " + idade + " anos\n"
    }
    resp.innerText = lista
})

frm.btResumir.addEventListener("click", () => {
    if (crianca.length == 0) {
        alert("Nao a criancas na lista.")
        return
    }
    const copia = [...crianca]
    console.log(copia)
    copia.sort((a, b) => a.idade - b.idade)
    console.log(copia)
    let resumo = ""
    let aux = copia[0].idade
    let nomes = []
    for (const criancas of copia) {
        const { nome, idade } = criancas
        if (idade == aux) {
            nomes.push(nome)
        } else {
            resumo += aux + " ano(s): " + nomes.length + " crianca(s)"
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade
            nomes = []
            nomes.push(nome)
        }
    }
    resumo += aux + " ano(s): " + nomes.length + " crianca(s)"
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo
})