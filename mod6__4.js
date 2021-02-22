// 4) Напишите функцию, которая принимает два числа. 
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(5, 15);