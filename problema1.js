// Lista de contactos con datos predefinidos, agregando los nuevos parámetros solicitados
let listaContactos = [
  {
    id: 1,
    nombre: "Anyerson",
    apellido: "Castellanos",
    telefono: 4121481324,
    ubicaciones: [{ ciudad: "Maracay", dirección: "Turmero" }]
  },

  {
    id: 2,
    nombre: "Maria",
    apellido: "Castel",
    telefono: 4121234567,
    ubicaciones: [{ ciudad: "San Juan", dirección: "Guarico" }]
  },

  {
    id: 3,
    nombre: "Esteban",
    apellido: "Duarte",
    telefono: 44161234567,
    ubicaciones: [{ ciudad: "San Juan", dirección: "Guarico" }]
  }
];

function editarContacto (nombre, id, nombreEditado, apellidoEditado){

    const listaEditada = [];

    for (let i = 0; i < listaContactos.length; i++ ){

    if(listaContactos[i].nombre === nombre){
        const contactoEditado = {
            id: id,
            nombre: nombreEditado,
            apellido: apellidoEditado,
            telefono: 95392589,
            ubicaciones: [{ ciudad: "Santa Barbara", dirección: "Sinuapa" }]
        }
        listaEditada.push(contactoEditado)
    }else{
            listaEditada.push(listaContactos[i])
        };
    }  
    listaContactos=listaEditada
    return (listaContactos)
}

console.log(editarContacto("Anyerson", 5, "Edgardo", "Perdomo"));