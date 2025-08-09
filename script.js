function toggleMode(){
    const html = document.documentElement

    // if(html.classList.contains("light")) {
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // }
    // Caso queria simplificar ainda mais (recomendado) podemos fazer da seguinte forma:

    html.classList.toggle('light')
    // Verifica se tem o ligth, se sim, ele tira, se não, ele remove

    // Pegar a tag da imagem no css
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
}