import React from "react";
import PropTypes from 'prop-types';

import Card from "../Card/Card";

import { CardsContainer } from "./CardsList.style";

const CardsList = ({cardsList, status}) => {
    return <CardsContainer>
        {
            cardsList.map(item => {
                return <Card
                    key={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    points={item.price || item.reward}
                    status={status}
                />
            })
        }
    </CardsContainer>
}

Card.CardsList = {
    cardsList: PropTypes.array.isRequired,
    status: PropTypes.oneOf(['toggle', 'chooseDayBtn', 'taskStatus']).isRequired
}

export default CardsList;