function traerDatos() {
    // console.log('Dentro de la funcion')

    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', 'data.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);

            let datos = JSON.parse(this.responseText)
            // console.log(datos);

            let data = document.querySelector('#data')
            data.innerHTML = ''

            let i = 0

            for (let item of datos) {
                console.log(item.category)
                console.log(item)
                data.innerHTML += `
                <div class="dato${i}">
                    <div class="flex-group">
                        <img src="${item.icon}" width="20" height="20" alt="icono"/>
                        <h5>${item.category}</h5>
                    </div>
                    <p class="summary-score"><span>${item.score}</span> / 100</p>
                </div>
                `
                i++
            }
        }
    }
}

traerDatos()



