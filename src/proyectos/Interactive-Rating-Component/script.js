const buttonSubmit = document.getElementById('replaceButton')

buttonSubmit.addEventListener('click', function () {
    var buttonContainer = this.parentNode;
    while (buttonsContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }

    var newSection = document.createElement('section');
    var newImg = document.createElement('img');
    newImg.src = 'nueva_imagen.jpg';
    var newSpan = document.createElement('span');
    newSpan.textContent = 'Nuevo Párrafo';
    var newH2 = document.createElement('h2');
    newH2.textContent = 'Nuevo Título';
    var newP = document.createElement('p');
    newP.textContent = 'Nuevo Párrafo';

    // Agregar los nuevos elementos al section
    newSection.appendChild(newImg);
    newSection.appendChild(newSpan);
    newSection.appendChild(newH2);
    newSection.appendChild(newP);

    // Reemplazar el section original con el nuevo
    var originalSection = document.getElementById('originalSection');
    originalSection.parentNode.replaceChild(newSection, originalSection);
})