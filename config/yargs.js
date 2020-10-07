// const opciones = {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Marca como completado o pendiente las tareas'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente las tareas'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea descrita', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}