const paradigma = "Un paradigma es todo aquel modelo, patron o ejemplo que debe seguir en determinada situación. En un sentido amplio, se refiere a una teoría o conjunto de teorías que sirve de modelo a seguir para resolver problemas o situaciones determinadas que se planteen"

const paradigmaOrientadoObjetos = [
    "El paradigma de programación orientada a objetos es la implementación de un paradigma de programación",
    "La POO se basa en la idea de un mundo lleno de objetos y que la resolución de problemas se realiza mediante el modelado/abstracción de objetos de la vida real",
    "Los objetos puede comunicarse entre si mediante mensajes",
    "POO se basa en un concepto de agrupar codigo y datos juntos dentro de una misma unidad llamada clase"
]

const pilaresPoo = "Abstracción, Herencia, Polimorfismo, Encapsulamiento, UML(moduralidad)"

const abstraccion = "Hay clases que comparten gran parte de características"

const herencia = [
    "La herencia permite reutilizar clases: se crea una nueva clase que extiende la funcionalidad de una clase existente sin tener que reescribir el codigo asociado a esta última",
    "La nueva clase (a la que se denomina subclase) puede poseer atributos y métodos que no existan en la clase original",
    "Los objetos de la nueva clase heredan los atributos y los métodos de la clase original, que se denomina superclase"
]

