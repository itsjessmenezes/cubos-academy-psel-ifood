function solucao(ano) {
	//seu codigo aqui
    const year = parseInt(ano);

if(year > 2021) {
  const copa = year % 1930;
  const jogos = year % 1896;
  if(copa % 4 === 0 || copa === 2022) {
    console.log('COPA');
  } else if( jogos % 4 === 0 || jogos === 2024) {
    console.log('JOGOS');
  } else {
    console.log('MEH');
  }
}
}