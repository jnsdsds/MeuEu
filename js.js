function btnon() {
    const html = document.getElementById('html')
    html.classList.toggle('light');
    if (html.classList.contains("light")) {
        var scr = document.querySelector("#foto");
        scr.setAttribute('src', './assets/avatar-light.png');

    } else {
        const scr = document.querySelector("#foto");
        scr.setAttribute('src', './assets/avatar.png');
        return console.log("Nao contem a classe")
    }
}

function itens() {
    let botao = document.getElementById("mostraritens")
    botao.classList.toggle('btn-hide');


}

