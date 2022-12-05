function cliqueMenu() { 
    if (itensMenu.style.display == 'block') {
        itensMenu.style.display = 'none' // id > estilo > display
    } else {
        itensMenu.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itensMenu.style.display = 'block'
    } else {
        itensMenu.style.display = 'none'
    }
}