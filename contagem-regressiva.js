function solucao(numero) {
	//seu codigo aqui
      const num = parseInt(numero);

      for (let i = num; i >= 0; i--) {
        console.log(i);
        if(i === 0) {
          console.log('KABUM');
        }
      }
    
}