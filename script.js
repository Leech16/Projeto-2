const formula = document.getElementById("formulario")
const tabela = document.querySelector("tbody")
let contatos = "";
formula.addEventListener("submit",function(e){
    e.preventDefault();
    addContato();
    NovoContato();
})

function addContato (){
    const Nome = document.getElementById("NomeContato");
    const NumeroContato = document.getElementById("NumeroContato");

    let contato = "<tr>";
    contato += `<td> ${Nome.value} </td>`;
    contato += `<td> ${NumeroContato.value} </td>`;
    contato += "</tr>";
    contatos += contato;
    Nome.value = "";
    NumeroContato.value = "";
}
function NovoContato(){
    tabela.innerHTML = contatos;
}
