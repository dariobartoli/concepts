const algoritmo = "Un algoritmo es una secuencia de pasos lógicos y ordenados que se utilizan para resolver un problema o realizar una tarea específica. " +
"En el contexto de la programación, un algoritmo es como una receta detallada que le indica a una computadora qué pasos seguir para alcanzar un objetivo deseado.";

const pseudoCodigo = "El pseudocódigo es una forma de escribir algoritmos utilizando un lenguaje simple y no específico, es un intermedio entre el lenguaje humano "+
"y el lenguaje de programación. Es una manera de expresar la lógica y los pasos de un algoritmo sin tener que preocuparse por la sintaxis de un lenguaje de programación.";

const diagramaFlujo = "Un diagrama de flujo es una representación gráfica de un proceso, algoritmo o sistema, que utiliza diferentes símbolos para mostrar las diferentes etapas,"+
" acciones o decisiones que se deben tomar. Estas representaciones gráficas permiten visualizar de manera clara y estructurada la secuencia de pasos y las posibles ramificaciones"+
" en un proceso. Los diagramas de flujo son ampliamente utilizados en el ámbito de la programación, la ingeniería y otros campos, para diseñar, analizar y comunicar de forma"+
" visial los procesos o algoritmos de manera comprensible para cualquier persona."

const variable = "En programación, las variables son como cajas de almacenamiento donde podemos guardar diferentes cosas. Cada caja tiene un nombre y puede contener un valor"+
" específico, como números o palabras. Las variables nos permiten acceder y manipular esos valores a lo largo de nuestro programa."

const almacenamientoRam = "El almacenamiento en la memoria RAM es volátil. Esto significa que, al igual que cuando apagas una computadora, cuando finaliza un programa,"+
" toda la informacion almacenada en las variables desaparece, es como vaciar todas las cajas y perdiéramos su contenido."

const typeVar = "var fue la forma original de declarar variables en JavaScript. Las variables declaradas con var tienen un ámbito de función, lo que significa que están" +
" disponibles en toda la función en la que se declaran, incluso antes de la línea de declaración (hoisting). Las variables var pueden ser reasignadas y redeclaradas en el mismo ámbito. Sin embargo, no respetan el bloque de ámbito."

const typeLet = "let fue introducido en ECMAScript 6 (ES2015) como una alternativa a var. Las variables declaradas con let tienen un alcance de bloque, lo que significa que solo están disponibles dentro del bloque en el que se declaran."+ 
" Además, las variables let no pueden ser redeclaradas en el mismo ámbito, pero sí pueden ser reasignadas."

const typeConst = "const también fue introducido en ES6 y se utiliza para declarar variables cuyo valor no cambiará a lo largo del tiempo. Las variables declaradas" +
" con const deben inicializarse al momento de la declaración y no pueden ser reasignadas ni redeclaradas. Sin embargo, ten en cuenta que si la variable es un objeto o un array, sus propiedades o elementos pueden ser modificados."

const primitivos = "Los tipos de datos primitivos se llaman así debido a que son los bloques de construcción básicos y fundamentales en un lenguaje de programación."+
" Son los tipos de datos más simples que no pueden descomponerse en partes más pequeñas"

const tiposPrimitivos = [
  {
    type: "Number",
    description: "Representa números, tanto enteros como decimales."
  },
  {
    type: "String",
    description: "Representa cadenas de texto."
  },
  {
    type: "Boolean",
    description: "Representa valores booleanos true (verdadero) o false (falso)."
  },
  {
    type: "Null",
    description: "Representa la ausencia de un valor."
  },
  {
    type: "Undefined",
    description: "Representa el valor indefinido."
  },
  {
    type: "Symbol",
    description: "Representa un valor único e inmutable que se puede utilizar como identificador de propiedad en objetos."
  },
]

const noPrimitivos = "Los tipos de datos no primitivos, son estructuras de datos más complejas que pueden contener múltiples valores y propiedades, los tipos de datos primitivos"+
" representan valores individuales y no tienen métodos o funcionalidades adicionales asociadas."

