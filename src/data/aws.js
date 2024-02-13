const amazonWebServices = "AWS significa Amazon Web Services. Es una plataforma de servicios en la nube ofrecida por Amazon.com"+
" que proporciona una amplia gama de servicios de computación en la nube, incluyendo almacenamiento, redes, bases de datos, análisis,"+
" inteligencia artificial, aprendizaje automático, Internet de las cosas (IoT), seguridad, y mucho más."

const amazonWebServices2 = "AWS permite a las empresas y a los individuos acceder a recursos informáticos escalables y asequibles"+
" sin la necesidad de invertir en infraestructura física costosa. Los usuarios pueden utilizar los servicios de AWS para alojar"+
"sitios web, ejecutar aplicaciones, almacenar datos, implementar redes y mucho más, todo ello de manera flexible y conforme a la demanda."

const escalados = "Escalar vertical y horizontal son dos enfoques diferentes para mejorar el rendimiento y la capacidad de un sistema o una aplicación."

const escaladoVertical = [
    "En el escalado vertical, también conocido como escalamiento hacia arriba, se mejora el rendimiento de un sistema aumentando la capacidad de los recursos individuales, como la CPU, la RAM o el almacenamiento de un solo servidor.",
    "Por ejemplo, si tienes un servidor con una CPU de cuatro núcleos y necesitas más capacidad de procesamiento, puedes actualizar esa CPU a una con ocho núcleos.",
    "El escalado vertical tiene sus limitaciones en cuanto a cuánto puedes escalar, ya que hay un límite físico para los recursos de un solo servidor."
]

const escaladoHorizontal = [
    "En el escalado horizontal, también conocido como escalamiento hacia fuera, se mejora el rendimiento de un sistema aumentando el número de instancias de servidores o máquinas virtuales.",
    "En lugar de agregar más recursos a un único servidor, se agregan más servidores que trabajan juntos para manejar la carga.",
    "Este enfoque es altamente escalable y puede adaptarse fácilmente a aumentos repentinos en la demanda de recursos.",
    "Por ejemplo, en lugar de mejorar la CPU de un servidor, podrías agregar más servidores idénticos a tu conjunto para distribuir la carga."
]

const escaladoResumen = "En resumen, el escalado vertical implica aumentar la capacidad de un solo recurso, mientras que el escalado horizontal implica agregar más recursos idénticos para distribuir la carga. En la práctica, muchas arquitecturas de sistemas modernos combinan ambos enfoques para lograr un rendimiento óptimo y una alta disponibilidad."

/*Algunos Servicios*/

const ec2 = "Amazon EC2 (Elastic Compute Cloud) EC2 permite a los usuarios alquilar máquinas virtuales (instancias) en la nube y ejecutar aplicaciones en ellas."

const caracteristicasEc2 = [
    {
        title: "Escabilidad:",
        description: "Los usuarios pueden escalar vertical u horizontalmente las capacidades de computación según sea necesario. Pueden aumentar o disminuir la cantidad de instancias de EC2 en función de la demanda de la aplicación."
    },
    {
        title: "Variedad de Instancias: ",
        description: "Amazon EC2 ofrece una amplia gama de tipos de instancias con diferentes combinaciones de CPU, memoria, almacenamiento y capacidad de red. Los usuarios pueden elegir el tipo de instancia que mejor se adapte a sus necesidades de computación."
    },
    {
        title: "Flexibilidad: ",
        description: "Los usuarios tienen control completo sobre sus instancias de EC2. Pueden iniciar, detener, terminar y administrar las instancias según sea necesario. También pueden elegir el sistema operativo, configurar la red y administrar el almacenamiento de datos de sus instancias."
    }
]

const rds = "Amazon RDS (Relational Database Service) RDS simplifica el proceso de configuración, operación y escalado de bases de datos relacionales en la nube."

const caracteristicasRds = [
    {
        title:"Gestión Automatizada:",
        description:"Amazon RDS maneja tareas administrativas complejas, como la configuración de hardware, la instalación de software de base de datos, las copias de seguridad regulares, la aplicación de parches de software y la escalabilidad de la capacidad de almacenamiento."
    },
    {
        title:"Compatibilidad con Diversas Bases de Datos:",
        description:"RDS es compatible con varios motores de bases de datos relacionales populares, incluyendo MySQL, PostgreSQL, MariaDB, Oracle Database y SQL Server, lo que permite a los usuarios elegir el motor de base de datos que mejor se adapte a sus necesidades."
    },
    {
        title:"Escalabilidad:",
        description:"Los usuarios pueden escalar vertical u horizontalmente sus bases de datos en función de la demanda. Amazon RDS permite aumentar o disminuir la capacidad de procesamiento y almacenamiento de la base de datos con solo unos pocos clics o llamadas a la API."
    },
    {
        title:"Alta Disponibilidad y Tolerancia a Fallos:",
        description:"RDS ofrece opciones de implementación de alta disponibilidad que garantizan la continuidad del servicio incluso en caso de fallos de hardware o pérdida de conectividad. Esto incluye la replicación automática de datos en varias zonas de disponibilidad."
    },
    {
        title:"Seguridad:",
        description:"Amazon RDS proporciona varias capas de seguridad para proteger los datos almacenados en las bases de datos, incluyendo la encriptación de datos en reposo y en tránsito, el control de acceso basado en roles (IAM) y la protección contra amenazas."
    }
]

const s3 = "Amazon S3 (Simple Storage Service) . S3 permite a los usuarios almacenar y recuperar grandes cantidades de datos de manera segura y eficiente a través de internet.(archivos, fotos,etc)"

