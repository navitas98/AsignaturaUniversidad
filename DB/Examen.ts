import mogoose from "mongoose"
import { Examen } from "../types.ts"
const schema=mogoose.Schema;
const ExamenSchema=new schema({
    nombre:String,
    ano:Number,
    ubicacion_enunciado:String,
    ubicaciom_resolucion:String,
    asignatura:schema.Types.ObjectId
})
ExamenSchema.path("nombre").validate(async function (value:string) {
    const exit=await ExamenModel.findOne({nombre:value});
        if(exit)return false;
        return true;
})
export type ExamenModelType=mogoose.Document&Omit<Examen,"asignatura">&{
    asignatura:mogoose.Types.ObjectId
}
export const ExamenModel=mogoose.model<ExamenModelType>("Examen",ExamenSchema);
