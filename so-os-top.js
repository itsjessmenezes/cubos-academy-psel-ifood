function solucao(produtos) {
	//seu codigo aqui
      let total = 0;
      let totalProd = 0;
      let totalTopLinha;
      let perc;

      for (let item of produtos) {
        const valor = item.preco;
        if(valor >= 10000) {
          total += item.preco
          totalTopLinha = total;
        } 
          totalProd += item.preco;

      }
          perc = totalTopLinha / totalProd;



    const resposta = {
      totalTop: totalTopLinha,
      percentual: perc
    };

    console.log(resposta);
    
}