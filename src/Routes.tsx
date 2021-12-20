import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Favorites from './pages/Favorites';

export default () =>  {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/tvshows" element={<TvShows/>} />
            <Route path="/favorites" element={<Favorites/>} />
        </Routes>
    );
}
