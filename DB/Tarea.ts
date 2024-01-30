import mongoose from "mongoose"
import { Tarea } from "../types.ts"
const Schema=mongoose.Schema;
const TareaSchema=new Schema({
    nombre:String,
    realizada:Boolean,
    dia:String,
    asignatura:Schema.Types.ObjectId
})
export type TareaModelType=mongoose.Document<Tarea,"asignatura">&{
    asignatura:mongoose.Types.ObjectId
}
export const TareaModel=mongoose.model<TareaModelType>("Tarea",TareaSchema);