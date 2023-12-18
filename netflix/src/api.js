const API_KEY = "2b651dbb9aca74253ec79182a48d3297";

const categories =[
    {
        name: "trending",
        title:"Em alta",
        path:`/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge:true
    },
    {
        name: "netflixOriginals",
        title:"Originais Netflix",
        path:`/discover/tv?api_key=${API_KEY}&with_networks=123`,
        isLarge:false
    },
    {
        name: "topRated",
        title:"Populares",
        path:`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge:false
    },
    {
        name: "comedy",
        title:"Comédias",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge:false
    },
    {
        name: "animations",
        title:"Animações",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=16`,
        isLarge:false
    },
    {
        name: "documentaries",
        title:"Documantários",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge:false
    },
];

export const getmovies = async (path) => {
    try{
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    }catch (error){
        console.log(`Erro getMovies: ${error}`);
    }
}



export default categories;