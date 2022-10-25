///////////////////OBJETOS LITERALES
/*Aunque parezca que esta vacio, no lo esta
contiene los métodos por defecto del navegador
alojados en el prototipo (OBJETO MADRE)
llamado __proto__: Object*/

/*Ninguno de estos objetos son parte de un prototipo nuestro*/
const luis = {}

const enrique = {
    //Definimos atributos
    name: 'Enrique',
    age: 22,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    //Definimos un metodo
    //Tambien puede ser con funcion anonima == aprobarCurso: function(){}
    aprobarCurso(nombreCurso){
        this.cursosAprobados.push(nombreCurso);
    }
};

//Metemos un curso de manera directa con push
enrique.cursosAprobados.push('Curso de Responsive Design');
//Metemos un curso con el metodo de aprobar
enrique.aprobarCurso('Curso de métodos');

document.write(
    "<h3>" + enrique.name + ' <br>' +
    enrique.age + ' <br>' +
    enrique.cursosAprobados + "</h3>");

///////////////////PROTOTIPOS E INSTANCIAS
function Student(name, age, cursosAprobados){
    //Definimos atributos
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //Definimos métodos (primera forma)
    // this.aprobarCurso = function (cursoNombre){
    //     this.cursosAprobados.push(cursoNombre);
    // }
}

//Definimos métodos (segunda forma)
Student.prototype.aprobarCurso = function(cursoNombre){
    this.cursosAprobados.push(cursoNombre);
}

//Creamos la instancia de prototipo (instancia de clase)
const juanita = new Student(
    'Juanita', 
    20, 
    [
        'Java curso', 
        'Python curso'
    ]
);

//Llamamos al método para agregar el nombre de un nuevo curso aprobado
juanita.aprobarCurso('Curso nuevo ejemplo');

document.write('<h2>Datos de estudiante ' + juanita.name,
"<br>Edad = " + juanita.age, 
"<br>Cursos aprobados = " + juanita.cursosAprobados + "<h2>");

//////////////////////CREACION DE CLASES DINAMICAS
//Esta es una sintaxis mucho más moderna que podemos usar
class Student2 {
    //Metodo constructor recibe un objeto
    constructor({
        name,
        mail,
        age,
        twitter,
        instagram,
        facebook, 
        cursosAprobados = [] //Valor por defecto
    }){
        this.name = name;
        this.age = age;
        this.mail = mail;
        this.twitter = twitter;
        this.instagram = instagram;
        this.facebook = facebook;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(cursoNombre){
        this.cursosAprobados.push(cursoNombre);
    }
}

//Creamos nuestra instancia pasandole un objeto
const mario = new Student2({
    name: 'Mario',
    age: 20,
    mail: "mario@gmail.com",
    twitter: 'mariotwitter',
    instagram: 'instaMario'
});

//Usamos el método que creamos
mario.aprobarCurso('Curso 4');

//Imprimimos la data
document.write('<h2>Datos de estudiante ' + mario.name,
"<br>Edad = " + mario.age, 
"<br>Cursos aprobados = " + mario.cursosAprobados + "<h2>");


///////////////Practica con mas datos
