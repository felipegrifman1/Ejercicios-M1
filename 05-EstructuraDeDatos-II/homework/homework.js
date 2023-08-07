'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, 
   al ser pasado como parámetro del callback, retorne true. 
   
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null                    // Inicializamos nuestra locomotora en null puesto que es la única y no está mirando a ningún lugar.
}

function Node(value) {              // Creamos nuestra "fábrica de vagones" la cual recibirá un parámetro y tendrá por default dos valores.
  this.value = value;               // El valor de mi vagón que será igual al parámetro que recibimos.
  this.next = null;                 // El gancho que por defecto se le asignará null.
}

LinkedList.prototype.add = function (value) {       // Creamos el método en el prototipo para agregar vagones, este recibirá el valor como parámetro.
	let node = new Node(value)                        // En una variable instanciamos a Node pasándole el parámetro recibido.
	let current = this.head                           // Creamos una variable que será nuestro puntero, este puntero inicialmente va a señalar a nuestra locomotora.

	if(current === null) {                          // Establecemos un condicional, si mi puntero es null, es decir, si está apuntando a mi head...
		this.head = node                              // ... entonces asignamos el valor de head a nuestro nodo.
    return node;                                   // Esto deberá retornarse.
	}

	while (current.next !== null) {               // En caso de que nuestro current NO sea null, ingresará a este bucle para ir iterando sobre nuestro tren hasta dar con un "gancho null".
		current = current.next;                      // En cada iteración haremos que nuestro puntero, vaya avanzando al siguiente next, al siguiente gancho.
	}

	current.next = node;                           // Al salir del bucle significa que encontró el gancho vacío que estamos buscando, acá es donde asignaremos nuestro nuevo nodo.
}

LinkedList.prototype.remove = function () {
  let current = this.head                     // Creamos una variable que será nuestro puntero, este puntero inicialmente va a señalar a nuestra locomotora.
  let previous = null;                        // Creamos una variable con null para poder luego poder guardar nuestro nodo anterior al actual en current.

  if (!current) return null;                  // Condicional: si no existe current, esto quiere decir que la lista está vacía puesto que el puntero debería iniciar al menos en this.head

  while (current.next !== null) {             // En caso de que nuestro current NO sea null, ingresará a este bucle para ir iterando sobre nuestro tren hasta dar con un "gancho null".
    previous = current;                        // Quien es el nodo actual pasará a guardarse en la variable previous para así tener una referencia de nuestro nodo anterior.
    current = current.next;                    // El nodo actual va a pasar a ser el siguiente.
  }

  if (previous === null) {                  // Establecemos un condicional, si mi anterior es null...
    this.head = null;                       // ... significa que mi lista tenía un solo nodo, por lo que le asignamos nuevamente a head el valor de null.
  } else previous.next = null;              // Si esto no se cumple, es decir, si nuestro nodo anterior al actual TIENE un gancho. Vamos a reemplazar el valor 'next' en nuestro nodo anterior para "desengancharlo" del último nodo de la lista.

  return current.value;                      // Finalmente, retornamos el valor del actual eliminado que es lo que pide la consigna.
};

LinkedList.prototype.search = function (value) {
  if (typeof value !== "function") {          // Primero me aseguro de que mi parámetro recibido NO sea una función, en ese caso, ejecuto el bloque para una búsqueda normal.
    let current = this.head                   // Inicializo una variable para usar de marcador.

    while (current.next !== null) {           // Creo un bucle con el cual voy a iterar sobre la lista siempre que mi siguiente gancho no sea null.
      if (current.value === value)            // En cada iteración voy a preguntar si en mi nodo actual el value es igual a lo que recibí por parámetro.
        break;                                // En caso de que sí lo sea, detengo el bucle.
      else current = current.next             // En caso de que no, muevo mi marcador al siguiente nodo para seguir verificando.
    }
  
    if (current.value !== value) return null;   // Si logra salir del bucle sin haberse detenido voy a preguntar una vez más si el value del nodo actual es distinto al parámetro. En caso de que SÍ sea distinto de mi parámetro, significa que salió del bucle sin encontrarlo, es decir, retorno null como pide la consigna.
  
    return current.value;                       // Si no entra en el if anterior, significa que el value de mi nodo actual SI es igual que mi parametro, entonces retorno ese value de mi nodo actual.

  } else {                                      // En caso de que mi parámetro value SÍ sea una función, ejecuto este otro bloque...
    let current = this.head;                    // Inicializo mi variable para usar de marcador.

    while(current !== null) {                   // Vamos a iterar nuestra lista siempre que tengamos un nodo en el cual ejecutar nuestra función.
      if (value(current.value)) {               // En cada iteración vamos a ejecutar un callback, este será el resultado de ejecutar nuestra función value (recordemos que este bloque se ejecuta siempre y cuando value sea una función) pasándole como parámetro el valor del nodo actual.
        return current.value                    // Si al ejecutarse el callback da true, entonces retornamos el valor del nodo actual. Significa que encontramos el nodo que buscábamos.
      }
      current = current.next;                   // En caso de que la ejecución del callback arroje false, cambiamos el marcados y seguimos iterando la lista.
    }
  }
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.array = [];
  this.numBuckets = 35
};

HashTable.prototype.hash = function (key) {                             // Este método solo sirve para saber en qué posición debo guardar el input.
  let hash = 0

  for (let i = 0; i < key.length; i++) {  
    hash += key.charCodeAt(i)
  }

  return hash % this.numBuckets
};

HashTable.prototype.set = function (key, value) {                         // Este método se encarga de guardar el key:value en la posición correspondiente.
  if (typeof key !== "string") throw TypeError("Keys must be strings")

  let index = this.hash(key)

  if (!this.array[index]) {
    this.array[index] = {}
  }

  this.array[index][key] = value
};

HashTable.prototype.get = function (key) {
  if (typeof key !== "string") throw TypeError("Keys must be strings")

  let index = this.hash(key)

  return this.array[index][key]
};

HashTable.prototype.hasKey = function (key) {
  if (typeof key !== "string") throw TypeError("Keys must be strings")

  let index = this.hash(key)

  if (!this.array[index].hasOwnProperty(key)) return false
  return true;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
