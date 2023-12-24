function imprimirGIF() {
    var urlGIF = 'src/imgs/gif-dev-mads.gif'; 

    var imgElement = document.createElement('img');
    imgElement.src = urlGIF;
    imgElement.classList.add('gif-element'); 

    var gifContainer = document.getElementById('gifContainer');
    gifContainer.appendChild(imgElement);

    var botaoImprimirGIF = document.querySelector('button');
    botaoImprimirGIF.style.display = 'none';
}
