/* 1) Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так
далее. На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию,
 проанализируйте синтаксис. */

const arr1 = [0, null, NaN, 0, 1, 2, 4, "str"];

function calcTypeArrayElements( arr ) {

  let myMap = new Map();
  let odd = 0;
  let even = 0;
  let zero = 0;

  arr.forEach( item  => {
  
    if ( Number.isFinite( item ) ) {
      
      if  ( item === 0) {
        zero++;
      } else if ( item % 2 === 0 ) {  
        even++; 
      } else { odd++; } 
    }
  });

  myMap.set('Odd', odd);
  myMap.set('Even', even);
  myMap.set('Zero', zero);

  return myMap;
}

let result = calcTypeArrayElements( arr1 );

for (var [key, value] of result) {
  console.log('Key: ' + key + ', Value: ' + value);
}
