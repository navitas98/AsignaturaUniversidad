import mogoose from "mongoose"
import { Tema } from "../types.ts"
const schema=mogoose.Schema;
const TemaSchema=new schema({
    nombre:String,
    ubicacion_tema:String,
    ubicacion_resumen:{type:String, requiered:false},
    ubicacion_ejercicios:{type:String, requiered:false},
    ubicacion_resolucion_ejercicios:{type:String, requiered:false},
    asignatura:schema.Types.ObjectId
})
TemaSchema.path("nombre").validate(async function (value:string) {
    const exit=await TemaModel.findOne({nombre:value});
        if(exit)return false;
        return true;
})
export type TemaModelType=mogoose.Document&Omit<Tema,"asignatura">&{
    asignatura:mogoose.Types.ObjectId
}
export const  TemaModel=mogoose.model<TemaModelType>("Tema",TemaSchema);