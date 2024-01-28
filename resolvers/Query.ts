import { AsignaturaModel, AsignaturaModelType } from "../DB/Asignatura.ts";
import { ExamenModel, ExamenModelType } from "../DB/Examen.ts";
import { PracticaModel, PracticaModelType } from "../DB/Practica.ts";
import { TemaModel, TemaModelType } from "../DB/Tema.ts";

export const Query={
    asignatura:async(_:unknown,args:{nombre:string}):Promise<AsignaturaModelType>=>{
        const asignatura=await AsignaturaModel.findOne({nombre:args.nombre});
        if(!asignatura)throw new Error("No existe ninguna asignatura con ese nombre");
        return asignatura;
    },
    tema:async(_:unknown, args:{nombre:string}):Promise<TemaModelType>=>{
        const tema=await TemaModel.findOne({nombre:args.nombre});
        if(!tema)throw new Error("No existe ningun tema con ese nombre");
        return tema
    },
    practica:async(_:unknown, args:{nombre:string}):Promise<PracticaModelType>=>{
        const practica=await PracticaModel.findOne({nombre:args.nombre});
        if(!practica)throw new Error("No existe ninguna practica con ese nombre");
        return practica
    },
    examen:async(_:unknown, args:{nombre:string}):Promise<ExamenModelType>=>{
        const examen=await ExamenModel.findOne({nombre:args.nombre});
        if(!examen)throw new Error("No existe ningun examen con ese nombre");
        return examen
    },
    asignaturas:async():Promise<AsignaturaModelType[]>=>{
        const asignatura=await AsignaturaModel.find().exec();
        return asignatura;
    },
    temas:async():Promise<TemaModelType[]>=>{
        const tema=await TemaModel.find().exec();
        return tema
    },
    examenes:async():Promise<ExamenModelType[]>=>{
        const examen=await ExamenModel.find().exec();
        return examen;
    },
    practicas:async():Promise<PracticaModelType[]>=>{
        const practica=await PracticaModel.find().exec();
        return practica;
    }
}