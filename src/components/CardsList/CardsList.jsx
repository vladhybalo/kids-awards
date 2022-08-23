import React from "react";

import Card from "../Card/Card";

import { CardsContainer } from "./CardsList.style";

const CardsList = ({cardsList, pageName}) => {
    return <CardsContainer>
        {
            cardsList.map(item => {
                return <Card
                    imageUrl={item.imageUrl}
                    title={item.title}
                    points={item.price}
                    pageName={pageName}
                />
            })
        }
    </CardsContainer>
}

export default CardsList;