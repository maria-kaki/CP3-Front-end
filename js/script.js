
var precoPorGarrafa = parseFloat(document.getElementById("valor").getAttribute("value"));
var inputQuantidade = document.getElementById("quantidade");
var totalElement = document.getElementById("total");

function atualizarTotal() {
  var quantidade = parseInt(inputQuantidade.value);
  var total = quantidade * precoPorGarrafa;
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

if (inputQuantidade) {
    inputQuantidade.addEventListener("change", atualizarTotal);
    atualizarTotal();
}

function comprarproduto(event,vinho){
    var quantidade = document.getElementById("quantidade").value
    alert(`O vinho ${vinho} foi adicionado ${quantidade} vezes ao carinho!`)
}

var usedDiscountCode = false;

function desconto() {
  var descontoCodigo = document.getElementById("desconto").value.toUpperCase();
  if (descontoCodigo === "FIAP2024" && !usedDiscountCode) {
    var descontoValor = precoPorGarrafa * 0.1;
    var novoValor = precoPorGarrafa - descontoValor;
    precoPorGarrafa = novoValor.toFixed(2);
    document.getElementById("valor").textContent = `R$ ${novoValor.toFixed(2)}`;
    totalElement.textContent = `Total: R$ ${(novoValor * inputQuantidade.value).toFixed(2)}`;
    console.log(precoPorGarrafa)
    usedDiscountCode = true;
  } else if (descontoCodigo === "FIAP2024" && usedDiscountCode) {
    alert("Cupom já aplicado.");
  } else {
    alert("Cupom de desconto inválido.");
  }
}

function produtoespecifico(event, vinhoinput) {
    switch (vinhoinput) {
      case "portada":
        window.location.href = "../html/products/pageVinhoPortada.html";
        break;
      case "pronutto":
        window.location.href = "../html/products/pageVinhoPronutto.html";
        break;
      case "sanmartin":
        window.location.href = "../html/products/pageVinhoSanmartin.html";
        break;
      case "sansevero":
        window.location.href = "../html/products/pageVinhoSansevero.html";
        break;
    }
}

function login() {
    var usuario = document.getElementById("usuario").value;
    var usuarioCorreto = "admin";

    var senha = document.getElementById("senha").value;
    var senhaCorreta = "admin";

    if (usuario !== usuarioCorreto || senha !== senhaCorreta) {
        alert("Usuário ou senha incorreto!");
    } else {
        alert(`Olá, ${usuario}! Têm vinhos esperando por você!`);
        window.location.href = "../html/pageInitial.html";
    }
}


// Page Fale Conosco

function btnEnter() {
    alert("Enviado com sucesso! Em breve entraremos em contato.");
    window.location.href = "../html/pageInitial.html";
    
};
function btnSim() {
    window.location.href = "../html/pageLogin.html";
};

function btnNao() {
    window.location.href = "https://www.docemalu.com.br/chocolate-guarda-chuva-tchuca-c-50---ki-kakau/p";
};
