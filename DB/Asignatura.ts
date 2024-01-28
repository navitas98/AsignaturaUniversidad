import mogoose from "mongoose"
import { Asignatura } from "../types.ts"
const schema=mogoose.Schema;
const AsignaturaSchema=new schema({
    nombre:String,
    clase:String,
    horario:String,
    profesor:String,
    correo:String,
    parcial:String,
    final:String
})
AsignaturaSchema.path("nombre").validate(async function (value:string) {
    const exit=await AsignaturaModel.findOne({nombre:value});
        if(exit)return false;
        return true;
})
export type AsignaturaModelType=mogoose.Document&Omit<Asignatura,"examen"|"temas"|"practicas">
export const AsignaturaModel=mogoose.model<AsignaturaModelType>("Asignatura",AsignaturaSchema)