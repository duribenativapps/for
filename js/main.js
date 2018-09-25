var estudiantes = [
   {'nombre':'jonner', 'nota':'1'},
   {'nombre':'david', 'nota':'0'},
   {'nombre':'fernando', 'nota':'5'},
   {'nombre':'rosa', 'nota':'4'}
]

function promedio(){
    var sumatoria = 0;
    var promedio = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        sumatoria = sumatoria + parseInt(estudiantes[i].nota)
    }
    promedio = (sumatoria/estudiantes.length)
    console.log("El promedio es", promedio)
}
promedio()

function mayor(){
    var notaMayor = 0 //1, 5;
    for (let i = 0; i < estudiantes.length; i++) {
        if(estudiantes[i].nota>notaMayor){
            notaMayor = estudiantes[i].nota
        }
    }
    console.log(notaMayor)    
}
mayor()

function menor(){
    var menor = 1000000000000000000 //1, 0;
    for (let i = 0; i < estudiantes.length; i++) {
        if(estudiantes[i].nota<menor){
            menor = estudiantes[i].nota
        }
    }
    console.log(menor)
}
menor();

