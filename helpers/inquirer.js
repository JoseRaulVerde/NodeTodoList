const prompts = require("@inquirer/prompts");
require("colors");
const pregunta = {
  message: "¿Qué desea hacer?",
  choices: [
    { name: `${'1.'.green} Crear lista`, value: "1" },
    { name: `${'2.'.green} Listar tareas`, value: "2" },
    { name: `${'3.'.green} Listar tareas completadas`, value: "3" },
    { name: `${'4.'.green} Listar tareas pendientes`, value: "4" },
    { name: `${'5.'.green} Completar tarea(s)`, value: "5" },
    { name: `${'6.'.green} Borrar tarea`, value: "6" },
    { name: "  Salir", value: "0" },
  ],
};

const inquireMenu = async () => {
  // console.clear();
  console.log("====================================".green);
  console.log("   Seleccione una opción   ".red);
  console.log("====================================\n".green);

  const opt = await prompts.select(pregunta);

  return opt;
};

const pausa = async (message) => {
  await prompts.input({ message: `presione ${"ENTER".green} para continuar` });
  console.log("\n");
};

const leerInput = async (message) => {
  const answer = await prompts.input({
    message,
    validate: (input) => {
      return input.trim() === '' ? 'Por favor ingrese un valor válido.' : true;
  }});

  return answer;
};

const listadoTareasBorrar = async (tareas = [] ) =>{
 const choices = tareas.map((tarea, i)=>{
  const idx = `${i+1}.`.green

  return {
    value: tarea.id,
    name: `${idx} ${tarea.desc}`
  }
})
choices.unshift({
  value: '0',
  name: 'cancelar'
})
  const preguntaBorrar = {
    message: 'Borrar ?',
    choices
  }

  const value = await prompts.select(preguntaBorrar);
return value
}

const confirmar = async(message) =>{

  return await prompts.confirm({ message });

}

const mostrarListadoChecklist = async (tareas = [] ) =>{
  const choices = tareas.map((tarea, i)=>{
   const idx = `${i+1}.`.green
 
   return {
     value: tarea.id,
     name: `${idx} ${tarea.desc}`,
     checked: tarea.completadpEn ? true : false
   }
 })
 
   const answer = await prompts.checkbox({
    message: 'Selecciones',
    choices
   })
 return answer
 }
module.exports = {
  inquireMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
};
