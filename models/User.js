import { model,Schema } from "mongoose";

// primero crear el espacio virtual donde se van a guardar todos los documentos/modelos
// es decir la coleccion (conjuto de documentos/modelos de datos)
let collection = "users"

// lo siguiente es definir el schema de datos del modelo
// es decir el molde / la forma que tiene q tener mi modelo de datos
let schema = new Schema({
    name: { type:String,requiered:true},  // por defecto todos los datos son opcionales ( required:false)
    lastName: { type:String },            //si es opcional no necesito el required
    mail: { type:String ,required:true,unique:true}, // mail unicos
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" }, // si el cliente mana la foto la usa, sino el default
    password: { type:String,requiered:true },
    country: { type:String,requiered:true }
})
let User = model(collection,schema)
export default User