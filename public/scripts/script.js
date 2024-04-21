// Garantir que todo o conteúdo está carregado e atualizar posts.
document.addEventListener("DOMContentLoaded", ()=>{
    updatePosts();
})

// Função que vai popular os posts.
function updatePosts(){
    // Para permitir política de cors, você precisa colocar aqui no endereço seu IP.
    fetch("http://seuIP:3000/api/all").then(res=>{
        return res.json()
    }).then(json=>{
     
        // Incializa vazio variável onde cada post será concatenado.
        let postElements = "";
        // Transformar os posts em objeto para que sejam iterados depois.
        let posts = JSON.parse(json);
        // Iterar posts para, depois, criar cada post individualmente e inderi-lo em postElement.
        posts.forEach(post=>{
            let postElement = `<div id="${post.id}" class="card mb-4">
                                    <div class="card-header">
                                        <h3 class="card-title">${post.title}</h3>                
                                    </div>
            
                                    <div class="card-body">
                                        <h4 class="card-text">${post.description}</h4>
                                    </div>
                                </div>`
            postElements += postElement;
        })
        // Acessar o elemento HTML para inserir via innerHTML os postElements.
        document.getElementById("posts").innerHTML = postElements;
    })
}

// Criando função para inserir novo post e atualizar.
function newPost(){
    // Pega as informações do html para o inserir no post.
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    // Ao criar novo post preciso informar o método, tipo de aplciação e o body.
    // O body será o próprio post transformado em String.
    let post = {title, description};
    const options = {
                        method: "POST",
                        headers: new Headers({"content-type":"application/json"}),
                        body: JSON.stringify(post)

                    }
    // Feche que faz a requisição para inserir o novo post e atualizar a tela automaticamente.
    fetch("http://seuIP:3000/api/new", options)
        .then(res=>{
            console.log(res);
            updatePosts();
    })

}