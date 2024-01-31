
import { GraphQLError } from "graphql";
import { AsignaturaModel, AsignaturaModelType } from "../DB/Asignatura.ts"
import { ExamenModel, ExamenModelType } from "../DB/Examen.ts";
import { PracticaModel, PracticaModelType } from "../DB/Practica.ts";
import { TemaModel, TemaModelType } from "../DB/Tema.ts";
import { TareaModel, TareaModelType } from "../DB/Tarea.ts";
export const Mutation={
    nuevaAsignatura:async(_:unknown, args:{nombre:string, clase:string, horario:string, profesor:string, correo:string, parcial:string, final:string}):Promise<AsignaturaModelType>=>{
        const {nombre, clase, horario, profesor, correo, parcial, final}=args;
        const Asignatura={
            nombre, 
            clase, 
            horario,
            profesor,
            correo,
            parcial,
            final
        }
        const nuevaAsignatura=await AsignaturaModel.create(Asignatura);
        return nuevaAsignatura
    },
    nuevoTema:async(_:unknown,args:{nombre:string, ubicacion_tema:string, asignatura:string}):Promise<TemaModelType>=>{
        const {nombre, ubicacion_tema, asignatura}=args;
        const AsignaturaID=await AsignaturaModel.findOne({nombre:asignatura});
        if(!AsignaturaID)throw new Error("El nombre de la asignatura no existe");
        const Tema={
            nombre,
            ubicacion_tema,
            asignatura:AsignaturaID._id
        }
        const nuevoTema= await TemaModel.create(Tema);
        return nuevoTema;
    },
    nuevoExamen:async(_:unknown,args:{nombre:string, ano:number, ubicacion_enunciado:string, ubicacion_resolucion:string, asignatura:string}):Promise<ExamenModelType>=>{
        const {nombre, ano, ubicacion_enunciado, ubicacion_resolucion, asignatura}=args;
        const AsignaturaID=await AsignaturaModel.findOne({nombre:asignatura});
        if(!AsignaturaID)throw new Error("El nombre de la asignatura no existe");
        const Examen={
            nombre,
            ano,
            ubicacion_enunciado,
            ubicacion_resolucion,
            asignatura:AsignaturaID._id
        }
        const nuevoExamen=await ExamenModel.create(Examen);
        return nuevoExamen;
    },
    nuevaPractica:async(_:unknown, args:{nombre:string, a_realizar:boolean, dia:string, enunciado_practica:string,asignatura:string}):Promise<PracticaModelType>=>{
        const {nombre, a_realizar, dia, enunciado_practica,asignatura}=args;
        const AsignaturaID=await AsignaturaModel.findOne({nombre:asignatura});
        if(!AsignaturaID)throw new Error("El nombre de la asignatura no existe");
        const Practica={
            nombre,
            a_realizar,
            dia,
            enunciado_practica,
            asignatura:AsignaturaID._id
        }
        const nuevaPractica=await PracticaModel.create(Practica);
        return nuevaPractica;
    },
    nuevaTarea:async(_:unknown,args:{nombre:string, asignatura:string, dia:string}):Promise<TareaModelType>=>{
        const {nombre, asignatura, dia}=args;
        const asignaturaID=await AsignaturaModel.findOne({nombre:asignatura});
        if(!asignaturaID)throw new Error("El nombre de la asignatura no existe")
        const Tarea={
            nombre,
            dia,
            realizada:false,
            asignatura:asignaturaID._id
        }
        const nuevaTarea=await TareaModel.create(Tarea);
        return nuevaTarea;
    }
    ,
    ModificarAsignatura:async(_:unknown, args:{nombre:string, clase:string, horario:string, profesor:string, correo:string, parcial:string, final:string, asignatura:string}):Promise<AsignaturaModelType>=>{
        const {nombre, clase, horario, profesor, correo, parcial, final, asignatura}=args;
        const AsignaturaID=await AsignaturaModel.findOne({nombre:asignatura});
        if(!AsignaturaID)throw new Error("El nombre de la asignatura no existe");
        const asignaturaMod=await AsignaturaModel.findByIdAndUpdate(
            AsignaturaID._id.toString(),
            {nombre, clase, horario, profesor, correo, parcial, final},
            { new: true, runValidators: true }
        );
        if(!asignaturaMod){
            throw new GraphQLError(`No existe ninguna asignatura con este nombre: ${asignatura}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return asignaturaMod;
    },
    ModificarTema:async(_:unknown,args:{nombre:string, ubicacion_tema:string, ubicacion_resumen:string, ubicacion_ejercicios:string, ubicacion_resolucion_ejercicios:string, asignatura:string, tema:string}):Promise<TemaModelType>=>{
        const {nombre, ubicacion_tema, ubicacion_resumen, ubicacion_ejercicios, ubicacion_resolucion_ejercicios, asignatura, tema}=args;
        const temaID=await TemaModel.findOne({nombre:tema});
        if(!temaID)throw new Error("El nombre de la asignatura no existe");
        const temaUP=await TemaModel.findByIdAndUpdate(
            temaID._id.toString(),
            {nombre, ubicacion_tema, ubicacion_resumen, ubicacion_ejercicios, ubicacion_resolucion_ejercicios, asignatura},
            { new: true, runValidators: true }
        );
        if(!temaUP){
            throw new GraphQLError(`No existe ningun tema con este nombre: ${nombre}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return temaUP
    },
    ModificarExamen:async(_:unknown, args:{nombre:string, ano:number, ubicacion_enunciado:string, ubicacion_resolucion:string, asignatura:string, examen:string}):Promise<ExamenModelType>=>{
        const {nombre, ano, ubicacion_enunciado,ubicacion_resolucion, asignatura,examen}=args;
        const ExamenID=await ExamenModel.findOne({nombre:examen});
        if(!ExamenID)throw new Error("El nombre del examen no existe");
        const ExamenUP=await ExamenModel.findByIdAndUpdate(
            ExamenID._id.toString(),
            {nombre, ano, ubicacion_enunciado, ubicacion_resolucion, asignatura },
            { new: true, runValidators: true }
        )
        if(!ExamenUP){
            throw new GraphQLError(`No existe ningun examen con este nombre: ${nombre}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return ExamenUP
    },
   
    
}