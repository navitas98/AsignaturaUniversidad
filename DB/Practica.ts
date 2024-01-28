import mogoose from "mongoose"
import { Practicas } from "../types.ts"
const schema=mogoose.Schema;
const PracticaSchema=new schema({
    nombre:String,
    a_realizar:Boolean,
    dia:String,
    enunciado_practica:String,
    asignatura:schema.Types.ObjectId
})
PracticaSchema.path("nombre").validate(async function (value:string) {
    const exit=await PracticaModel.findOne({nombre:value});
        if(exit)return false;
        return true;
})

export type PracticaModelType=mogoose.Document&Omit<Practicas,"asignatura">&{
    asignatura:mogoose.Types.ObjectId
}
export const PracticaModel=mogoose.model<PracticaModelType>("Practica",PracticaSchema);

