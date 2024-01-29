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
    },
    horario:async(_:unknown, args:{dia:string}):Promise<AsignaturaModelType[]>=>{
        const {dia}=args;
        let datos;
        switch(dia){
            case "Lunes":
                const IA=await AsignaturaModel.findById("65b75f4513bee51d8fe89cf0");
                if(!IA)throw new Error("La asignatura no existe");
                datos=[];
                datos.push(IA);
                return datos;
            case "Martes":
                const disenoautomaticodesistemas=await AsignaturaModel.findById("65b7604d13bee51d8fe89cf3");
                if(!disenoautomaticodesistemas)throw new Error("La asignatura no existe")
                const estructura= await AsignaturaModel.findById("65b760ca22fecf1fd460d0ca");
                if(!estructura)throw new Error("La asignatura no existe")             
                 datos=[];
                datos.push(disenoautomaticodesistemas);
                datos.push(estructura);
                return datos
            case "Miercoles":
                const  programacion=await AsignaturaModel.findById("65b7621d22fecf1fd460d0cd");
                if(!programacion)throw new Error("La asignatura no existe");
                 datos=[];
                 datos.push(programacion);
                 return datos;
            case "Jueves":
                const redes=await AsignaturaModel.findById("65b7631222fecf1fd460d0d0");
                if(!redes)throw new Error("La asignatura no existe");
                datos=[];
                datos.push(redes);
                return datos;   
            case "sin asignar":
                const SO=await AsignaturaModel.findById("65b763e522fecf1fd460d0d4");
                if(!SO)throw new Error("La asignatura no existe");
                const Arquitectura=await AsignaturaModel.findById("65b763f622fecf1fd460d0d7")
                if(!Arquitectura)throw new Error("La asignatura no existe");
                datos=[];
                datos.push(SO);
                datos.push(Arquitectura);
                return datos;
            
            default:
                return [];
                
                
                
        }
    }
}