const tiposNoPrimitivos = [
  {
    type: "Object",
    description: "Representa una estructura de datos compleja compuesta por pares clave-valor."
  },
  {
    type: "Array",
    description: "Representa una lista de elementos ordenados."
  },
  {
    type: "Function",
    description: "Representa un bloque de código reutilizable que realiza una tarea específica."
  },
  {
    type: "Date",
    description: "representa una fecha y hora específicas."
  },
  {
    type: "RegExp",
    description: "Representa una expresión regular, que se utiliza para buscar patrones en cadenas de texto."
  }
]

const scope = "En JavaScript, el scope (alcance) se refiere a la visibilidad y accesibilidad de las variables, funciones y objetos en una parte específica del código durante" +
" la ejecución del programa. Define las reglas sobre cómo se accede y se maneja la información dentro de un bloque de código. El scope en JavaScript se basa en la estructura"+
" de los bloques de código, como las funciones y los bloques de declaración (como los bloques if, for, while, etc.). Cada vez que se crea un nuevo bloque, se crea un nuevo scope."

const hoisting = "El hoisting en JavaScript es un comportamiento que ocurre durante la fase de compilación o interpretación del código. Consiste en el movimiento de las"+
" declaraciones de variables y funciones hacia la parte superior de su scope actual, antes de que se ejecute el código. Conceptualmente, por ejemplo, una estricta definición"+
" de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo delcódigo, pero esto no es lo que ocurre en realidad. Lo que sucede" +
" es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código."

const operadores = "Los operadores son elementos fundamentales en la programación, ya que nos permiten realizar diferentes tipos de cálculos y manipular datos."+
" Estos son: aritméticos, de asignación, comparación y lógicos"

const expresiones = "Una expresión regular en programación es una secuencia de caracteres que define un patrón de búsqueda. Se utiliza para buscar"+
" y manipular texto de manera eficiente. Las expresiones regulares son utilizadas en muchos lenguajes de programación y aplicaciones"+
" para realizar tareas como validar formatos de entradas, buscar y reemplazar texto, y extraer información específica de cadenas de"+
" caracteres. Proporcionan una forma flexible y poderosa de trabajar con texto al permitir especificar reglas precisas sobre qué tipo de"+
" cadenas deben coincidir con el patrón definido."

const ifElse = "El condicional if...else permite ejecutar un bloque de código si se cumple una condición, y otro bloque de código si la condición no se cumple."

const switchDef = "switch es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código dependiendo del valor de la expresión."

const forDef = "for es un ciclo que se utiliza para repetir un bloque de código un número específico de veces."

const whileDef = "while es un ciclo que se ejecuta mientras una condición específica sea verdadera."

const doWhile = "do...while es similar a while, pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa desde el principio."

const arrayDef = "Un array en JavaScript es una estructura de datos que permite almacenar y organizar múltiples valores en una sola variable. Es una colección" +
" ordenada de elementos, donde cada elemento tiene una posición numérica llamada índice. En JavaScript, un array puede contener cualquier tipo de datos, como números,"+
" cadenas de texto, booleanos, objetos e incluso otros arrays. Los elementos de un array se separan por comas y se encierran entre corchetes."

const indiceArray = "Los índices de un array son números enteros que se utilizan para identificar y acceder a elementos individuales dentro del array."+
" Cada elemento en un array tiene asignado un índice único que representa su posición relativa dentro del array. En la mayoría de los lenguajes de programación, incluido" +
" JavaScript, los índices de los arrays comienzan en cero. Esto significa que el primer elemento del array tiene un índice de 0, el segundo elemento tiene un índice de 1," +
"el tercer elemento tiene un índice de 2, y así sucesivamente."

