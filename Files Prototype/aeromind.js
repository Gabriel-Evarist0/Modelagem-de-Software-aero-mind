//Abre navbar
function openNav(){
    document.getElementById("menu").style.width = "250px"
}
//Fecha navbar
function closeNav(){
    document.getElementById("menu").style.width = "0px"
}
//Sistema de Cadastro
function cadastro(){
    //alert("Isso é um prototipo, funções ainda n implementadas");
    var nome = document.getElementById("nomeCadastro");
    var cpf = document.getElementById("cpfCadastro");
    var email = document.getElementById("emailCadastro");
    var breve = document.getElementById("breveCadastro");
    var tipoDeVoo = document.getElementById("tipoDeVoo");
    var senhaUser = document.getElementById("password");

    if (nome.value == null || cpf.value == null || email.value == null || breve.value == null || tipoDeVoo.value == "NULL"){
        alert("Erro, valor dos dados invalido");
    }
    else{
        var nomeUserFodase = nome.value + "Piloto";
        sessionStorage.setItem(nomeUserFodase, nome.value);
        sessionStorage.setItem("cpfPiloto", cpf.value);
        sessionStorage.setItem("emailPiloto", email.value);
        sessionStorage.setItem("brevePiloto", breve.value);
        sessionStorage.setItem("vooPiloto", tipoDeVoo.value);
    }
    location.assign("/Files Prototype/Usuarios.html")
}
function userDetails(user){
    location.assign("/Files Prototype/UserDetails.html");
    sessionStorage.setItem("userName", user);
}

//Sistema de Login
function login(){
    var admLogin = "adm"
    var admSenha = "senha";

    var inputLogin = document.getElementById("login")
    var inputSenha = document.getElementById("senha")

    console.log(sessionStorage.getItem("JoséPiloto"))
    console.log(inputLogin.value)
    console.log(inputSenha.value)
    
  if (inputLogin.value == admLogin && inputSenha.value  == admSenha){
        alert("Login realizado. Bem vindo administrador!!");
    }
    else{
        console.log("Deu n")
    }

}

//FUNÇÃO DE DEBUG   (TENTANDO FAZER ARMAZENAR VARIOS LOGINS EM DIFERENTES SESSIONSTORAGE)
function MyDebbuger(){
   /* var user1 = sessionStorage.getItem('userName');
    var input = document.getElementById("userName1");
    input.value = user1;
    console.log(user1)*/
    sessionStorage.setItem("numUser", 0)
    console.log(sessionStorage.getItem("numUser"))

}
function MyDebbuger2(){
    var numUser = sessionStorage.getItem("numUser");
    numUser++
    sessionStorage.setItem("numUser", numUser)
    console.log(sessionStorage.getItem("numUser"))
}
