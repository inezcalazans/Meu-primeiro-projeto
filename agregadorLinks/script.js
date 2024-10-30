function toggleMode() {
    const html = document.documentElement;
    const button = document.querySelector("#switch button");
    
    html.classList.toggle("light");
    
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        button.style.left = '32px'; // Muda a posição para a direita
        img.setAttribute("src", "./images/img4.jpg");
    } else {
        button.style.left = '0'; // Retorna à posição inicial
        img.setAttribute("src", "./images/img5.jpg");
    }
}



