import styled from "styled-components";

export const Loader = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 5px solid #FFBC33;
    border-right: 5px solid transparent;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`