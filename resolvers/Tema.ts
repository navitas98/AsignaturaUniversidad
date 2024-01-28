import { GraphQLError } from "graphql";
import { AsignaturaModel, AsignaturaModelType } from "../DB/Asignatura.ts";
import { TemaModelType } from "../DB/Tema.ts";

export const Tema={
    asignatura:async(parent:TemaModelType):Promise<AsignaturaModelType>=>{
        const asignatura=await AsignaturaModel.findById(parent.asignatura).exec();
        if(!asignatura){
            throw new GraphQLError(`No se ha encontrado ninguna ${parent.asignatura}`, {
                extensions: { code: "NOT_FOUND" },
        })
    }
    return asignatura;
}
}