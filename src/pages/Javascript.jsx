import jsExports from "../data/javascript"
import '../App.css'



const Javascript = () => {
    const data = jsExports
    console.log(data);
  return (
    <div className="body">
        <div className="contenedor">
            <h1>Javascript</h1>
            <section>
                <h4>Algoritmo:</h4>
                <p>{data.algoritmo}</p>
            </section>
            <section>
                <h4>Pseudocodigo:</h4>
                <p>{data.pseudoCodigo}</p>
            </section>
            <section>
                <h4>Diagrama de flujo:</h4>
                <p>{data.diagramaFlujo}</p>
            </section>
            <section>
                <h4>Variable:</h4>
                <p>{data.variable}</p>
            </section>
            <section>
                <h4>Almacenamiento volátil en ram:</h4>
                <p>{data.almacenamientoRam}</p>
            </section>
            <section>
                <h4>Tipos de variable:</h4>
                <div className="tipos__variable">
                    <article>
                        <p><span>Var:</span> {data.typeVar}</p>
                        <img src="./img/js/var.webp" alt="progrmacion-conceptos" />
                    </article>
                    <article>
                        <p><span>Let:</span> {data.typeLet}</p>
                        <img src="./img/js/let.webp" alt="progrmacion-conceptos" />
                    </article>
                    <article>
                        <p><span>Const:</span> {data.typeConst}</p>
                        <img src="./img/js/const.webp" alt="progrmacion-conceptos" />
                    </article>
                </div>
            </section>
            <section>
                <h4>Datos primitivos:</h4>
                {data.tiposNoPrimitivos.map((item, index)=>(
                    <div key={index} className="lista__datos">
                        <p>{item.type}: </p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>
            <section>
                <h4>Datos no primitivos:</h4>
                {data.tiposNoPrimitivos.map((item, index) =>(
                    <div key={index} className="lista__datos">
                        <p>{item.type}:</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>
            <section>
                <h4>Scope:</h4>
                <p>{data.scope}</p>
            </section>
            <section>
                <h4>Hoisting:</h4>
                <p>{data.hoisting}</p>
            </section>
            <section>
                <h4>Operadores:</h4>
                <p>{data.operadores}</p>
                <div>
                    <img src="./img/js/arit.webp" alt="programacion-conceptos" />
                    <img src="./img/js/compa.webp" alt="programacion-conceptos" />
                    <img src="./img/js/compa2.webp" alt="programacion-conceptos" />
                    <img src="./img/js/asig.webp" alt="programacion-conceptos" />
                    <img src="./img/js/asig2.webp" alt="programacion-conceptos" />
                    <img src="./img/js/log.webp" alt="programacion-conceptos" />
                </div>
            </section>
            <section>
                <h4>Expresiones: </h4>
                <p>{data.expresiones}</p>
            </section>
            <section>
                <h4>Condicionales:</h4>
                <div>
                    <article>
                        <p>{data.ifElse}</p>
                        <img src="./img/js/ifelse.webp" alt="programacion-conceptos" />
                    </article>
                    <article>
                        <p>{data.switchDef}</p>
                        <img src="./img/js/switch.webp" alt="programacion-conceptos" />
                    </article>
                </div>
            </section>
            <section>
                <h4>Ciclos:</h4>
                <div>
                    <article>
                        <p>{data.forDef}</p>
                        <img src="./img/js/for.webp" alt="programacion-conceptos" />
                    </article>
                    <article>
                        <p>{data.whileDef}</p>
                        <img src="./img/js/while.webp" alt="programacion-conceptos" />
                    </article>
                    <article>
                        <p>{data.doWhile}</p>
                        <img src="./img/js/dowhile.webp" alt="programacion-conceptos" />
                    </article>
                </div>
            </section>
            <section>
                <h4>Arrays:</h4>
                <p>{data.arrayDef}</p>
                <h4>Indices: </h4>
                <p>{data.indiceArray}</p>
            </section>
            <section>
                <h4>Objetos:</h4>
                <p>{data.objectDef}</p>
            </section>
            <section>
                <h4>Propiedades:</h4>
                <p>{data.objectProps}</p>
                <img src="./img/js/objectprop.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Metodos</h4>
                <p>{data.objectDef}</p>
                <img src="./img/js/objectmethod.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>This:</h4>
                <p>{data.thisDef.definicion}</p>
                <ul>
                    <li>{data.thisDef.typeOne}</li>
                    <li>{data.thisDef.typeTwo}</li>
                    <li>{data.thisDef.typeThree}</li>
                </ul>
            </section>
            <section>
                <h4>Encadenador:</h4>
                <p>{data.encadenador}</p>
                <img src="./img/js/encadenador.webp" alt="" />
            </section>
            <section>
                <h4>Stack:</h4>
                <p>{data.stack}</p>
            </section>
            <section>
                <h4>Heap:</h4>
                <p>{data.heap}</p>
                <img src="./img/js/stackheap.webp" alt="programcion-conceptos" />
            </section>
            <section>
                <h4>Métodos de Arrays:</h4>
                <ul>
                    <li>{data.forEach}</li>
                    <li>{data.map}</li>
                    <li>{data.reduce}</li>
                    <li>{data.filter}</li>
                    <li>{data.some}</li>
                    <li>{data.otrosMetodos}</li>
                </ul>
            </section>
            <section>
                <h4>Funciones:</h4>
                <p>{data.funciones}</p>
            </section>
            <section>
                <h4>Diferencia entre funciones y funciones flecha:</h4>
                {data.difFunAndArrow.map((item,index) => (
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                ))}
            </section>
            <section>
                <h4>Funciones anonimas:</h4>
                <p>{data.funcionesAnonimas}</p>
                <img src="./img/js/funAnonima.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Recursividad:</h4>
                <p>{data.recursividad}</p>
                <img src="./img/js/recursividad.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Excepciones:</h4>
                <p>{data.excepciones}</p>
                <img src="./img/js/excepciones.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Tipo de excepciones:</h4>
                {data.typeExceptions.map((item, index)=>(
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                ))}
                <p>{data.excepciones2}</p>
            </section>
            <section>
                <h4>Sincronía:</h4>
                <p>{data.sincronia}</p>
                <img src="./img/js/sincro.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Asincronía:</h4>
                <p>{data.asincronia}</p>
                <img src="./img/js/asincro.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Callback:</h4>
                <p>{data.callback}</p>
                <img src="./img/js/callback.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Promesas:</h4>
                <p>{data.promesas}</p>
                <img src="./img/js/promise.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Tipo de promesas:</h4>
                {data.typePromises.map((item, index)=>(
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                ))}
            </section>
            <section>
                <h4>Promise All:</h4>
                <p>{data.promiseAll}</p>
                <img src="./img/js/promiseAll.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Promise Race:</h4>
                <p>{data.promiseRace}</p>
                <img src="./img/js/promiseRace.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Promise Settled</h4>
                <p>{data.promiseSettled}</p>
                <img src="./img/js/promiseSet.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>AsyncAwait:</h4>
                <p>{data.asyncAwait}</p>
            </section>
            <section>
                <h4>Async:</h4>
                <p>{data.asyncDef}</p>
            </section>
            <section>
                <h4>Await:</h4>
                <p>{data.awaitDef}</p>
                <p>{data.asyncAwait2}</p>
                <img src="./img/js/asyncawait.webp" alt="programacion-conceptos" />
            </section>
            <section>
                <h4>Prototypes:</h4>
                <p>{data.prototypeDef}</p>
            </section>
            <section>
                <h4>Conceptos importantes de prototype</h4>
                {data.prototypeConcepts.map((item, index) =>(
                    <div key={index}>
                        <p>{item.name}:</p>
                        <p>{item.definicion}</p>
                    </div>
                ))}
                <img src="./img/js/prototype1.webp" alt="programacion-conceptos" />
                <img src="./img/js/prototype2.webp" alt="programacion-conceptos" />
                <p>{data.prototypeFin}</p>
            </section>
            <section>
                <h4>Casos de Js</h4>
                <p>Casos típicos en JavaScript debido a su naturaleza no tipada:</p>
                {data.casesJs.map((item, index)=>(
                    <div key={index}>
                        <h4>{item.title}</h4>
                        <img src={item.image} alt="programacion-conceptos" />
                    </div>
                ))}
            </section>
        </div>

    </div>
  )
}

export default Javascript