

function listarEstudiantes() {
			var tabla="";
			tabla += '<table class = "table" ><thead>';
			tabla += '<tr>';
			tabla += '<th>CODIGO</th>';
			tabla += '<th>NOMBRE</th>';
			tabla += '<th>NOTA</th>';
			tabla += '<th  colspan="2" style="text-align:center;">GESTIONAR</th>';
			tabla += '</tr></thead><tbody>';

			for(var i=0; i<localStorage.length; i++){

			 	var clave = localStorage.key(i);
			 	var estudiante=$.parseJSON(localStorage.getItem(clave));

			 	tabla +='<tr>';
			 	tabla +='<td>'+estudiante.codigo+'</td>';
			 	tabla +='<td>'+estudiante.nombre+'</td>';
			 	tabla +='<td>'+estudiante.nota+'</td>';
			 	tabla +='<td style="text-align:center;"><button onclick="editarEstudiante(\''+estudiante.codigo+'\');">Editar</button></td>';
			 	tabla +='<td style="text-align:center;"><button onclick="eliminarEstudiante(\''+estudiante.codigo+'\');">Eliminar</button></td>';
			 	tabla +='<tr>';
			 }
			 tabla+='</tbody></table>';
			 $("#estudiantes").html(tabla);
	}

function editarEstudiante(codigo) {
		var estudiante;
		for(var i=0; i<localStorage.length; i++){
			var clave = localStorage.key(i);
			if(clave == codigo){
		 		estudiante=$.parseJSON(localStorage.getItem(clave));
		 		$("#CodEstudiantes").val(estudiante.codigo);
		 		$("#NombreEstudiante").val(estudiante.nombre);
		 		$("#NotaEstudiante").val(estudiante.nota);
		 	}
		 }

	}


function eliminarEstudiante(codigo){
	localStorage.removeItem(codigo);
	listarEstudiantes();
}


function calcularPromedioNotas(estudiante) {
	/*var aux = 0.0;
    for (i = 0; i < json.length; i++) {
        aux += json[i].nota;
    }*/
    
    var acumulador = 0.0;
    for (var i = 0; i < localStorage.length; i++) {
    	var clave = localStorage.key(i);
    	var estudiante = $.parseJSON(localStorage.getItem(clave));
    	acumulador += parseFloat(estudiante.nota);
    }

    
    var promedioN=acumulador/localStorage.length
    document.getElementById("promedioNotaModal").innerHTML = "<h1>"+promedioN.toFixed(2)+ "</h1>";
}

function mostrarPromedio() {
    calcularPromedioNotas(estudiantes);
}

function mejorEstudiante() {
            //var Mayor = localStorage.key(0).nota; 

            var Mayor = $.parseJSON(localStorage.getItem(localStorage.key(0))).nota;//Mayor se inicializa con el primer valor del arreglo

            for (var i = 0; i <localStorage.length; i++) {

            	var clave = localStorage.key(i);
    			var estudiante = $.parseJSON(localStorage.getItem(clave));

                //comparamos si cada elemento del arreglo con Mayor
                  if (estudiante.nota > Mayor){

                    Mayor = estudiante.nota; //Remplazamos Mayor por el elemento que acabamos de encontrar, si no, queda como está
                    pos = estudiante.nombre+"<br>";//gurdamos el nombre en la variable pos

                }
                
            }
            clave = localStorage.key(pos);
			estudiante = $.parseJSON(localStorage.getItem(clave))
            
            document.getElementById("mejorNotaModal").innerHTML = "<h4>" + pos + "</h4><h4>"+ Mayor+ "</h4>";
        }

function mostrarMejorNota() {
    mejorEstudiante(estudiantes);
}

function peorEstudiante(estudiante) {

            var Menor = $.parseJSON(localStorage.getItem(localStorage.key(0))).nota;
            
            for (var i = 0; i <localStorage.length; i++) {

            	var clave = localStorage.key(i);
    			var estudiante = $.parseJSON(localStorage.getItem(clave));

                  if (estudiante.nota < Menor){


                  	Menor = estudiante.nota; 
                    pos = estudiante.nombre+"<br>";
                }
                
            }
            clave = localStorage.key(pos);
			estudiante = $.parseJSON(localStorage.getItem(clave))
            
            document.getElementById("peorNotaModal").innerHTML = "<h4>" + pos + "</h4><h4>"+ Menor+ "</h4>";
        }

function mostrarPeorNota() {
    peorEstudiante(estudiantes);
}


$(document).ready(function() {

	$("#Registrar").click(function(){
		var codigoE = $("#CodEstudiantes").val();
	 	var nombreE = $("#NombreEstudiante").val();
	 	var notaE = $("#NotaEstudiante").val();

	 	var estudiante = {
	 		codigo:codigoE,
	 		nombre:nombreE,
	 		nota:Number(notaE)
	 	};
		//Alamcena en el LS el JSON capturado
	 	localStorage.setItem(codigoE,JSON.stringify(estudiante));

	 	

	});

	
	listarEstudiantes();


});