const objectDef = "En JavaScript, un objeto es una estructura de datos que permite almacenar y organizar valores relacionados" +
" en pares clave-valor (key-value). Se puede pensar en un objeto como una colección de propiedades donde cada propiedad tiene un nombre" + 
" (clave) y un valor asociado. Estos valores pueden ser cualquier tipo de dato, como números, cadenas de texto, booleanos, arreglos," +
" funciones u otros objetos."

const objectProps = "Una propiedad de un objeto en JavaScript es una asociación entre un nombre (clave) y un valor. El nombre" +
" es una cadena de texto que identifica la propiedad, y el valor puede ser cualquier tipo de dato, como números, cadenas de texto," +
" booleanos, arreglos, funciones u otros objetos. Las propiedades permiten almacenar y acceder a los datos relacionados con el objeto" +
"utilizando la notación de puntos o corchetes."

const objectMethods = "Los métodos de un objeto son funciones que están asociadas con el objeto. Los métodos se definen" +
" como valores de propiedades de un objeto y se pueden invocar utilizando la notación de punto. Los métodos permiten a un objeto" +
" realizar acciones o manipular sus propias propiedades."

const thisDef = {
  definicion: "En JavaScript, this es una palabra clave especial que hace referencia al objeto actual en el contexto de ejecución actual. El valor de this depende de cómo se llama y dónde se utiliza.",
  typeOne: "En el contexto global (fuera de cualquier función), this hace referencia al objeto global, que es window en el navegador y global en Node.js.",
  typeTwo: "El valor de this dentro de una función depende de cómo se llama la función. Si la función es invocada como un método de un objeto, this hace referencia al objeto que posee el método. Si la función es invocada como una función regular, this hace referencia al objeto global (en modo estricto, this es undefined).",
  typeThree:"Dentro de los métodos de eventos de un elemento HTML, this hace referencia al elemento HTML que desencadenó el evento.",
}

const encadenador = "El operador de encadenamiento opcional (?.) es una característica introducida en ECMAScript 2020"+
" (también conocido como ES11) que simplifica la navegación segura a través de objetos y cadenas de propiedades, especialmente cuando"+
" tratamos con objetos anidados y propiedades que podrían ser null o undefined. El operador de encadenamiento opcional permite acceder"+
" a las propiedades de un objeto sin arrojar un error si alguna de las propiedades anteriores es null o undefined. Si la propiedad en"+
" la cadena de acceso es null o undefined, la evaluación se detiene y el valor final es undefined."

const stack = "El stack es una región de memoria que se utiliza para almacenar datos en un orden estructurado conocido como (pila). En esta pila, se almacenan" +
" variables locales y referencias a funciones. Cada vez que se llama a una función en JavaScript, se crea un (marco de pila) que contiene información sobre la función" +
" actualmente en ejecución, como los argumentos de la función y las variables locales. Cuando una función finaliza su ejecución, su marco de pila se elimina."+
" El stack en JavaScript es de tamaño limitado y su gestión es automática. Cada vez que se agrega un nuevo marco de pila, se reserva espacio para él y, cuando un marco" +
"se elimina, se libera ese espacio. Esto significa que el stack es eficiente en términos de velocidad de acceso y gestión de memoria, pero también limitado en capacidad."

const heap = "El heap es otra región de memoria utilizada para almacenar datos más grandes y complejos, como objetos y arreglos en JavaScript. A diferencia del stack," +
" el heap no tiene una estructura de datos organizada específica, por lo que los datos se almacenan y se acceden de manera más flexible. El heap en JavaScript es dinámico y"+
" no está limitado en tamaño como el stack. La gestión de la memoria en el heapes realizada automáticamente por el garbage collector de JavaScript."+
" El garbage collector se encarga de liberar la memoria ocupada por los datos que ya no se utilizan, lo que ayuda a prevenir fugas de memoria."

const forEach = "Itera sobre cada elemento de un array y ejecuta una función para cada uno de ellos."

const map = "Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original."

const reduce = "Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor."

const filter = "Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada."

const some = "Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada."

