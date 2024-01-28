import { AsignaturaModelType } from "../DB/Asignatura.ts";
import { ExamenModel, ExamenModelType } from "../DB/Examen.ts";
import { PracticaModel, PracticaModelType } from "../DB/Practica.ts";
import { TemaModel, TemaModelType } from "../DB/Tema.ts";

export const Asignatura={
    examen:async(parent:AsignaturaModelType):Promise<ExamenModelType[]>=>{
        const examen= await ExamenModel.find({asignatura:parent._id});
        return examen;
    },
    practicas:async(parent:AsignaturaModelType):Promise<PracticaModelType[]>=>{
        const practica=await PracticaModel.find({asignatura:parent._id});
        return practica;
    },
    temas:async(parent:AsignaturaModelType):Promise<TemaModelType[]>=>{
        const practica=await TemaModel.find({asignatura:parent._id});
        return practica;
    },
}