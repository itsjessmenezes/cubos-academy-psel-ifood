function solucao(letra, palavras) {
	//seu codigo aqui
let escolhaLetra = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

//console.log(escolha);

//const escolhaPalavra = crianca[0].palavras[0];

let todasPalavras = palavras;


//console.log(escolhaPalavra)

//const splitPalavra = escolhaPalavra.split('')[0];


let qnt = 0;
for(let item of todasPalavras) {
  const fruta = item;
  const splitFruta = item.split('')[0];
  if(splitFruta !== escolhaLetra) {
    qnt++;
  }

}
console.log(qnt)
    
}