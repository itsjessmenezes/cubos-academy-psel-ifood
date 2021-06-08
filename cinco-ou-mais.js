function solucao(precos) {
  //seu codigo aqui
    const splitArr = precos;

    const min = Math.min(...splitArr);

    let valor;

    if(splitArr.length >= 5) {
      const sum = splitArr.reduce((prevValue, curValue) => {
        return prevValue + curValue;
      }, 0);
      valor = sum - min;
    }  else {
        const sum = splitArr.reduce((prevValue, curValue) => {
        return prevValue + curValue;
      }, 0);
      valor = sum;
    }

  console.log(valor);
  
}