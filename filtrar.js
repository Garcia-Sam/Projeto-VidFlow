const barraDePesquisa = document.querySelector('.pesquisar__input');
barraDePesquisa.addEventListener("input", filtrarPesquisa ());

function filtrarPesquisa() {
    const videos = document.querySelectorAll('.videos__item');
    const valorFiltro = barraDePesquisa.value.toLowerCase();
    
    videos.forEach((video) => {
        const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
    
        video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
    });
}
      
