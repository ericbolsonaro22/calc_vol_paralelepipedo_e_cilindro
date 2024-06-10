let resposta = document.getElementById('resposta')

function calc_vol_cilindro(){
    let altura = Number (document.getElementById('altura').value)
    let raio = Number (document.getElementById('raio').value)

    console.log("alt = " + altura + " raio = " + raio ) 

    let volume = (Math.PI)* raio * raio * altura

    console.log("O volume do Cilindro é = " + volume + " m3")

    // Saída de dados para o usuário
    resposta.innerHTML = "O volume do Cilindro é = " + volume.toFixed(2) + " m3"
    resposta.style.fontSize = "5rem"
    resposta.style.color= "black"
    resposta.style.fontFamily = "System UI"
    resposta.style.transition = "10s"
}