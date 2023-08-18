import { model,Schema,Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type:String,required:true,unique:true },
    duration: { type:Number },
    price: { type:Number },
    tags: { type:Array },
    photo: { type:String,required:true },
    city_id: { type:Types.ObjectId,required:true,ref:'cities' }
    //para relacionar datos en mongo es necesario REFERENCIAR EL DATO HACIA LA COLECCION QUE NECESITO RELACIONARME
})
//estoy parado en el modelo City de la coleccion cities
//y necesito relacionar la propiedad admin_id con la coleccion users
//esto lo logro REFERENCIANDO con la propiedad ref:'nombreDeLaColeccionaReferenciarse'

let Itinerary = model(collection,schema)
export default Itinerary