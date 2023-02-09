const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {
    const Imc = (peso / (altura * altura)).toFixed(1);
    let classificação = '';
    if (Imc < 18.5) {
      classificação = 'abaixo do peso';
    } else if (Imc < 25) {
      classificação = 'com o peso ideal. Parabéns!!!';
    } else if (Imc < 30) {
      classificação = 'levemente acima do peso';
    } else if (Imc < 35) {
      classificação = 'com obesidade grau I';
    } else if (Imc < 40) {
      classificação = 'com obesidade grau II';
    } else {
      classificação = 'com obesidade grau III. Cuidado!!!';
    }
    resultado.textContent = `${nome} seu Imc é ${Imc} e você está ${classificação}`;
  } else {
    resultado.textContent = 'Preencha os campos!!!';
  }
}
calcular.addEventListener('click', imc);
