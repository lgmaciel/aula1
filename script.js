document.title = "Novo título";

magenta = 0

function mudaCorDoTexto() {
    magenta = magenta + 32
    
    document.body.style.color = `rgb(255,${magenta},255)`;

}

function zeraMagenta() {
    magenta = 0
}

botao = document.querySelector("button")

botao.addEventListener("click", zeraMagenta)

window.setInterval(mudaCorDoTexto, 100)