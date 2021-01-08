function pesquisar(){
    var url = "http://www.omdbapi.com/";
    var titulo = document.getElementById("pesquisa").value;
    var chave = "49f3de13";
    var requisito = url+"?t="+titulo+"&apikey="+chave;
    var classe = ["title","genre","director","language"]
    var i = 0;
    var title = document.getElementById(classe[i]).innerHTML="";
    document.getElementById("year").innerHTML="";
    
  

            $.ajax({
           url : requisito,
            type : "get",
            datatype : "json",
            success : function(data){
                console.log(data);
            $("#title").append(data.Title);    
            $("#year").append(data.Year);
            $("#capa").attr('src',data.Poster);
                   
            },
                error : function(erro){
                    console.log(erro);
                }
            
       })
       
    };
