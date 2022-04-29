let totsum=0, totlunghezza=0;
const arrZucchine = [
  {
    nome: "Zucchina nera di Milano",
    peso: 1 ,
    lunghezza: 10
  },
  {
    nome: 'Zucchina romanesca',
    peso: 1,
    lunghezza: 12
  },
  {
    nome: 'Zucchina fiorentina',
    peso: 1,
    lunghezza: 18
  },
  {
    nome: 'Zucchina napoletana',
    peso: 1,
    lunghezza: 13
  },
  {
    nome: 'Zucchina tonda',
    peso: 1,
    lunghezza: 18
  },
  {
    nome: 'Zucchina trombetta',
    peso: 2,
    lunghezza: 30
  }, 
  {
    nome: 'Zucchina gialla golden',
    peso: 34,
    lunghezza: 25
  },
  {
    nome: 'Zucchina ortolana di Faenza',
    peso: 123,
    lunghezza: 20
  },
  {
    nome: 'Zucchina siciliana',
    peso: 23,
    lunghezza: 15
  },
  {
    nome: 'Zucchina bianca triestina',
    peso: 12,
    lunghezza: 12
  },
]
// let sommaPeso = 0;
// function calcolaPeso(arrZucchine){
//   let sommaPeso = 0;
//   for(let i = 0; i<arrZucchine.length; i++)
//   sommaPeso += arrZucchine[i].peso;
//   console.log('la somma del peso delle zucchine è ',sommaPeso +' gr');
//   return sommaPeso;
// }

// const fine = calcolaPeso(arrZucchine);
//================================================================================
//metodo più veloce

for(let zucchina of arrZucchine){
  totsum+= zucchina.peso;
}
console.log(totsum);

// const centimetriOmetri = (convertiLung)=>totlunghezza/100;


for(let zucchina of arrZucchine){
  const{peso, lunghezza}= zucchina; //destrutturazione
  console.log(peso,lunghezza);
  totlunghezza+= lunghezza;
}
console.log('la somma delle lunghezze è '+totlunghezza);

