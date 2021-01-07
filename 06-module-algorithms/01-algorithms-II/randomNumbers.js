let serie = [];

var randomPick = (n, min, max) => {
    let num = 0;
    let i = 0;
  while (i < n){
       i++;
      num = Math.random() * (max - min) + min;
      num = Math.round(num);
      serie.push(num);
  }
}


randomPick(7,10,20);
console.log(serie);