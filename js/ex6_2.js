const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []//array dos erros do usuario
const sorteado = Math.floor(Math.random()*100)+1//Gerando um numero aleatorio
const chances = 6

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const num = Number(frm.inNum.value)
    if(num==sorteado){//condicao se o numero digitado foi o sorteado
        respDica.innerText = `Parabens vc acertou!!! O numero era ${sorteado}`
        frm.btSubmit.disabled = true //desabilitando o botao Apostar
        frm.btNovo.className = "exibe"//habilitando o botao Jogar novamente
    }else{
        if(erros.includes(num)){
            alert(`Voce ja apostou o numero ${num}.`)
        }else{
            erros.push(num)
            const numErros =erros.length
            const numChances = chances-numErros

            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled=true
                frm.btNovo.className="exibe"
                respDica.innerText = `Game Over!!! Numero sorteado: ${sorteado}`
            }else{
                const dica = num < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um numero ${dica} que ${num}`
            }
        }
    }
    frm.inNum.value = ""
    frm.inNum.focus()
})

frm.btNovo.addEventListener("click", ()=>{
    frm.btNovo.className="oculta"
    location.reload()
})