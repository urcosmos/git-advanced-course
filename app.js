const cowsay = require('cowsay');

console.log(
  cowsay.think({
    text: `
testing git commit -a
    `,
  })
);

let a = 10;
console.log(a, a, a, a);

console.log('Случайная ошибка, которая пошла в коммит');
console.log('А это исправление ошибки в коммите');
console.log('И еще раз. ');

console.log(12);

console.log('Опечатка');

/**
 * Вася вносит краш-изменения
 *
 *
 *
 * Но тут все исправляет.
 */

console.log('Это для второго коммита');

console.log('Совместить с опечаткой');
console.log('И еще раз');

// Add some comments

console.log('HEAD moved to commit 4d35261');

console.log('Add test_44 branch');