const polimorfismo = "el polimorfismo es un concepto que permite a un objeto comportarse de múltiples formas. Esto significa que un mismo método puede tener diferentes implementaciones en diferentes clases."
const polimorfismoEnlace = "El polimorfismo se basa en dos conceptos principales: el enlace estático (o en tiempo de compilación) y el enlace dinámico (o en tiempo de ejecución)."
const polimorfismoEnlaces = [
    {
        title:"Enlace estático:",
        description:"Ocurre en tiempo de compilación y se refiere al tipo de referencia que se utiliza para llamar a un método. En Java, esto significa que el compilador selecciona qué método llamar basándose en el tipo de referencia del objeto."
    },
    {
        title:"Enlace dinámico:",
        description:"Ocurre en tiempo de ejecución y se refiere al tipo de objeto al que se hace referencia en tiempo de ejecución. En Java, esto significa que el JVM selecciona qué método llamar basándose en el tipo real del objeto en tiempo de ejecución."
    }
]
const polimorfismoConclusion = "El polimorfismo en Java se logra principalmente a través de la herencia y la implementación de métodos en las clases derivadas. Cuando una clase hereda de otra clase, puede sobrescribir (override) los métodos de la clase base para proporcionar una implementación específica para esa clase derivada."
const encapsulamiento = "Significa reunir a todos los elementos que pueden considerarse pertenecientes a una misma entidad, al mismo nivel de abstracción. (public, private, protected)" + 
"En términos más simples, el encapsulamiento es como una 'caja negra' que contiene datos y métodos relacionados. Los detalles internos de la implementación están ocultos fuera de la caja, y solo se pueden acceder y manipular los datos a través de métodos definidos públicamente." + 
"El encapsulamiento se logra principalmente mediante la definición de atributos (variables) y métodos en una clase. Los atributos de la clase suelen definirse como privados, lo que significa que solo pueden ser accedidos directamente desde dentro de la misma clase. Los métodos públicos, también conocidos como métodos de acceso (getters) y métodos de modificación (setters), se utilizan para leer y escribir los atributos privados de la clase desde fuera de la misma."
const umlModuralidad = "La 'modularidad' en el contexto de UML (Unified Modeling Language) se refiere a la capacidad de dividir un sistema en módulos independientes y cohesivos. Estos módulos encapsulan funcionalidades específicas del sistema y pueden interactuar entre sí a través de interfaces bien definidas."
const claseDef = "Es una plantilla, o molde que permite construir objetos.(es el esqueleto de un objeto), representan entidades del mundo real, poseen atributos y métodos, No pueden ser utilizados directamente(sino mediante instancias a objetos)."
const atributosClase = "Nos dice las caracteristicas que tendrán los elementos que creemos atraves de esa clase"
const atributosMetodos = "Las operaciones los métodos son acciones contenidas en una clase, y definen su comportamiento, Dentro de un sistema las operaciones suelen detectarse como verbos en infinitvo, Puede tener opcionalmente valores de entrada(parámetros) y valores de salida(valores de retorno), pueden existir Procedimientos (no retornan un valor) y funciones(retornan un valor)"
const objetos = "Un objetos es una instancia de una clase, es la representación de un objeto que generalmente existe en la vida real,Posee un estado(de acuerdo a sus atributos), posee un comportamiento(realiza operaciones de acuerdo a sus métodos)"
const constructores = "Son funciones especiales que contienen las clases para permitir la creación de objetos, pueden recibir datos/parámetros como no(constructor vacío), se llaman siempre igual que la clase, no retorna ningún valor (ni VOID), generalmente se utilizan 2 tipos de constructores(constructor vacio y con todos los parametros)"
const gettersSetters = "Son métodos especiales que nos permiten traer los valores de los atributos de una clase, para visualizarlos o modificarlos"
const clasesAbstractas = "Son un tipo particular de clase cuya principal característica es que no pueden ser instanciadas, generalmente declara la existencia de métodos pero no su implementación, convirtiéndola asi en una clase padre, al menos uno de sus métodos debe ser abstracto(puede tener métodos no abstractos), Sus niveles de visualización deber ser public o protected(nunca private), Cuando se usan clases abstractas una clase no puede heredar de varias clases abstractas a la vez(como es en el caso de las interfaces), Generalmente las clases abstractas indican el “ES/SER” de un objeto"
const interfaces = "Son una colección de métodos abstractos con propiedades(atributos) constantes, Una interfaz solamente puede extender o implementar otras interfaces(la cantidad que quiera), Da a conocer que se quiere hacer(métodos) pero sin mostrar su implementación(solo puede tener métodos abstractos), Solo puede tener métodos con acceso public(no pueden ser protected o private), Solo puede tener variables public static final(o sea constantes), la palabra abstract en la definición de métodos no es obligatoria, generalmente las interfaces indican el “puede hacer” de un objeto"
const overloadingOverriding = "La sobrecarga (overloading) y la sobreescritura (overriding) son conceptos importantes en la programación orientada a objetos (POO) en Java que permiten a los desarrolladores escribir código más flexible y reutilizable."
const overloading = "La sobrecarga se refiere a la capacidad de definir múltiples métodos con el mismo nombre en una clase, pero con diferentes listas de parámetros. Estos métodos pueden tener diferentes tipos de parámetros, un número diferente de parámetros o un orden diferente de parámetros."
const overridding = "La sobreescritura se refiere a la capacidad de una subclase de proporcionar una implementación específica de un método que ya está definido en una clase base (superclase). La subclase proporciona una implementación diferente del método con el mismo nombre, firma y tipo de retorno que el método en la superclase."
const collection = "Las colecciones son estructuras similares a los arreglos pero con la principal característica de que son dinámicos (su tamaño y cantidad de elementos puede variar en el tiempo)" +
"En Java, las colecciones se implementan mediante la interfaz “Collection”, que permite implementar una serie de métodos comunes como ser: Añadir, Eliminar, Obtener el tamaño de la colección, etc" + 
"Las collections en Java se encuentran en el paquete java.util. Algunas de las interfaces y clases más comunes en las collections de Java incluyen: "
const interfacesCollection = [
    {
        title:"Collection:",
        description:"Es la interfaz raíz de la jerarquía de colecciones. Define las operaciones básicas que todas las colecciones deben admitir, como agregar elementos, eliminar elementos, verificar si un elemento está presente, etc."
    },
    {
        title:"List:",
        description:"Es una colección ordenada que permite elementos duplicados. Los elementos en una lista se mantienen en orden de inserción y se pueden acceder por su índice."
    },
    {
        title:"Set:",
        description:"Es una colección que no permite elementos duplicados. Los sets no mantienen un orden específico de los elementos."
    },
    {
        title:"Map",
        description:"Es una colección de pares clave-valor donde cada clave está asociada a un valor. Las claves en un mapa son únicas y cada clave se asigna a un solo valor."
    }
]
const implementacionesCollection = [
    {
        title:"ArrayList:",
        description:"Implementa la interfaz List utilizando un array dinámico. Proporciona acceso rápido a los elementos por índice, pero puede ser menos eficiente en la inserción y eliminación de elementos en el medio de la lista."
    },
    {
        title:"LinkedList:",
        description:"Implementa la interfaz List utilizando una lista doblemente enlazada. Proporciona acceso rápido a los elementos en ambos extremos de la lista, pero puede ser menos eficiente en el acceso aleatorio."
    },
    {
        title:"HashSet:",
        description:"Implementa la interfaz Set utilizando una tabla hash para almacenar los elementos. Proporciona un acceso rápido a los elementos y no permite elementos duplicados."
    },
    {
        title:"TreeSet:",
        description:"Implementa la interfaz Set utilizando un árbol balanceado (normalmente un árbol rojo-negro) para almacenar los elementos. Mantiene los elementos ordenados en orden natural o en base a un comparador proporcionado."
    }
]