const otrosMetodos = "Estos son solo algunos de los métodos más comunes de los arrays en JavaScript. Hay muchos otros métodos útiles que puedes explorar, como" +
" find, every, sort, slice, splice, push, pop, shift, unshift, concat, indexOf, includes, entre otros. Cada uno de estos métodos proporciona formas diferentes y" +
" poderosas de manipular y trabajar con arrays en JavaScript."

const funciones = "En programación, una función es un bloque de código que realiza una tarea específica. Es una forma de organizar y reutilizar el código al" +
" encapsular un conjunto de instrucciones bajo un nombre descriptivo."

const difFunAndArrow = [
  "La diferencia más importante es el contexto de la palabra reserva this",
  "Las arrow function pueden tener un return implícito, es decir, se puede evitar el uso de return",
  "Las arrow function pueden definir un scope",
  "Las function poseen la variable arguments y a través spread operator podemos tomar todos los valores de los argumentos enviados"
]

const funcionesAnonimas = "Una función anónima en JavaScript es una función que no tiene un nombre específico asociado a ella, es decir, se define directamente en el"+
" lugar donde se necesita. Las funciones anónimas también se pueden utilizar como funciones autoejecutables, que se ejecutan inmediatamente después de ser definidas."

const recursividad = "La recursividad es un concepto en programación que implica que una función se llame a sí misma. Es importante tener en cuenta que las funciones"+
" recursivas deben tener un caso base definido para evitar llamadas infinitas y asegurarse de que la recursión termine eventualmente."

const excepciones = "En programación, las excepciones son eventos inusuales o condiciones de error que ocurren durante la ejecución de un programa y que pueden" +
" interrumpir el flujo normal de la ejecución. Las excepciones proporcionan un mecanismo para manejar situaciones excepcionales de manera controlada y responder a ellas" +
" de manera adecuada. En JavaScript, puedes utilizar el bloque try...catch para manejar excepciones."

const typeExceptions = [
  "El bloque try contiene el código que puede lanzar una excepción.",
  "El bloque catch captura cualquier excepción que se lance dentro del bloque try. Puedes proporcionar un nombre de variable para la excepción (en este caso, error), que contendrá el objeto de error lanzado.",
  "El bloque finally es opcional y se ejecuta siempre, ya sea que se lance una excepción o no. Se utiliza comúnmente para realizar tareas de limpieza, como cerrar archivos o liberar recursos.",
  "Además del try...catch, JavaScript proporciona la posibilidad de lanzar excepciones manualmente mediante el uso de la palabra clave throw"
]

const excepciones2 = "Las excepciones pueden ser causadas por diversos factores, como errores de sintaxis, operaciones matemáticas inválidas, manipulación incorrecta de"+
" objetos, entre otros. Algunos ejemplos comunes de excepciones en JavaScript son TypeError, ReferenceError, SyntaxError y RangeError. Es importante manejar las excepciones"+ 
" de manera adecuada en tus programas para garantizar una ejecución segura y predecible. Esto implica anticipar posibles errores y diseñar estrategias de manejo de"+ 
" excepciones que permitan al programa recuperarse o finalizar de manera controlada en caso de que ocurra un problema inesperado."

const sincronia = "En un enfoque sincrónico, las tareas se ejecutan de manera secuencial, una después de la otra. Cada tarea debe esperar a que la tarea"+
" anterior se complete antes de comenzar. Esto significa que el programa se bloquea y no puede continuar con la siguiente tarea hasta que la tarea actual haya finalizado."

const asincronia = "En un enfoque asincrónico, las tareas no se ejecutan de manera secuencial. En lugar de esperar a que una tarea se complete antes de pasar a la"+
" siguiente, se inician las tareas y se continúa ejecutando el programa sin bloquearse. Cuando una tarea asincrónica se completa, se activa un evento que"+
" maneja el resultado o se ejecuta una función de devolución de llamada."

