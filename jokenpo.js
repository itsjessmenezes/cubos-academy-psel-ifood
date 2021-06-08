function solucao(joao, andre) {
  // Escreva seu codigo aqui
    const inputJoao = joao.toUpperCase()
    const inputAndre = andre.toUpperCase() 

    if(
      (inputJoao === 'PEDRA' && inputAndre === 'TESOURA')
      ||
      (inputJoao === 'TESOURA' && inputAndre === 'PAPEL') ||
      (inputJoao === 'PAPEL' && inputAndre === 'PEDRA')
      ) {
        console.log('JOAO');
    } else if(
      (inputAndre === 'PEDRA' && inputJoao === 'TESOURA')
      ||
      (inputAndre === 'TESOURA' && inputJoao === 'PAPEL') ||
      (inputAndre === 'PAPEL' && inputJoao === 'PEDRA')
    ) {
      console.log('ANDRE');
    } else {
      console.log('EMPATE');
    }
}
