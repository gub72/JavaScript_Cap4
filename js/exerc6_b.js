const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const resV = document.querySelector("h3")
let num = []
let resumo = ""

function listar() {
    resumo += "Numeros: " + num.join(", ")
    resp.innerText = resumo
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    resumo = ""
    let aux = Number(frm.inNum.value)
    num.push(aux)
    if (num.length == 1) {
        resp.innerText = "Numeros: " + num
    }
    listar()
})

frm.btnVerifica.addEventListener("click", () => {
    if (num.length == 1) {
        alert("Nao e possivel analisar os numero pois contem apenas 1 numero.")
        return
    }
    for(i=0;i<num.length;i++){
        if (num[i] > num[i + 1]) {
            resumo = ""
            listar()
            resV.innerText = "Atencao... Numeros nao estao em ordem crescente."
            return
        }  
    }
    resV.innerText = "Os numeros estao em ordem crescente."
})