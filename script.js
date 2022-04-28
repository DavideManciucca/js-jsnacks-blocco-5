const arrZucchine = [
  {
    nome: "Zucchina nera di Milano",
    peso: 1 ,
    lunghezza: '10cm'
  },
  {
    nome: 'Zucchina romanesca',
    peso: 1,
    lunghezza: '12cm'
  },
  {
    nome: 'Zucchina fiorentina',
    peso: 1,
    lunghezza: '15cm'
  },
  {
    nome: 'Zucchina napoletana',
    peso: 1,
    lunghezza: '13cm'
  },
  {
    nome: 'Zucchina tonda',
    peso: 1,
    lunghezza: '8cm'
  },
  {
    nome: 'Zucchina trombetta',
    peso: 2,
    lunghezza: '20cm'
  }, 
  {
    nome: 'Zucchina gialla golden',
    peso: 34,
    lunghezza: '12cm'
  },
  {
    nome: 'Zucchina ortolana di Faenza',
    peso: 123,
    lunghezza: '12cm'
  },
  {
    nome: 'Zucchina siciliana',
    peso: 23,
    lunghezza: '12cm'
  },
  {
    nome: 'Zucchina bianca triestina',
    peso: 12,
    lunghezza: '12cm'
  },
]
// let sommaPeso = 0;
function calcolaPeso(arrZucchine){
  let sommaPeso = 0;
  for(let i = 0; i<arrZucchine.length; i++)
  sommaPeso += arrZucchine[i].peso;
  console.log('la somma del peso delle zucchine è ',sommaPeso +' gr');
  return sommaPeso;
}

const fine = calcolaPeso(arrZucchine);



