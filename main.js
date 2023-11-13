nombre_alumno_array = [];

function submit()
{
var nombre_1 = document.getElementById("nomber_alumno_1").value;
var nombre_2 = document.getElementById("nomber_alumno_2").value;
var nombre_3 = document.getElementById("nomber_alumno_3").value;
var nombre_1 = document.getElementById("nomber_alumno_4").value;

nombre_alumno_array.push(nombre_1);
nombre_alumno_array.push(nombre_2);
nombre_alumno_array.push(nombre_3);
nombre_alumno_array.push(nombre_4);

console.log(nombre_alumno_array);

document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;

}