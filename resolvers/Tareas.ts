import { GraphQLError } from "graphql";
import { AsignaturaModel, AsignaturaModelType } from "../DB/Asignatura.ts";
import { TareaModelType } from "../DB/Tarea.ts";

export const Tarea={
    asignatura:async(parent:TareaModelType):Promise<AsignaturaModelType>=>{
        const asignatura=await AsignaturaModel.findById(parent.asignatura).exec();
        if(!asignatura){
            throw new GraphQLError(`No se ha encontrado ninguna ${parent.asignatura}`, {
                extensions: { code: "NOT_FOUND" },
        })
    }
    return asignatura;
}
}