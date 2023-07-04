function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    const img = document.querySelector("#profile img")
  
    if (html.classList.contains("light")) {
      // c/light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar-light.jpeg")
    } else {
      // s/light mode, manter a imagem cinza
      img.setAttribute("src", "./assets/avatar.jpeg")
    }
  }