let arrei = []
function calcular(){
    document.getElementById('resultado').innerHTML = "";
    const deslocamento = document.getElementById('a').value;
    const tempo = document.getElementById('b').value;
    let deslocamentoFloat = parseFloat(deslocamento);
    let tempoFloat = parseFloat(tempo);
    var velocidade;

    if (deslocamento && tempo) {
        velocidade = deslocamentoFloat / tempoFloat;
        arrei.push(velocidade);
    }

    for (let i in arrei){
        document.getElementById('resultado').innerHTML += arrei[i] + "<br>"
    }
}

function limpar(){
    arrei = [];
    document.getElementById('resultado').innerText = "";
    document.getElementById('a').value = ""
    document.getElementById('b').value = ""

}

function irparahome() {
    location.href="home.html"
}
function irparasobre(){
    location.href="sobre.html"
}