const collectionConclusion = "Estas son solo algunas de las interfaces y clases principales en las collections de Java. Hay muchas otras implementaciones y clases auxiliares disponibles en el paquete java.util para satisfacer diversas necesidades de programación."

const list = "Las listas son un conjunto de elementos relacionados entre si que tienen un determinado orden. Su tamaño es dinámico (puede cambiar en el tiempo). Tipos de listas: ArrayLists, LinkedLists, Stack"

const arrayList = [
    "Es una clase que se representa como una matriz dinámica que permite almacenar elementos",
    "Hereda de la clase AbstractList, la cual implementa interfaz List",
    "Permite colecciones o elementos duplicados",
    "El orden de los registros es el orden en el que fueron insertados",
    "Permite acceso aleatorio (tiene índice)",
    "Manipulación lenta (recorrer todo un arraylist para hacer un cambio)   "
]

const linkedList = [
    "Es una clase",
    "Representan una lista doblemente enlazada (ida y vuelta)",
    "Permite duplicados",
    "Mantiene el orden de inserción",
    "Manipulación mas rápida",
    "Puede ser usada/tratada no solo como lista, sino también como pila o como cola",
    "Permite hacer inserciones o eliminaciones al principio o al final de la colección (por eso es que puede ser tratada como una pila o una cola)"
]

const stack = [
    "Un Stack es una clase en Java que extiende la clase Vector y representa una pila (o stack) de elementos. ",
    "La estructura de datos de pila sigue el principio de 'último en entrar, primero en salir' (LIFO, Last-In-First-Out), lo que significa que el último elemento agregado a la pila es el primero en ser eliminado.",
    "La clase Stack proporciona métodos como push() para agregar elementos en la parte superior de la pila, pop() para eliminar y devolver el elemento superior de la pila, y peek() para ver el elemento superior sin eliminarlo"
]

const map = [
    "Un map es una colección de pares clave-valor donde cada clave está asociada a un único valor",
    "Map en java no puede contener claves duplicadas",
    "Permite acceso rápido de los valores a través de las claves",
    "Java proporciona diferentes implementaciones de map: HashMap, TreeMap, LinkedHashMap, etc."
]

const mapMethods = [
    {
        title:"Put(clave, valor):",
        description:"Agrega un par clave-valor a la collection map"
    },
    {
        title:"get(clave):",
        description:"Devuelve el valor asociado de la clave brindada o null si la clave no existe"
    },
    {
        title:"containsKey(clave):",
        description:"Verifica si el map contiene la clave especificada"
    },
    {
        title:"containsValue(valor):",
        description:"Comprueba si el map contiene el valor especificado"
    },
    {
        title:"remove(clave):",
        description:"Elimina el registro asociado a la clave brindada"
    },
    {
        title:"keySet():",
        description:"Devuelve un conjunto de todas las claves en el Map."
    },
    {
        title:"values():",
        description:"Devuelve una colección de todos los valores que contiene el map."
    }
]

