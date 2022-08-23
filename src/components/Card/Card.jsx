import React, {useState} from "react";

import Toggler from "../Toggler/Toggler";
import CardStatus from "../CardStatus/CardStatus";
import AddCardBtn from "../AddCardBtn/AddCardBtn";

import {
    CardContainer,
    CardImageWrapper,
    CardImage,
    CardBody,
    CardContent,
    CardName,
    CardPoints,
    Wrapper
} from "./Card.style";

const Card = ({imageUrl, title, points, status, pageName}) => {
    const [selected, setSelected] = useState(false);

    const toggle = () => setSelected(!selected);

    return (
        <CardContainer>
            <CardImageWrapper>
                <CardImage src={imageUrl} />
            </CardImageWrapper>
            <CardBody>
                <CardContent>
                    <CardName>
                        {title}
                    </CardName>
                    <CardPoints>
                        {points} баллов
                    </CardPoints>
                </CardContent>
                {
                    pageName === 'awards' &&
                    <Wrapper onClick={toggle}>
                        <Toggler selected={selected} />
                    </Wrapper>
                    ||
                    pageName === '/' &&
                    <Wrapper onClick={toggle}>
                        <Toggler selected={selected} />
                    </Wrapper>
                    ||
                    /* change to proper page name*/
                    pageName === '/prevday' &&
                    <CardStatus status={status} />
                    ||
                    pageName === 'planning' &&
                    <Wrapper>
                        <AddCardBtn />
                    </Wrapper>
                }
            </CardBody>
        </CardContainer>
    );
}

export default Card;