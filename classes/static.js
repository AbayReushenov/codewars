class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1.displayName); // undefined
console.log(p1.distance);    // undefined
console.log(p2.displayName); // undefined
console.log(p2.distance);    // undefined

console.log(Point.displayName);      // "Point"
// Статические методы и свойства
// Ключевое слово static определяет статический метод или свойство для класса.
// Статические члены (свойства и методы) вызываются без создания экземпляра 
// своего класса и не могут быть вызваны через экземпляр класса.
// Статические методы часто используются для создания служебных функций для 
// приложения, тогда как статические свойства полезны для кешей, 
// фиксированной конфигурации или любых других данных, которые не нужно 
// реплицировать между экземплярами.
