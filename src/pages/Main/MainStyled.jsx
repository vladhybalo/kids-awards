import styled from "styled-components";

export const ORANGE_COLOR_MAIN = "#FFBC33";
export const GREY_TEXT_COLOR_MAIN = "#A6ABB9";

export const MainWrapper = styled.div`
    display: flex;
    font-family: 'Montserrat-300';
    background-color: #FAFAFA;

    @media (max-width: 768px){
        flex-direction: column;
        height: ${props => props.isContentPresent ? `100vh` : `fit-content`};  
    }

    @media (max-width: 400px){
        background-color: white;
    }
`