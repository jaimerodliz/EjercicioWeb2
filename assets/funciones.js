$( document ).ready(function() {

    //validar datos
    function validaciones(){
        var val=1;
        if($("#inp_num1").val().trim()=="" || $.isNumeric($('#inp_num1').val())==false){
            val=0;
        }else if($("#inp_num2").val().trim()=="" || $.isNumeric($('#inp_num2').val())==false){
            val=0;
        }

        return val; 
    }

    //calcular numeros divisibles
    $("#btn_calcular").on("click",function(){
        if(validaciones()){
            var mensaje='';
            var num1=parseFloat($("#inp_num1").val().trim());
            var num2=parseFloat($("#inp_num2").val().trim());
            //calculos
            var residuo=num1 % num2;
            var resultado = num1 / num2;
            //verificar si es divisible
            if(residuo == 0){
                mensaje="El número "+ num1 +" es divisible entre el número "+num2;
            }else{
                mensaje="El número "+ num1 +" no es divisible entre el número "+num2;
            }

            tabla_resultado(resultado,residuo,mensaje);
        }else{
            alertify.error("Capture correctamente los datos");
        }
    });

    //mostrar en pantalla el resultado
    function tabla_resultado(resultado,residuo,mensaje){
        var html="";
        html+="<tr>";
            html+="<td>"+resultado+"</td>";
            html+="<td>"+residuo+"</td>";
        html+="</tr>";
        html+="<tr>";
            html+="<td colspan='2'><b>"+mensaje+"</b></td>";
        html+="</tr>";

        $("#tbody_resultado").html(html);
        $("#tabla_resuldado").removeClass('hide');
    }

    //limpiar formulario
    $("#btn_limpiar").on("click",function(){
        $("#inp_num1").val('');
        $("#inp_num2").val('');
        $("#tbody_resultado").html("");
        $("#tabla_resuldado").addClass('hide');
    });
});