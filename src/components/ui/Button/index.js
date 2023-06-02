import styled, { css } from "styled-components";

// membuat object warna

// Buat Commponent button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border : none ;
    border-radius: 10px;
    color: #fff;
    background-color: black;
    cursor: pointer;

    // akses props variant cara 1
    /* background-color: ${function(props){
        if (props.variant === "primary"){
        return "black";
        }else if(props.variant === "secondary"){
        return "blue";
        }else{
        return "yellow";
        }
    }}; */

    //akses props variant cara 2 dengan ternary operator
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary};

    //akses props full
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}
    // akses props size
    size: ${({sizes, theme}) => theme.size[sizes] || theme.size.md}; 


`;


export default Button;

     