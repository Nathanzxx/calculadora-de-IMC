const seuimc = () => {
    let peso = Number(document.querySelector('#peso').value)
    let altura = Number(document.querySelector('#altura').value)

    let imc
    imc = peso / (altura ** 2)
    if (imc < 16.9) {
        resultado.innerHTML = `o seu imc é ${imc.toFixed(2)} esta abaixo do peso saudavel`
    } else if (imc <= 18.4) {
        resultado.innerHTML = `o seu imc é ${imc.toFixed(2)} esta um pouco abaixo do peso saudavel `
    } else if (imc <= 24.9) {
        resultado.innerHTML = `o seu imc é ${imc.toFixed(2)} esta com o peso saudavel`
    } else if (imc <= 29.9) {
        resultado.innerHTML = `o seu imc é ${imc.toFixed(2)} voce esta com o peso um pouco acima do saudavel`
    } else if (imc <= 34.9) {
        resultado.innerHTML = `o seu imc é ${imc.toFixed(2)} obesidade grau 1`
    } else if (imc <= 40) {
        resultado.innerHTML = `o seu imc é ${imc.toFixed(2)} obesidade grau 2`
    } else {
        resultado.innerHTML = `o seu imc é ${imc.toFixed(2)} obesidade grau 3`
    }

}

let resultado = document.querySelector('#resultado')

let calcularimc = document.querySelector('#calcularimc')
calcularimc.addEventListener('click', seuimc)

// calculoIMC(peso, altura)
