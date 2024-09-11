const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquireMenu, 
  pausa, 
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
} = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

require("colors");

const main = async () => {
  let opt = "";
  const tareas = new Tareas()
  const tareasDB = leerDB();

  if (tareasDB){
    tareas.cargarTareasFromArray(tareasDB)
  }
  await pausa()

  do {
    console.clear()
    opt = await inquireMenu();

    switch (opt) {
      case '1':
        const desc = await leerInput('descripcion: ')
        tareas.crearTarea(desc)
        console.log(desc)
        break;
      case '2':
        tareas.listadoCompleto()
        break
      case '3':
          tareas.listarPendientesCompletadas()
          break
      case '4':
          tareas.listarPendientesCompletadas(false)
          break
          case '5':
            const ids = await mostrarListadoChecklist(tareas.listadoArr);
            tareas.toggleCompletadas(ids)
            break
      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr)
        if (id !== '0' ){
          const validacion = await confirmar('Estas seguro ?')
          if (validacion){
            tareas.borrarTarea(id)
            console.log('tarea borrada correctamente')
          }
        }
        break
      default:
        break;
    }

    guardarDB(tareas.listadoArr)
    await pausa();
  } while (opt !== "0");
};

main();
