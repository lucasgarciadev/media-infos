import axios from 'axios';


// export default {
//     getHomeList: async () => {
//         return [
//             {
//                 slug: 'originals',
//                 title: 'Originais da Netflix',
//                 items: await basicFetch(`/trending/tv/week?with_network=213&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'trending',
//                 title: 'Recomendados para você',
//                 items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'toprated',
//                 title: 'Em Alta',
//                 items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'action',
//                 title: 'Ação',
//                 items:  await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'comedy',
//                 title: 'Comédia',
//                 items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'horror',
//                 title: 'Terror',
//                 items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'romance',
//                 title: 'Romance',
//                 items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'documentary',
//                 title: 'Documentários',
//                 items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
//             },
//         ]
//     },
//     getMovieInfo: async (movieId, type) => {
//         let info = {};
//         if(movieId) {
//             switch(type) {
//                 case 'movie':
//                     info = basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`);
//                 break;
//                 case 'tv':
//                     info = basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`);
//                 break;
//                 default:
//                     info = null;
//                 break;
//             }
//         }
//         return info;
//     }
// }