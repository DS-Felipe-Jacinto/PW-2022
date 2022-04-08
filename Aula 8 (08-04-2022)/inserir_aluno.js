  //Selecionar botão
    var btn = document.querySelector("#btn_inserir");
   
  function inserirAluno(event){
  //Criar td(s)
  event.preventDefault();
  var td_nome = document.createElement("td");
  var td_nota1 = document.createElement("td");
  var td_nota2 = document.createElement("td");
  var td_nota3 = document.createElement("td");
  var td_media = document.createElement("td");

  //Busca as informações que estão no Forms
  var form_nome = document.querySelector(".nome");
  var form_nota1 = document.querySelector(".nota1");
  var form_nota2 = document.querySelector(".nota2");
  var form_nota3 = document.querySelector(".nota3");
  
  //Preencher tds
  td_nome.textContent = form_nome.value;
  td_nota1.textContent = form_nota1.value;
  td_nota2.textContent = form_nota2.value;
  td_nota3.textContent = form_nota3.value;

  //Colocar tds dentro da tr
  var novaTr = document.createElement("tr");
  novaTr.appendChild(td_nome);
  novaTr.appendChild(td_nota1);
  novaTr.appendChild(td_nota2);
  novaTr.appendChild(td_nota3);
  novaTr.appendChild(td_media);

  /* Modificando o conteúdo das tds
  td_nome.textContent = form_nome;
  td_nota1.textContent = form_nota1;
  td_nota2.textContent = form_nota2;
  td_nota3.textContent = form_nota3; */

  //Inserir "tr" na tabela
  var corpoTabela = document.querySelector(".tbl");
  corpoTabela.appendChild(novaTr);
  
  calcularMedia();
}//Fechar função

btn.addEventListener("click",inserirAluno);
  /* var table = document.querySelector("table");
  //Inserindo linha na tabela
  table.appendChild(tr_linha); */