import { AsignaturaModel, AsignaturaModelType } from "../DB/Asignatura.ts";
import { ExamenModel, ExamenModelType } from "../DB/Examen.ts";
import { PracticaModel, PracticaModelType } from "../DB/Practica.ts";
import { TareaModel, TareaModelType } from "../DB/Tarea.ts";
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
    tarea:async(_:unknown, args:{nombre:string}):Promise<TareaModelType>=>{
        const tarea=await TareaModel.findOne({nombre:args.nombre});
        if(!tarea)throw new Error("No existe la tarea de ese nombre")
        return tarea;
    }
    ,
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
    },
    tareas:async():Promise<TareaModelType[]>=>{
        const tareas=await TareaModel.find().exec();
        return tareas;
    },
    horario:async(_:unknown,args:{dia:string}):Promise<AsignaturaModelType[]>=>{
        let datos;
        switch (args.dia){
            case"Lunes":
                datos=[];
                const ia=await AsignaturaModel.findById("65b75f4513bee51d8fe89cf0");
                if(!ia)throw new Error("La asignatura no existe");
                datos.push(ia);
                return datos
            case "Martes":
                datos=[];
                const sistemas=await AsignaturaModel.findById("65b7604d13bee51d8fe89cf3");
                if(!sistemas)throw new Error("La asignatura no existe");
                const estructura=await AsignaturaModel.findById("65b760ca22fecf1fd460d0ca")
                if(!estructura)throw new Error("La asignatura no existe");
                datos.push(sistemas);
                datos.push(estructura)
                return datos;
            case "Miercoles":
                datos=[];
                const programacion=await AsignaturaModel.findById("65b7621d22fecf1fd460d0cd");
                if(!programacion)throw new Error("La asignatura no existe");
                datos.push(programacion);
                return datos;
            case "Jueves":
                datos=[];
                const redes=await AsignaturaModel.findById("65b7631222fecf1fd460d0d0");
                if(!redes)throw new Error("La asignatura no existe");
                datos.push(redes);
                return datos
            case "sin asignar":
                datos=[];
                const SO=await AsignaturaModel.findById("65b763e522fecf1fd460d0d4");
                if(!SO)throw new Error("La asignatura no existe");
                datos.push(SO);
                const arquitectura=await AsignaturaModel.findById("65b763f622fecf1fd460d0d7");
                if(!arquitectura)throw new Error("La asignatura no existe");
                datos.push(arquitectura);
                return datos
            default:
                return []
        }
    }

}