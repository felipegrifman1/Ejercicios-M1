x = 1;
var a = 5
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1 





console.log(bar); // undefined
console.log(baz); // error
foo(); // hola
function foo() {
    console.log('Hola!'); 
}
var bar = 1;
baz = 2;




var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco (como es un condicional if y es un true, convierte el valor de 'tony' a 'franco')




var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco (Los parentesis ejecutan la función y por eso corre el 'Franco')
   }
})();
console.log(instructor); // Tony





var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor);  // The Flash (Queda el valor de Flash por estar con la variable 'var'.)
console.log(pm); // Franco




console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log(7 / 0) // Infinity
console.log({}[0]) // undefined (preguntar mañana en el review)
console.log(parseInt("09")) // 9
console.log(0 && 2) // 0 (Si hay un false (0), te lo devuelve sin importar si viene antes o después)
console.log(2 && 5) // 5 (el && agarra el último true)
console.log(5 || 0) // 5
console.log(0 || 5) // 5 (el or (||) agarra primer el true)
console.log([3]+[3]-[10]) // 23 (Concatena el 3 y el 3 en un "33", luego hace la operación, lo pasa a número y resta al 23)
console.log(3>2>1) // false
console.log([] == ![]) // true (Compara los valores, ambos en cero y por eso da true)



function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 } 
 test();




var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // La variable no se define hasta que entre al true




var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosas

var test = obj.prop.getFullname; // Sacando los parentesis de test abajo y se los agregás a este, obtenes el valor

console.log(test()); // undefined




function printing() {
    console.log(1); // 1
    setTimeout(function () {
       console.log(2); // 4
    }, 1000);
    setTimeout(function () {
       console.log(3); // 3
    }, 0);
    console.log(4); // 2
 }
 
 printing(); // Ejecuta primero las variables, y deja las funciones para el final




