import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
        // Faz a requisição para buscar o post específico
        const { data } = await api.get(`/posts?id=eq.${id}`);
        
        // Retorna o post se os dados existirem
        if (data && data.length > 0) {
            return data[0];
        }
        
        // Retorna um objeto vazio se nenhum post for encontrado
        return {};
    } catch (error) {
        console.error('Erro ao buscar o post:', error);
        return {};
    }
};

