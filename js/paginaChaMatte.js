function mudarQuantidade(btn, delta) {
  const container = btn.parentElement;
  const input = container.querySelector('.input-qtd');
  let valorAtual = parseInt(input.value);
  
  if (isNaN(valorAtual)) valorAtual = 0;
  
  let novoValor = valorAtual + delta;
  
  // Define o valor mínimo como 1
  if (novoValor < 1) novoValor = 1;
  
  input.value = novoValor;
}