const excepciones = [
    "Una excepción es un evento que ocurre durante la ejecución de un programa que rompe el flujo normal de ejecución",
    "Cuando se habla de excepciones nos referimos a un evento excepcional (algo muy difícil que pase o fuera de la común)",
    "Cuando ocurre una excepción, Java genera un objeto de tipo Exception o una subclase de Exception para representar la excepción específica que se produjo. Este objeto contiene información sobre el tipo de error, el mensaje de error y, a menudo, la traza de la pila que indica dónde se produjo la excepción.",
    "Hay 2 tipos de excepciones: propias de java y personalizadas"
]

const excepcioneComunes = [
    {
        title:"NullPointerException:",
        description:"Se produce cuando intentas acceder a un objeto que no ha sido inicializado (es decir, tiene un valor null)."
    },
    {
        title:"ArrayIndexOutOfBoundsException:",
        description:"Se produce cuando intentas acceder a un índice inválido en un array."
    },
    {
        title:"IOException:",
        description:"Se produce cuando ocurre un error de entrada/salida durante la lectura o escritura de datos."
    },
    {
        title:"NumberFormatException:",
        description:"Se produce cuando intentas convertir una cadena a un número, pero la cadena no tiene un formato válido."
    },
    {
        title:"ClassNotFoundException:",
        description:"Se produce cuando no se puede encontrar una clase especificada durante la carga de clases en tiempo de ejecución."
    },
]

/*Para poder construir excepciones propias hay que tener en cuenta los siguientes bloques:*/
const excepcionesBloques = [
    {
        title:"Try:",
        description:"Bloque donde puede ocurrir la excepción"
    },
    {
        title:"Catch:",
        description:"Es como el “else” del try (se ejecuta al dispararse una excepción en el bloque try)"
    },
    {
        title:"Finally:",
        description:"Bloque de codigo que se ejecuta siempre"
    },
    {
        title:"Throw:",
        description:"Lanzar una excepción cualquiera"
    },
    {
        title:"Throws:",
        description:"Determinar que excepciones puede lanzar un método."
    }
]

const relaciones = "En el contexto de la modelización de bases de datos y relaciones entre entidades, las relaciones 1 a 1, 1 a n (uno a muchos) y n a n (muchos a muchos) son conceptos fundamentales que ayudan a definir cómo se relacionan las entidades entre sí."

const relacion1A1 = [
    "En una relación 1 a 1, una entidad de un tipo está asociada a una única entidad del otro tipo, y viceversa.",
    "Es una relación muy directa y restrictiva.",
    "Ejemplo: Un cliente puede tener una dirección de envío y una dirección de facturación, y cada dirección está asociada a un único cliente."
]
const relacion1AMucho = [
    "En una relación 1 a n, una entidad de un tipo está asociada a muchas entidades del otro tipo, pero cada entidad del segundo tipo está asociada a solo una entidad del primer tipo.",
    "Es una relación muy común y se usa ampliamente en bases de datos.",
    "Ejemplo: Un departamento puede tener muchos empleados, pero cada empleado solo pertenece a un departamento."
]
const relacionMuchoAMucho = [
    "En una relación n a n, muchas entidades de un tipo están asociadas a muchas entidades del otro tipo.",
    "Para implementar esta relación en una base de datos relacional, se requiere una tabla intermedia (tabla de unión)"
]

const javaExports = {
    paradigma,
    paradigmaOrientadoObjetos,
    pilaresPoo,
    abstraccion,
    herencia,
    polimorfismo,
    polimorfismoEnlace,
    polimorfismoEnlaces,
    polimorfismoConclusion,
    encapsulamiento,
    umlModuralidad,
    claseDef,
    atributosClase,
    atributosMetodos,
    objetos,
    constructores,
    gettersSetters,
    clasesAbstractas,
    interfaces,
    overloadingOverriding,
    overloading,
    overridding,
    collection,
    interfacesCollection,
    implementacionesCollection,
    collectionConclusion,
    list,
    arrayList,
    linkedList,
    stack,
    map,
    mapMethods,
    excepciones,
    excepcioneComunes,
    excepcionesBloques,
    relaciones,
    relacion1A1,
    relacion1AMucho,
    relacionMuchoAMucho
}

export default javaExports




