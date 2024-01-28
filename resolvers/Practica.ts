import { GraphQLError } from "graphql";
import { AsignaturaModel, AsignaturaModelType } from "../DB/Asignatura.ts";
import { PracticaModelType } from "../DB/Practica.ts";

export const Practica={
    asignatura:async(parent:PracticaModelType):Promise<AsignaturaModelType>=>{
        const asignatura=await AsignaturaModel.findById(parent.asignatura).exec();
        if(!asignatura){
            throw new GraphQLError(`No se ha encontrado ninguna ${parent.asignatura}`, {
                extensions: { code: "NOT_FOUND" },
        })
    }
    return asignatura;
}
}