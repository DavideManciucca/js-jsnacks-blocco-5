const zucc15su=[];
const zucc15giu=[];
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
];

for(let i in arrZucchine){
  const zucchina= arrZucchine[i];
  (zucchina.lunghezza >= 15)? zucc15su.push(zucchina) : zucc15giu.push(zucchina);
console.log(zucchina);
}
let peso15su=0;
let peso15giu =0;
for(let zucchina  of zucc15su){
  peso15su=+ zucchina.peso;
}

for(let zucchina of zucc15giu){
  peso15giu+= zucchina.peso;
}
console.log('il peso delle zucchine lunghe è ',peso15su)
console.log('il peso delle zucchine corte è ',peso15giu)
