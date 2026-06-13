export function mega(quantidade = 6, numeros = []) {
  let qtde = +quantidade;
  if (qtde < 6 && qtde > 60) {
    throw "Quantidade Inválida!";
  }

  if (numeros.length == qtde) {
    return numeros.sort((a, b) => a - b);
  }

  const numeroAleatorio = parseInt(Math.random() * 60) + 1;

  if (!numeros.includes(numeroAleatorio)) {
    return mega(qtde, [...numeros, numeroAleatorio]);
  } else {
    return mega(qtde, numeros);
  }
}
