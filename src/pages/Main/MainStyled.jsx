import styled from "styled-components";

import { MAIN_PAGE_BACKGROUND_GENERAL, MAIN_PAGE_BACKGROUND_MOBILE } from "../../assets/themes/colors";

export const MainWrapper = styled.div`
    display: flex;
    font-family: 'Montserrat-300';
    background-color: ${MAIN_PAGE_BACKGROUND_GENERAL};

    @media (max-width: 768px){
        flex-direction: column;
        height: ${props => props.isContentPresent ? `fit-content` : `100vh`};  
    }

    @media (max-width: 400px){
        background-color: ${MAIN_PAGE_BACKGROUND_MOBILE};
    }
`