const caracteristicasS3 = [
    {
        title:"Escabilidad:",
        description:"S3 está diseñado para ser altamente escalable, lo que significa que puede almacenar cualquier cantidad de datos, desde unos pocos gigabytes hasta varios terabytes o más, sin necesidad de preocuparse por la infraestructura subyacente.",
    },
    {
        title:"Durabilidad y Disponibilidad:",
        description:"S3 ofrece una durabilidad excepcional de los datos, lo que significa que los objetos almacenados en S3 están diseñados para ser altamente resistentes a fallos. Los datos se replican automáticamente en múltiples ubicaciones para garantizar la disponibilidad y la integridad de los datos.",
    },
    {
        title:"Facilidad de Uso: ",
        description:"S3 proporciona una interfaz simple y fácil de usar para cargar, descargar y administrar objetos de datos. Los usuarios pueden acceder a S3 a través de la consola de administración de AWS, la interfaz de línea de comandos (CLI) de AWS o mediante SDKs y APIs para diversos lenguajes de programación.",
    },
    {
        title:"Seguridad:",
        description:"S3 ofrece varias capas de seguridad para proteger los datos almacenados, incluyendo la autenticación de usuarios y aplicaciones, la encriptación de datos en reposo y en tránsito, y el control de acceso basado en políticas.",
    },
    {
        title:"Economía:",
        description:"S3 utiliza un modelo de precios pay-as-you-go, lo que significa que los usuarios solo pagan por el almacenamiento y la transferencia de datos que utilizan, sin costos mínimos ni compromisos a largo plazo.",
    },
]

const iam = "IAM, que significa Identity and Access Management (Gestión de Identidad y Acceso), permite a los usuarios controlar de manera segura el acceso a los recursos de AWS. IAM permite crear y administrar usuarios, grupos y roles dentro de una cuenta de AWS, así como definir políticas de acceso para especificar qué acciones pueden realizar los usuarios en qué recursos."

const caracteristicasIam = [
    {
        title:"Usuarios y Grupos:",
        description:"IAM permite crear usuarios individuales y asignarles credenciales de acceso únicas. Los usuarios pueden ser agrupados en grupos lógicos, lo que facilita la gestión de permisos y políticas de acceso."
    },
    {
        title:"Roles:",
        description:"Los roles de IAM son identidades temporales que pueden asignarse a usuarios, servicios o recursos dentro de AWS. Los roles permiten conceder permisos de manera temporal y segura sin la necesidad de compartir credenciales de acceso."
    },
    {
        title:"Políticas de Acceso:",
        description:"IAM utiliza políticas de acceso para definir qué acciones están permitidas o prohibidas en los recursos de AWS. Las políticas de acceso son documentos JSON que especifican los permisos y las condiciones bajo las cuales se pueden realizar ciertas acciones."
    },
    {
        title:"Multi-factor Authentication (MFA):",
        description:"IAM permite habilitar la autenticación multifactor (MFA) para usuarios, lo que añade una capa adicional de seguridad al requerir un segundo factor de autenticación, como un código generado por una aplicación móvil o un dispositivo físico."
    },
    {
        title:"Registro de Actividad (CloudTrail):",
        description:"IAM se integra con AWS CloudTrail, que proporciona un registro detallado de todas las acciones realizadas por usuarios, incluidos los cambios en las políticas de acceso, la creación de usuarios, el acceso a recursos, etc."
    }
]

const lambda = "AWS Lambda es un servicio de cómputo sin servidor que permite a los desarrolladores ejecutar código sin tener que aprovisionar ni administrar servidores. Lambda se encarga de la infraestructura subyacente, permitiendo a los desarrolladores centrarse en escribir y desplegar funciones individuales."

const caracteristicasLambda = [
    {
        title:"Cómputo sin Servidor:",
        description:"En Lambda, los desarrolladores pueden cargar su código en forma de funciones, y AWS se encarga de ejecutar estas funciones de manera automatizada y escalable sin necesidad de provisionar o administrar servidores."
    },
    {
        title:"Eventos y Activadores:",
        description:"Lambda puede responder a una variedad de eventos y activadores, como cambios en los datos de Amazon S3, actualizaciones en tablas de Amazon DynamoDB, mensajes en colas de Amazon SQS, solicitudes HTTP a través de Amazon API Gateway, entre otros."
    },
    {
        title:"Escala Automática:",
        description:"Lambda escala automáticamente la capacidad de cómputo en función de la demanda de la aplicación. No es necesario preocuparse por el aprovisionamiento de recursos ni el dimensionamiento de la infraestructura."
    },
    {
        title:"Pago por Uso:",
        description:"Lambda utiliza un modelo de precios de pago por uso, lo que significa que los desarrolladores solo pagan por el tiempo de cómputo utilizado por sus funciones. No hay cargos por tiempo de inactividad ni por infraestructura subyacente."
    },
    {
        title:"Compatibilidad con Varios Lenguajes de Programación:",
        description:"Lambda es compatible con varios lenguajes de programación populares, incluyendo Python, Node.js, Java, C#, Go y Ruby, lo que permite a los desarrolladores utilizar su lenguaje preferido para escribir funciones."
    },
    {
        title:"Integración con Servicios AWS:",
        description:"Lambda se integra estrechamente con otros servicios de AWS, lo que permite a los desarrolladores crear arquitecturas de aplicaciones complejas y altamente escalables utilizando una combinación de servicios sin servidor."
    }
]

const awsExports = {
    amazonWebServices,
    amazonWebServices2,
    escalados,
    escaladoVertical,
    escaladoHorizontal,
    escaladoResumen,
    ec2,
    caracteristicasEc2,
    rds,
    caracteristicasRds,
    s3,
    caracteristicasS3,
    iam,
    caracteristicasIam,
    lambda,
    caracteristicasLambda
}

export default awsExports;