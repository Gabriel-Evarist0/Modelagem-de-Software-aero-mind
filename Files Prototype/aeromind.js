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
    alert("Isso é um prototipo, funções ainda n implementadas");
}
function userDetails(user){
    location.assign("/Files Prototype/UserDetails.html");
    sessionStorage.setItem("userName", user);
}

//FUNÇÃO DE DEBUG
function MyDebbuger(){
    var user1 = sessionStorage.getItem('userName');
    var input = document.getElementById("userName1");
    input.value = user1;
    console.log(user1)
}