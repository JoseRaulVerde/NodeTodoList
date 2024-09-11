const {v4: uuidv4} = require('uuid')

class Tarea {

  id = '';
  desc= ''; 
  completadpEn = null;

  constructor(desc){
    
    this.id = uuidv4();
    this.desc = desc;
    this.completadpEn = null

  }
}

module.exports = Tarea