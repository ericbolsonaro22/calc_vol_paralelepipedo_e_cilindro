let resposta = document.getElementById('resposta')

function calcula_volume(){
    let altura = Number (document.getElementById('altura').value)
    let larg = Number (document.getElementById('larg').value)
    let comp = Number (document.getElementById('comp').value)

    console.log("alt = " + altura + "larg = " + larg + "comp = " + comp)

    let vol = altura * larg * comp

    console.log("O volume do paralelepípedo é = " + vol + "m3")

    // Saída de dados para o usuário
    resposta.innerHTML = "O volume do paralelepípedo é = " + vol + " m3"
    resposta.style.fontSize = "5rem"
    resposta.style.color= "black"
    resposta.style.fontFamily = "System UI"
    resposta.style.transition = "10s"
}