# Jasmine







<details>
  <summary>Работа с тестами в браузере</summary>

## Работа с тестами в браузере

### Установка

#### Если проект новый
- Скачай последний релиз библиотеки `Jasmine`. Перейди на [страницу с официальными релизами Jasmine](https://github.com/jasmine/jasmine/releases), под последней версией в разделе `Assets` найди ссылку следующего вида: `jasmine-standalone-x.x.x.zip` и кликни на неё. Скачается архив.
- Из архива извлеки папку `lib` в свой проект. Теперь ты можешь пользоваться библиотекой `Jasmine`.
- Создай папку `spec`, внутри можешь писать тесты. Подробнее о том как их писать смотри в разделе `Как писать тесты?` (ниже).
- Создай html-файл с любым названием, например (`SpecRunner.html`). 
- В этом файле тебе необходимо подключить `jasmine`, файлы, которые ты хочешь тестировать, файлы тестов из папки `spec`. Порядок, в котором ты подключаешь файлы в html очень важен. Каждый следующий подключенный файл видит только предыдущие.
Пример подключения всех необходимых файлов смотри в разделе `Примеры`.


#### Если в проекте уже есть lib/jasmine, spec, SpecRunner.html

Переходи к запуску тестов.


### Запуск тестов

Открой `SpecRunner.html` (название может быть другим, но оно обычно связано со словом `spec`) в браузере. Ты увидишь результат выполнения тестов. Зелёные точки - пройденные тесты; Красные крестики - проваленные тесты. 

</details>

----------------------------------------

<details>
 
<summary>Работа с тестами через node.js (Только начиная с p1w2d3)</summary>

## Работа с тестами через node.js (Только начиная с p1w2d3)

### Перед установкой
Убедись, что у тебя установлен `npx`. Если нет, то установи его командой `npm install -g npx` или `sudo npm install -g npx`.
<!-- изучи [мануал по npx](how-to-use-npx.md) -->


### Установка

- Если проект новый, то инициализируй файл `package.json` командой `npm init -y`
- Установи jasmine в devDependencies: `npm i -D jasmine`
- Инициализируй jasmine: `npx jasmine init`. Будет создана папка spec для тестов и конфигурационный файл `jasmine.json` внутри нее.

Готово.


### Запуск тестов

Для запуска тестов достаточно выполнить команду `npx jasmine` в терминале, находясь в корне своего проекта.


Подробнее смотри в [документации](https://jasmine.github.io/pages/docs_home.html).

</details>

----------------------------------------

<details>

<summary>Как писать тесты?</summary>

### Написание тестов

>Чтобы начать писать тесты, создай файл в папке `spec`. Название файла должно заканчиваться на `spec.js`. Пиши тесты внутри этого файла.

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

</details>

----------------------------------------

<details>

  <summary>Примеры</summary>

## Примеры

Пример файла `SpecRunner.html` для работы через браузер (обратите внимание на версию jasmine, ваша может отличаться):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Jasmine Spec Runner</title>
  <link rel="shortcut icon" type="image/png" href="lib/jasmine-3.5.0/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-3.5.0/jasmine.css">
  <script src="lib/jasmine-3.5.0/jasmine.js"></script>
  <script src="lib/jasmine-3.5.0/jasmine-html.js"></script>
  <script src="lib/jasmine-3.5.0/boot.js"></script>
  <!-- include source files here... -->
  <script src="operations.js"></script>
  <!-- include spec files here... -->
  <script src="spec/operations-spec.js"></script>
</head>
<body>
</body>
</html>
```


Пример файла с тестами (`operations-spec.js`):
```js
// Эта строка исключительно для node.js.
// Если запускаете тесты в браузере - удалите её.
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

*Более подробный пример можно посмотреть, и даже склонировать к себе [ТУТ для браузера](../../../manuals-jasmine-web-example) и [ТУТ для node.js](../../../manuals-jasmine-node-example).*


</details>
