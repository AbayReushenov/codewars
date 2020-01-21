# Jasmine

## Работа с тестами через node.js

### Перед установкой
Убедись, что у тебя установлен `npx`. Если нет, то установи его командой `npm install -g npx` или `sudp npm install -g npx`.
<!-- изучи [мануал по npx](how-to-use-npx.md) -->


### Установка

- Если проект новый, то инициализируй файл `package.json` командой `npm init -y`
- Установи jasmine в devDependencies: `npm i -D jasmine`
- Инициализируй jasmine: `npx jasmine init`. Будет создана папка spec для тестов и конфигурационный файл `jasmine.json` внутри нее.

Готово.


### Написание тестов
Основные методы Jasmine:
- *describe(description, specDefinitions)* - 
Создаёт группу тестов. Вызовы метода `describe` могут вкладываться друг в друга, что позволяет создавать подгруппы тестов.
-  *beforeEach(functionopt, timeoutopt)* - 
Метод, код внутри которого будет запускаться перед запуском каждого теста(`it`). Таким образом, тут можно задавать значения переменных, необходимые для тестов, подготавливать БД, и тд.
- *it(description, testFunctionopt, timeoutopt)*
Определяет тест(или spec). Тест должен содержать 1 или более вызовов метода `expect` (ожидания от работы вашего кода). Если все вызовы `expect` внутри `it` успешны - тесты пройдут, иначе выдадут ошибку.
- *expect(actual) → {matchers}*
Создаёт ожидание для теста. Например: `expect(sum(2,3)).toEqual(5)` - ожидается, что результат вызова метода `sum` с аргументами `2` и `3` будет равен `5`. То есть `2+3=5`.
*matchers* - то что ожидается (`toEqual(5)`, `toBeFalsy()`, `toBeUndefined()`, `toContain(2)` и тд). Больше [тут](https://jasmine.github.io/api/3.5/matchers.html).

Ближе познакомиться с методами можно в [документации](https://jasmine.github.io/api/3.5/global.html#describe). Также для быстрого старта может быть полезна [эта статья](https://habr.com/ru/post/167173/).

Создайте файл в папке `spec`, название файла должно заканчиваться на `_spec.js`. Напишите тесты внутри этого файла.

Пример файла с тестами (math_spec.js):
```js
const operations = require('../operations.js');

describe('My operations testing', function() {
  describe('Simple operations', function() {
    it('sum', function() {
      expect(operations.sum(3, 2)).toEqual(5);
    });
  });
});

describe('Math object testing', function() {
  let someVariable;

  beforeEach(function() {
    someVariable = 'initial value needed for each test';
  });

  describe('Math constants', function() {
    it('PI', function() {
      expect(Math.PI).toBeGreaterThan(3.14);
      expect(Math.PI).toBeLessThan(3.15);
    });  
    it('E', function() {
      expect(Math.E).toBeCloseTo(2.718, 2);
    });
  });
  
  describe('Math methods', function() {
    it('pow(возведение в степень)', function() {
      expect(Math.pow(3, 2)).toEqual(9);
    });
  });
});
```
Более подробный пример можно посмотреть, и даже склонировать к себе [тут](../../../manuals-jasmine-example).


### Запуск тестов

Для запуска тестов достаточно выполнить команду `npx jasmine` в терминале, находясь в корне своего проекта.


Подробнее смотри в [документации](https://jasmine.github.io/pages/docs_home.html).
