export const typeDefs = `#graphql
type Asignatura{
    id:ID!
    nombre:String!
    clase:String!
    horario:String!
    profesor:String!
    correo:String!
    parcial:String!
    final:String!
    examen:[Examen!]!
    temas:[Tema!]!
    practicas:[Practica!]!
}
type Tema{
    id:ID!
    nombre:String!
    ubicacion_tema:String!
    ubicacion_resumen:String
    ubicacion_ejercicios:String
    ubicacion_resolucion_ejercicios:String
    asignatura:Asignatura!
}
type  Examen{
    id:ID!
    nombre:String!
    ano:Int!
    ubicacion_enunciado:String!
    ubicacion_resolucion:String!
    asignatura:Asignatura!
}
type Practica{
    id:ID!
    nombre:String!
    a_realizar:Boolean!
    dia:String!
    enunciado_practica:String!
    asignatura:Asignatura!
}
type Mutation{
   
    nuevaAsignatura(nombre:String!, clase:String!, horario:String!, profesor:String, correo:String!, parcial:String!, final:String!):Asignatura!
    nuevoTema(nombre:String!, ubicacion_tema:String!, asignatura:String!):Tema!
    nuevoExamen(nombre:String!, ano:Int!, ubicacion_enunciado:String!, ubicacion_resolucion:String!,asignatura:String!):Examen!
    nuevaPractica(nombre:String!, a_realizar:Boolean!, dia:String!, enunciado_practica:String!, asignatura:String!):Practica!
    
    ModificarAsignatura(nombre:String, clase:String, horario:String, profesor:String, correo:String, parcial:String, final:String, asignatura:String!):Asignatura!
    ModificarTema(nombre:String, ubicacion_tema:String, ubicacion_resumen:String, ubicacion_ejercicios:String, ubicacion_resolucion_ejercicios:String, asignatura:String, tema:String!):Tema!
    ModificarExamen(nombre:String, ano:Int, ubicacion_enunciado:String, ubicacion_resolucion:String, asignatura:String, examen:String!):Examen!
   
}
type Query{
    test:String!
    asignatura(nombre:String!):Asignatura!
    tema(nombre:String!):Tema!
    examen(nombre:String!):Examen!
    practica(nombre:String!):Practica!
    
    asignaturas:[Asignatura!]!
    temas:[Tema!]!
    examenes:[Examen!]!
    practicas:[Practica!]!
}
`