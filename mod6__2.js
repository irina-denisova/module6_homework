/* 2) Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и
выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.
Обратите внимание на числа 0 и 1. */

function isPrime( num ) {

  let flag = true;
  
  if ( num > 1000 ) {
    console.log( 'The number exceeds the allowed range of 1000.' );

  } else if ( num === 1 || num === 0 ) {
    console.log( 'The number is not a prime and prime.' );

  } else if ( num > 1 ) {
    
    console.log('num:' + num );
    
    for ( let i = 2; i < num; i++ ) {
      
      if ( num % i === 0 ) {
        count++; break;
      }
    }

  }
  
  if ( count > 0 ) return 'Not prime.';
    else return 'prime.';

  
}

let clinetNum = +prompt('Enter number.', '')

console.log( 'Number = ' + clinetNum + ': ' + isPrime(clinetNum) )