import * as C from './styled';

import { Link } from 'react-router-dom';

import logo from '../../assets/play.svg';
import home from '../../assets/Icon button.svg';
import movies from '../../assets/Icon button-1.svg';
import tvShows from '../../assets/Icon button-2.svg';
import favorites from '../../assets/Icon button-3.svg';


const Nav = () => {
    return (
        <C.Navigation>
            <button>
                <Link to={'/'} >
                    <img src={logo} alt="Logo" />
                </Link> 
            </button>
            <button>
                <Link to={'/'} >
                    <img src={home} alt="home" className='filter-svg' />
                </Link> 
            </button>
            <button>
                <Link to={'/movies'} >
                    <img src={movies} alt="movies" className='filter-svg' />
                </Link> 
            </button>
            <button>
                <Link to={'/tvshows'} >
                    <img src={tvShows} alt="tv shows" className='filter-svg' />
                </Link> 
            </button>
            <button>
                <Link to={'/favorites'} >
                    <img src={favorites} alt="Logo" className='filter-svg' />
                </Link> 
            </button>
        </C.Navigation>
    );
}

export default Nav