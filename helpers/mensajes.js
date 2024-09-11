require('colors')

const mostrarMenu = ()=>{
  return new Promise(resolve =>{
    
    console.clear()
    console.log('===================================='.green)
    console.log('         seleccione una opcion      '.red)
    console.log('====================================\n'.green)
  
    console.log(`${'1'.green}. Crear tarea`)
    console.log(`${'2'.green}. Listar Tareas`)
    console.log(`${'3'.green}. Listar Tareas completadas`)
    console.log(`${'4'.green}. Listar tareas Pendientes`)
    console.log(`${'5'.green}. Completar Tarea(s)`)
    console.log(`${'6'.green}. Borrar Tarea`)
    console.log(`${'1'.green}. Crear tarea`)
    console.log(`${'0'.green}. Salir \n`)
  
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    readLine.question('seleccione una opcion ', (opt)=>{
      readLine.close()
      resolve(opt)
    })
  })
}

const pouse = () =>{
  return new Promise (resolve=>{

    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    readLine.question(`presione ${'ENTER'.green} para continuar`, (opt)=>{
      readLine.close()
      resolve()
    })
  })

}

module.exports= {
  mostrarMenu,
  pouse
}