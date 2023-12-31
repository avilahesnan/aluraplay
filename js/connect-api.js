async function listVideos() {
    const request = await fetch('http://localhost:3000/videos');
    const response = await request.json();
    return response;
}

async function createVideo(title, description, url, image) {
    const request = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil visualizações`,
            url: url,
            imagem: image
        })
    });
    if (!request.ok) {
        throw new Error('Não foi possível enviar o vídeo')
    }
    const response = await request.json();
    return response;
}

async function searchVideo(term) {
    const request  = await fetch(`http://localhost:3000/videos?q=${term}`);
    const response = request.json();
    return response;
}

export const connectAPI = {
    listVideos,
    createVideo,
    searchVideo
}
