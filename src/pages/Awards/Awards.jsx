import React from "react";

import Spinner from "../../components/Spinner/Spinner";
import withLoader from "../../hocs/withLoader/withLoader";

import CardsList from "../../components/CardsList/CardsList";

import { CardStatuses } from "../../config/enums";

const Awards = () => {
    const awards = [
        {
          "title": "Сладости",
          "price": 40,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(8).png",
          "isSelected": false,
          "id": 1
        },
        {
          "title": "Поход в кино",
          "price": 90,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(9).png",
          "isSelected": false,
          "id": 2
        },
        {
          "title": "Подарок",
          "price": 100,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(10).png",
          "isSelected": false,
          "id": 3
        },
        {
          "title": "Вечер пиццы",
          "price": 90,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(11).png",
          "isSelected": false,
          "id": 4
        },
        {
          "title": "Вечеринка с друзьями",
          "price": 120,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(12).png",
          "isSelected": false,
          "id": 5
        },
        {
          "title": "Поход в макдональдс",
          "price": 80,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(13).png",
          "isSelected": false,
          "id": 6
        },
        {
          "title": "Желание",
          "price": 200,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(14).png",
          "isSelected": false,
          "id": 7
        },
        {
          "title": "Поход на каток",
          "price": 100,
          "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(15).png",
          "isSelected": false,
          "id": 8
        }
    ];

    return <CardsList cardsList={awards} status={CardStatuses.Toggle} />
}

export default withLoader(Awards);