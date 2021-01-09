let clicado=0;
function pesquisar(){
    
    var url = "http://www.omdbapi.com/";
    var titulo = document.getElementById("pesquisa").value;
    var chave = "49f3de13";
    var requisito = url+"?t="+titulo+"&apikey="+chave;
    var classe = ["title","genre","director","language"]
    var i = 0;
    var title = document.getElementById(classe[i]).innerHTML="";
    document.getElementById("year").innerHTML="";
    let capa = document.getElementById("capa");
        function ver_capa(data){
        if(data!="N/A"){
    $("#capa").attr('src',data);}else{
        capa.src = '/images/no_poster.png';
    }
}
            $.ajax({
            url : requisito,
            type : "get",
            datatype : "json",
                success : function(data){            
            $("#title").append(data.Title);    
            $("#year").append(data.Year);
            ver_capa(data.Poster);
            alertaretorno(data.Response);
            },
                error : function(erro){
                    alert(erro);
                }
            
       });
       function alertaretorno(data){
           
           if (data=="False"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'O filme não foi encontrado, tente novamente!',})
           }else{
               if(clicado!=1){
               let aparece_ficha = document.getElementById("ficha");
               aparece_ficha.style.animation = "";
               setTimeout(() => aparece_ficha.style.animation = "aparecer_ficha 3s ease 1s forwards",2);
               let pesq = document.getElementById("sec_principal");
               pesq.style.animation = "";
               setTimeout(() => pesq.style.animation = "deslizar_cima forwards 3s", 2);
               }
           }
        clicado=1}}
       
    
       
    