const callback = "Un callback en JavaScript es una función que se pasa como argumento a otra función y que se ejecuta después de que cierta operación asincrónica" +
" ha sido completada, o en respuesta a un evento. Los callbacks son una forma común de manejar la asincronía en JavaScript y son fundamentales para trabajar con tareas" +
" que pueden tomar un tiempo variable para completarse, como las solicitudes de red, la lectura/escritura de archivos y las operaciones de entrada/salida."+
" Los callbacks permiten a los desarrolladores controlar el flujo de ejecución de sus programas, incluso cuando hay operaciones que toman tiempo. Sin embargo, el anidamiento" +
" excesivo de callbacks (conocido como callback hell) puede llevar a un código difícil de entender y mantener. Es por eso que se han desarrollado técnicas como las promesas"+ 
" y async/await para manejar la asincronía de una manera más clara y legible."

const promesas = "Las promesas en JavaScript son objetos que representan la eventual finalización (o falla) de una operación asincrónica y su valor resultante." +
" Las promesas proporcionan una forma más clara y estructurada de trabajar con operaciones asincrónicas en comparación con los callbacks, especialmente cuando se trata de" +
" encadenar múltiples operaciones asincrónicas o manejar errores de manera más robusta. Para crear una promesa, utilizamos la clase Promise, que toma una función como argumento," +
" que a su vez toma dos parámetros, resolve y reject. Dentro de esta función, ejecutamos la operación asincrónica y llamamos a resolve si la operación es exitosa, o reject si la" +
" operación falla."

const typePromises = [
  "Pendiente: Estado inicial de la promesa, es decir, la operación asincrónica aún no se ha completado.",
  "Resuelta (Fulfilled): La operación asincrónica se ha completado con éxito y la promesa devuelve un valor.",
  "Rechazada (Rejected): La operación asincrónica ha fallado y la promesa devuelve un motivo de error."
]

const promiseAll = "toma un iterable de promesas como entrada y devuelve una única promesa que se resuelve cuando todas las promesas en el iterable se han resuelto, o se"+ 
" rechaza tan pronto como una de las promesas del iterable se rechaza. El valor resuelto es un array con los valores resueltos de las promesas en el mismo orden que el iterable."

const promiseRace = "toma un iterable de promesas como entrada y devuelve una única promesa que se resuelve o se rechaza tan pronto como una de las promesas del iterable"+ 
" se resuelve o se rechaza, con el valor o motivo de esa primera promesa resuelta o rechazada."

const promiseSettled = " toma un iterable de promesas como entrada y devuelve una única promesa que se resuelve después de que todas las promesas en el iterable se han"+ 
" resuelto o rechazado, cada una con un objeto que describe el resultado de cada promesa."

const asyncAwait = "async y await son características introducidas en ECMAScript 2017 (también conocido como ES8) que simplifican el trabajo con promesas y hacen que el código asincrónico sea más legible y fácil de entender."

const asyncDef = "La palabra clave async se utiliza para declarar que una función retornará una promesa. Una función async automáticamente envuelve su valor de retorno en una promesa resuelta."

const awaitDef = "La palabra clave await se utiliza para esperar a que una promesa se resuelva o se rechace. Solo se puede usar dentro de una función async. El uso de await pausa la ejecución"+ 
" de la función async hasta que la promesa se resuelva."

const asyncAwait2 = "La combinación de async y await hace que el código asincrónico sea más fácil de leer y escribir, especialmente en comparación con el uso de callbacks o cadenas de promesas encadenadas."+
" Es importante recordar que cuando utilizas await, el código que sigue a await no se ejecutará hasta que la promesa se resuelva, lo que significa que el código puede parecer síncrono, pero aún se está ejecutando" +
" de manera asincrónica detrás de escena. Ten en cuenta que las funciones async siempre devuelven una promesa, incluso si no hay una instrucción return explícita. Si la función async devuelve un valor,"+ 
" la promesa será resuelta con ese valor. Si la función async arroja una excepción, la promesa será rechazada con la excepción arrojada."

