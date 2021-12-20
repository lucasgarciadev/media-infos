import styled from "styled-components";

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    background-color: lavender;
    padding: 0 1rem;
    
    .carousel-controls {
        position: sticky;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        
        button {
            color: var(--primary-font);
            font-size: 2rem;
        }
    }
`;
export const CarouselItems = styled.div`
    display: flex;
    overflow-x: hidden;
`;