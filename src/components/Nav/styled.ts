import styled from 'styled-components';

export const Navigation = styled.nav`
    width: 60px;
    height: 100vh;
    padding: 4rem 0;
    position: fixed;
    background: rgba(0, 0, 0, .4);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    button {
        border-radius: 50%;
        padding: .5rem;
    }

    button:hover:nth-child(n+2):nth-child(-n+5) {
        background-color: rgba(255, 255, 255, .2);
    }
`;