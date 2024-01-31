export type Asignatura={
    id:string,
    nombre:string,
    clase:string,
    horario:string,
    profesor:string,
    correo:string,
    parcial:string,
    final:string,
    examen:Examen[],
    temas:Tema[],
    practicas:Practicas[]
}
export type Examen={
    id:string,
    nombre:string,
    ano:number,
    ubicacion_enunciado:string,
    ubicacion_resolucion:string,
    asignatura:Asignatura
}
export type Tema={
    id:string,
    nombre:string,
    ubicacion_tema:string,
    ubicacion_resumen?:string,
    ubicacion_ejercicios?:string,
    ubicacion_resolucion_ejercicios?:string,
    asignatura:Asignatura
}
export type Practicas={
    id:string,
    nombre:string,
    a_realizar:boolean,
    dia:string,
    enunciado_practica:string,
    asignatura:Asignatura
}
export type Tarea={
    id:string,
    nombre:string,
    realizada:boolean,
    asignatura:Asignatura
    dia?:string

}