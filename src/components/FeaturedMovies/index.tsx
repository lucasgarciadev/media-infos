import { useState } from 'react';

import * as C from './styled';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const FeaturedMovies = () => {

    const [items, setItems] = useState([]);

    return(
        <C.CarouselWrapper>
            <div className='carousel-controls' >
                <button>
                    <FaChevronLeft/>
                </button>
                <button>
                    <FaChevronRight/>
                </button>
            </div>

            <C.CarouselItems 
             
            >

            </C.CarouselItems>

        </C.CarouselWrapper>
    );
}

export default FeaturedMovies;