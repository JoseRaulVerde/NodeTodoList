const { v4: uuidv4 } = require("uuid");
const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id= ''){
    delete this._listado[id]
  }

  crearTarea(descr = "") {
    const tarea = new Tarea(descr);

    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }
  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((tarea, i) => {
      const { completadpEn, desc } = tarea;
      console.log(
        `${i + 1}.${desc} :: ${
          completadpEn ? `${completadpEn.toString().green}` : "Pendiente".red
        }`
      );
    });
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();
    let count = 0
    this.listadoArr.forEach((tarea, i) => {
      const { completadpEn, desc } = tarea;
      if (Boolean(completadpEn) === completadas){
        count += 1
        console.log(
          `${completadas? count.toString().green : count.toString().red}.${desc} :: ${
            completadpEn ? `${completadpEn.toString().green}` : 'Pendiente'.red
            }`
          );
        }
    });
  }

  toggleCompletadas(ids = []){
    ids.forEach(id => {

      const tarea = this._listado[id]
      if (!tarea.completadpEn){
        tarea.completadpEn = new Date().toISOString()
      }
    })

    this.listadoArr.forEach(tarea =>{
      if (!ids.includes(tarea.id)){
        this._listado[tarea.id].completadpEn = null
        
      }
    })

  }
}


module.exports = Tareas;
