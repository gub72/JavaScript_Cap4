const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {//botao adicionar
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista = ""
    for (i = 0; i < pacientes.length; i++) {
        lista += `${i + 1} ${pacientes[i]}\n`
    }
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btUrgencia.addEventListener("click", () => {//botao Urgencia
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em carater de urgencia")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener("click", () => {//botao Atender
    if (pacientes.length == 0) {
        alert("Nao a pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})