//Creamos el prototipo de PLATZI CLASS
export class PlatziClass{
    constructor({
        name,
        videoID
    }){ 
        this.name = name,
        this.videoID = videoID
    }

    //Reproducimos el video de nuestra clase
    reproducir(){
        videoPlay(this.videoID);
    }

    //Detenemos el video de nuestra clase
    detener(){
        videoStop(this.videoID);
    }
}

function videoPlay(id){
    const urlSecreta = "http://laConchaDeTuMama.com" + id;
    console.log('La URL secreta se esta reproduciendo', urlSecreta)
}

function videoStop(id){
    const urlSecreta = "http://laConchaDeTuMama.com" + id;
    console.log('La URL secreta se esta deteniendo', urlSecreta)
}

//Creamos el prototipo de los cursos
class Course{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        this._name = nuevoNombre;
    }
}

//Creamos nuevas instancias de curso
const cursoRascarse = new Course({
    name: "Curso de rascarse el ano",
    isFree: true
});

const cursoRedesNeuronales = new Course({
    name: "Curso de redes neuronales",
    lang: "english"
});

//Creamos el prototipo de ruta de aprendizaje
class LearningPath {
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }

    agregarCurso(nombreCurso){
        this.courses.push(nombreCurso);
    }
}

//Creamos nuevas rutas de aprendizaje
const escuelaWeb = new LearningPath({
    name: "Ruta de la escuela web",
    courses: [
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]
});

escuelaWeb.agregarCurso(cursoRascarse.name);

const escuelaData = new LearningPath({
    name: "Ruta de la escuela de data science",
    courses: [
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]
});

const escuelaVgs = new LearningPath({
    name: "Ruta de la escuela de videojuegos",
    courses: [
        "Curso 1",
        cursoRascarse.name,
        cursoRedesNeuronales.name
    ]
});

//Creamos el prototipo de estudiantes (SUPER CLASE)
class Student {
    //Pasamos atributos a el método constructor
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) { //Hacemos las asignaciones
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    //CREAMOS UN NUEVO MÉTODO PARA PUBLICAR COMENTARIO
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });

        comment.publicar();
    }
}

//CREAMOS NUESTRAS CLASES HIJAS (CON HERENCIA)
class freeStudent extends Student{
    //Jalamos el contructor de la clase madre STUDENT.
    constructor(props){
        super(props);
    }

    //Creamos el método de aprovacion de cursos
    aproveCourse(nuevoCurso){
        if(nuevoCurso.isFree == true){
            this.approvedCourses.push(nuevoCurso);
            console.log("Aprovado");
        }else{
            console.warn("Solo puedes tomar cursos grátis " + this.name);
        }
    }
}

class basicStudent extends Student{
    constructor(props){
        super(props);
    }

    aproveCourse(nuevoCurso){
        if(nuevoCurso.lang !== "english"){
            this.approvedCourses.push(nuevoCurso);
            console.log("Aprovado");
        }else{
            console.warn("Solo puedes tomar cursos que no esten en inglés " + this.name);
        }
    }
}

class expertStudent extends Student{
    constructor(props){
        super(props);
    }

    aproveCourse(nuevoCurso){
        this.approvedCourses.push(nuevoCurso);
        console.log("Aprovado");
    }
}

class teacherStudent extends Student{
    constructor(props){
        super(props);
    }

    aproveCourse(nuevoCurso){
        this.approvedCourses.push(nuevoCurso);
        console.log("Aprovado");
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "docente"
        });

        comment.publicar();
    }
}

//Se crean las dos instancias de prototipo.
const juan = new freeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const pedro = new basicStudent({
    name: "pedroDC",
    username: "pedrodc",
    email: "pedroito@pedroito.com",
    twitter: "fpedrodc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito = new expertStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const fredy = new teacherStudent({
    name: "fredy",
    username: "fredyfeliz",
    email: "fredy@juanito.com",
    instagram: "fredy_feliz"
});

//Creamos nuestra instancia de prototipo COMMENT
class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content,
        this.studentName = studentName,
        this.studentRole = studentRole
    }

    publicar(){
        if(this.studentRole == "estudiante"){
            console.log(this.studentName + " ha comentado " + this.content)
        }else{
            console.log("El docente " + this.studentName + " ha comentado " + this.content)
        }
    }
}

miguelito.publicarComentario("Soy un estudiante");
fredy.publicarComentario("Soy un docente");