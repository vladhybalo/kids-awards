import styled from "styled-components";

import { CHECKED_TOGGLER, UNCHECKED_TOGGLER } from "../../assets/themes/colors";

export const Status = styled.div`
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${props => props.status? CHECKED_TOGGLER : UNCHECKED_TOGGLER};
`;

export const StatusIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;