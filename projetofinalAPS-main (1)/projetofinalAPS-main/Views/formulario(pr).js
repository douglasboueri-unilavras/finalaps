$(document).ready(function(){
    listarcategoria();
    listarproduto();
    excluir();
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




function listarproduto(){
    $.get('https://localhost:5001/Produto/Listar')
        .done(function(resposta) { 
            $('#tbody2 tr').remove();
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                
                $('#tbody2').append($('<tr></tr>').attr('id', dados.id));
                
                $('#' + dados.id).append($('<td></td>').html(dados.id));
                $('#' + dados.id).append($('<td></td>').html(dados.nome));
                $('#' + dados.id).append($('<td></td>').html(dados.preço));
                

                $('#' + dados.id).append($('<td></td>').html('<button type=\"button\" onclick=\"visualizar('+ dados.id +')\">Visualizar</button> <button type=\"button\" onclick=\"editar('+ dados.id +')\">Editar</button> <button type=\"button\" onclick=\"excluir('+ dados.id +')\">Excluir</button>'));

            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}

function excluir(id) {
    $.ajax({
        type: 'DELETE',
        url: 'https://localhost:5001/Produto/Excluir',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(id),
        success: function(resposta) { 
            listarproduto();
            alert(resposta);
        },
        error: function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        }
    });
}


        



//validação do formulario!
function disparo(){
   
    let erro = false;

    let validado = validar (dados.nome, 'nome');
    if(!validado){

        erro = true;
    }


    validado = validar(dados.preço, 'preço');
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
