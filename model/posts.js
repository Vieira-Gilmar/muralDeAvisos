module.exports = {
    // Esses dados serão gerados automaticamente na pasta PUBLIC, subtpasta scripts, arquivo script.
    posts: [
        {   id: "123456",
            title: "Viagem dos alunos",
            description: "Novidades chegando!"
        }
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description});
    },

    deletePost(id){
        this.posts = this.posts.filter(post => post.id !== id);
    }

}

// função para gerar ID
function generateID(){
    return Math.random().toString(36).slice(2,9);
}