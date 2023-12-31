import { connectAPI } from "./connect-api.js";
import createCard from "./show-videos.js";

async function searchVideo(event) {
    event.preventDefault();
    const dataSearch = document.querySelector('[data-search]').value;
    const search = await connectAPI.searchVideo(dataSearch);
    const list = document.querySelector('[data-list]');

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        createCard(element.titulo, element.descricao, element.url, element.imagem)
    ));

    if (search.length == 0) {
        list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    }
}

const btnSearch = document.querySelector('[data-btn-search]');
btnSearch.addEventListener('click', event => searchVideo(event))