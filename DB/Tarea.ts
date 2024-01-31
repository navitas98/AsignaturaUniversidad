import mongoose from "mongoose"
import { Tarea } from "../types.ts"
const Schema=mongoose.Schema;
const TareaSchema=new Schema({
    nombre:String,
    realizada:Boolean,
    dia:{type:String, requiered:false},
    asignatura:Schema.Types.ObjectId
})
TareaSchema.path("nombre").validate(async function (value:string) {
    const exit=await TareaModel.findOne({nombre:value});
        if(exit)return false;
        return true;
})
export type TareaModelType=mongoose.Document<Tarea,"asignatura">&{
    asignatura:mongoose.Types.ObjectId
}
export const TareaModel=mongoose.model<TareaModelType>("Tarea",TareaSchema);