const prototypeDef = "En JavaScript, cada objeto tiene una propiedad interna especial llamada [[Prototype]], que es una referencia"+ 
" a otro objeto, conocido como prototipo. El prototipo es un objeto del cual el objeto actual hereda propiedades y métodos."+ 
"JavaScript es un lenguaje de programación basado en prototipos, lo que significa que no hay clases tradicionales como en lenguajes"+
" como Java o C++. En su lugar, los objetos se crean a partir de prototipos y se enlazan entre sí."+ 
" El mecanismo de prototipos en JavaScript es fundamental para la herencia y la reutilización de código."

const prototypeConcepts = [
  {
    name: "Object.prototype",
    definicion: "Todos los objetos en JavaScript heredan propiedades y métodos de Object.prototype, que es el prototipo predeterminado de todos los objetos en JavaScript."
  },
  {
    name: "proto",
    definicion: "__proto__ es una propiedad no estándar (aunque ampliamente compatible) que permite acceder y modificar el prototipo de un objeto directamente. A partir de ES6, puedes acceder al prototipo de un objeto utilizando Object.getPrototypeOf(obj)."
  },
  {
    name: "Funciones constructoras y prototipos",
    definicion: "En JavaScript, las funciones constructoras se utilizan para crear objetos que comparten las mismas propiedades y métodos. Estas funciones suelen definir métodos en su propiedad prototype. Cuando creas un objeto con new, el objeto creado hereda propiedades y métodos del prototipo de la función constructora."
  },
  {
    name: "Herencia prototípica",
    definicion: "La herencia en JavaScript se logra mediante la cadena de prototipos. Si un objeto no tiene una propiedad o método específico, JavaScript busca en la cadena de prototipos hasta encontrar el prototipo que lo contiene."
  },
]

const prototypeFin = "El uso adecuado de los prototipos en JavaScript puede ayudarte a escribir un código más limpio y eficiente, permitiendo la reutilización de código y la implementación de patrones de diseño de manera más efectiva."

const casesJs = [
  {
    title: "Suma de un string y un número:",
    image: "./img/js/caso1.webp"
  },
  {
    title: "Comparaciones extrañas:",
    image: "./img/js/caso2.webp"
  },
  {
    title: "Reasignación de una variable:",
    image: "./img/js/caso3.webp"
  },
  {
    title: "Operaciones aritméticas extrañas:",
    image: "./img/js/caso4.webp"
  },
  {
    title: "Comparaciones estrictas vs comparaciones no estrictas:",
    image: "./img/js/caso5.webp"
  },
  {
    title: "Uso de valores NaN:",
    image: "./img/js/caso6.webp"
  },
  {
    title: "Operaciones lógicas con valores no booleanos:",
    image: "./img/js/caso7.webp"
  },
]

const jsExports = {
  algoritmo,
  pseudoCodigo,
  diagramaFlujo,
  variable,
  almacenamientoRam,
  typeVar,
  typeLet,
  typeConst,
  primitivos,
  tiposPrimitivos,
  noPrimitivos,
  tiposNoPrimitivos,
  scope,
  hoisting,
  operadores,
  expresiones,
  ifElse,
  forDef,
  switchDef,
  whileDef,
  doWhile,
  arrayDef,
  indiceArray,
  objectDef,
  objectProps,
  objectMethods,
  thisDef,
  encadenador,
  stack,
  heap,
  forEach,
  map,
  reduce,
  filter,
  some,
  otrosMetodos,
  funciones,
  difFunAndArrow,
  funcionesAnonimas,
  recursividad,
  excepciones,
  typeExceptions,
  excepciones2,
  sincronia,
  asincronia,
  callback,
  promesas,
  typePromises,
  promiseAll,
  promiseRace,
  promiseSettled,
  asyncAwait,
  asyncDef,
  awaitDef,
  asyncAwait2,
  prototypeDef,
  prototypeConcepts,
  prototypeFin,
  casesJs
}

export default jsExports;

