import React from 'react'


let nombreTS:string = "pepe";
let edadTS:number = 25;
let isadminTS:boolean = false;
let nuloTS:null = null;
let indefinidoTS:undefined = undefined;

const  lenguajes:string[] = ["javascript","typescript","python"]
const numeros:number[] = [1,2,3,4,5]

//array de objetos
const usuarios:{nombre:string, edad:number}[]=[
    {nombre: "Pepe" , edad: 25},
    {nombre: "Sara" , edad: 30},
    {nombre: "Maria" , edad: 20},
]

// objeto simple tipado

const persona:{nombre:string, edad:number, isAdmin:boolean}={
    nombre: "Maria",
    edad: 30,
    isAdmin: true,
}

//si accedo a persona.apellidos <-- Error, Property apellidos does not exist
// **************** INTERFACES ************************
//las interfaces son un "contrato" que va a definir la forma que tiene un objeto
interface Usuario {
    id:number,
    nombre:string,
    email:string,
    edad?:number, // la interrogacion significa que edad es opcional, puede o no puede existir
    activo:boolean,
}

const usuario1:Usuario = {
    id: 1,
    nombre: "Mario",
    email: "mario@gmail.com",
    activo: true,
    //edad era opcional
}

const usuario2:Usuario = {
    id: 1,
    nombre: "Paula",
    email: "paula@gmail.com",
    edad:18,
    activo: true,
}


function sumar(a:number, b:number):number{
    return a+b;
}

function saludar(nombre:string):void {
    console.log("Bienvenido ",nombre)
}

//funciones con parametros opcionales

function crearUsuario(nombre:string, edad?:number):Usuario{
    return {
        id: Date.now(),
        nombre:nombre,
        email: `${nombre.toLowerCase()}@gmail.com`,
        edad:edad,
        activo: true,
    }
}

//union Types (Posibles valores que puede tomar una variable)

let id: string|number;
// id=true <-- Error

type Tamano = "small" | "medium" | "large";

let talla:Tamano = "medium";

//---------------------Cuando usar Types y cuando usar Interfaces -----------------------------
//usar Types con primitivos y uniones
//usar Interfaces con Objetos

// Ejemplo:

type ID = string | number;
type Estado = "pendiente" | "completado" | "cancelado";

interface Persona {
    nombre:string,
    edad:number
}

//extender una interface

interface Empleado extends Persona{
    puesto:string,
    salario:number
}

const empleado1:Empleado = {
    nombre: "Manolo",
    edad:53,
    puesto: "Animador Deportivo",
    salario: 50000
}


const Recuerdo = () => {
  return (
    <div>
      
    </div>
  )
}

export default Recuerdo
