function verificaConta(conta){
    if (conta == 'sim'){
        window.location.href = "/Files/login.html";
    }
    else{
        window.location.href = "https://youtube.com";
    }
}
function teste(){
    var login = document.getElementById("input").value;
    var senha = document.getElementById("inputSenha").value;
    if (login == "Roberto" && senha == "123"){
        document.getElementById("teste").innerHTML = "Roberto oi";
    }else{
        document.getElementById("teste").innerHTML = "Não é o Roberto";
    }
}

function openNav(){
    document.getElementById("menu").style.width = "250px"
}
function closeNav(){
    document.getElementById("menu").style.width = "0px"
}