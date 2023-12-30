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
    const response = await request.json();
    return response;
}

export const connectAPI = {
    listVideos,
    createVideo
}
