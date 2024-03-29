import styled from "styled-components";

const StyledHero = styled.div`
    padding: 1rem;
    background-color: #C3C4C8;
    font-family:Verdana, Geneva, Tahoma, sans-serif;

    .hero__title {
    color :blue;
    margin-bottom: 1rem;
    }

    .hero__genre {
        color :blue;
        margin-bottom: 1rem;
    }

    .hero__description {
        color: #575965;
        margin-bottom: 1rem;
    }

    .hero__butto {
        padding : 0.8rem 1.5rem;
        border-radius: 12px; 
        border: none;
        background-color:black;
        color: white;
        margin-bottom: 1rem;
        align-items: center;
    }

    .hero__image {
        max-width: 100%;
        border-radius: 20px;
    }

    /* tampilan laptop */
    @media(min-width: 922px) {
            text-align: left;
            max-width: 1200px;
            margin: 0 auto;

        .hero {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .hero__left {
            flex-basis: 40%;
        }
        .hero__right {
            flex-basis: 60%;
        }
    }
    `;
export default StyledHero;