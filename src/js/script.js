function imprimirGIF() {
    var urlGIF = 'src/imgs/gif-dev-mads.gif';

    var imgElement = document.createElement('img');
    imgElement.src = urlGIF;
    imgElement.classList.add('gif-element');

    var gifContainer = document.getElementById('gifContainer');
    gifContainer.appendChild(imgElement);

    // Adiciona a classe 'show' ao modal para exibi-lo
    $('#christmasCardModal').modal('show');

    // Esconde o botão após abrir o modal
    var botaoImprimirGIF = document.getElementById('meuBotao');
    botaoImprimirGIF.style.display = 'none';
}
