import { connectAPI } from "./connect-api.js";

const list = document.querySelector('[data-list');

export default function createCard(title, description, url, image) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${image}">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    return video;
}

async function listVideos() {
    try {
        const listApi = await connectAPI.listVideos();
        listApi.forEach(element => list.appendChild(
            createCard(element.titulo, element.descricao, element.url, element.imagem)
        ));
    } catch (error) {
        list.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista</h2>`;
    }
}

listVideos();
