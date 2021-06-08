function solucao(largura, altura) {
  //seu codigo aqui
    const larg = parseInt(largura);
    const alt = parseInt(altura);

    if(alt > larg) {
      console.log('RETRATO')
    } else if(larg > alt) {
      console.log('PAISAGEM')
    } else {
    console.log('QUADRADA');
    }
  
}