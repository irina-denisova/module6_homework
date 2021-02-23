/* 2) Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и
выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.
Обратите внимание на числа 0 и 1. */

const isPrime = num => {
  
  if ( num > 1000 ) {
    return 'exceeds the allowed range of 1000.';

  } else if ( num === 1 || num === 0 ) {
    return 'is not a prime and prime.';

  } else if ( num > 1 ) {
    
    let flag = true;

    for ( let i = 2; i < num; i++ ) {
      
      if ( num % i === 0 ) {
        flag = false; break;
      }
    }
    
    if ( flag === false ) return 'is not prime.';
    else return "is prime.";

  }
}

let clinetNum = +prompt('Enter number.', '')

console.log( 'Client number ' + clinetNum + ': ' + isPrime(clinetNum) )