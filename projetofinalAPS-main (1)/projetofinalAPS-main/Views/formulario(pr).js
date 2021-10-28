$(document).ready(function(){
    listarcategoria();
    tbody2();
});


function listarcategoria(){
    $.get('https://localhost:5001/Categoria/Listar')
    .done(function(resposta){
        for(i = 0; i < resposta.length; i++){
            let option = $('<option></option>').val(resposta[i].id).html(resposta[i].nome);
            $('#id_categoria').append(option);
        }
       

    })
    .fail(function(erro ,mensagem, exceçao){
        alert('error404');

    });
}


function tbody2(){
    $.get('https://localhost:5001/Produto/Listar')
    .done(function(resposta){
        for(i = 0; i < resposta.length; i++){
            let linha = $('<tr></tr>');


            let celulaid = $('<td></td>').html(resposta[i].id);
            linha.append(celulaid);


            let celulanome = $('<td></td>').html(resposta[i].nome);
            linha.append(celulanome);


            let celulapreço = $('<td></td>').html(resposta[i].preço);
            linha.append(celulapreço);


            
            


            
            

            
            

            
            


           

            $('#tbody2').append(linha)

            
        }
        
        
        
    })
     
}



        



//validação do formulario!
function disparo(){
   
    let erro = false;

    let validado = validar (dados.nome, 'nome');
    if(!validado){

        erro = true;
    }


    validado = validar(dados.quantidade, 'quantidade');
    if(!validado){
        erro = true ;
    }


    validado = validar(dados.data , 'data');
    if(!validado){
        erro = true ;
    }


    validado = validar(dados.glutem, 'glutem');
    if(!validado){
        erro = true ;
    }

    
if (!erro){
    alert('campos preenchidos! ');
}

    validado = validarCheckbox(dados.embalagem, 'embalagem');
    if (!validado) {
        erro = true;
    }
    
    return erro;
}




function validar(campo , nomeCampo){
    if ( campo .value == null || campo.value == ''  || campo.value == 0){
        campo.className = 'vermelho';
        alert('preencha o campo ' + nomeCampo +'!');
    
        return false;
    }else{

        campo.className = '';
        return true;
    }
}


function validarCheckbox(checkboxes, nomeCampo){
    for (i = 0; i < checkboxes.length; i++ ){
        if (checkboxes[i].checked){
            return true;
        }
    }
    alert('precha o campo ' + nomeCampo + '!');
    return false;


}  

function removerclasse(campo){
    campo.classname = '';
}
