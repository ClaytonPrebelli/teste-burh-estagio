let clicado=0;
let capa_nao = 'images/no_poster.png'
let i=0;
let clica_capa=0
function pesquisar(){
    
    var url = "http://www.omdbapi.com/";
    var titulo = document.getElementById("pesquisa").value;
    var chave = "49f3de13";
    var requisito = url+"?s="+titulo+"&apikey="+chave;

    let capa = document.getElementById("capa");     
    
            $.ajax({
            url : requisito,
            type : "get",
            datatype : "json",
            
                success : function(data){                 
                let vamla = data.Search; 
                
                alertaretorno(data.Response);
                vamla.forEach(function (){                                                  
                    document.getElementById("fichas").innerHTML += `<div id="ficha${i}" class="ficha"><div id="titulo${i}" class="titulo"><p class="label">Título: ${vamla[i].Title}</p><p class="label">Ano: ${vamla[i].Year}</p></div><div id="poster${i}" class="poster"><a id="link_capa${i}" name="${i}" onclick="ficha_completa(${i})"><img src="${ver_capa(vamla,i)}" alt="Poser do Filme Selecionado" id="capa${i}" class="clicavel"></a></div></div>`;
                  i++;
                });
                /* adicionar as capas*/
                function ver_capa(){                    
                if(vamla[i].Poster == "N/A"){                    
                    return capa_nao }else{
                     return vamla[i].Poster
            }}
            
            
            
                        },
                error : function(error){
                    alert(error);
                }
                
       });  }
       
    function alertaretorno(data){
           
           if (data=="False"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'O filme não foi encontrado, tente novamente!',})
           }else{
               if(clicado!=1){
               let aparece_ficha = document.getElementById("fichas");
               aparece_ficha.style.animation = "";
               setTimeout(() => aparece_ficha.style.animation = "aparecer_ficha 1s ease 1s forwards",2);
               let pesq = document.getElementById("sec_principal");
               pesq.style.animation = "";
               setTimeout(() => pesq.style.animation = "deslizar_cima forwards 1s", 2);
               }else{
                   i=0;
                   document.getElementById("fichas").innerHTML = ""; 
               }
           }
        clicado=1}
       