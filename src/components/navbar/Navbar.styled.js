import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color:#575965;
    padding: 1rem;
    color: #F8F8F6;

    h1{
        margin-bottom: 1rem;
    }

    ul{
        list-style: none;
    }

    li{
        margin-bottom: 1rem;
        font-size:medium;
    }

    .navbar__link{
        color: white;
        text-decoration: none;
    }

    @media screen and (min-width: 768px){
        nav{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        h1{
            margin: 0;
        }
        ul{
            display: flex;
            flex-direction: row;
        }
        li{
            margin: 0 1rem;
        }
    }
`;

export default StyledNavbar;