import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGiftsData, patchSelectedGifts } from "../../ducks/gifts";

import { CardBtnTypes } from "../../config/enums";

import AwardsTitle from "../../components/AwardsTitle/AwardsTitle";
import BaseModal from "../../components/BaseModal/BaseModal";
import AwardsCustomModal from "../../components/AwardsCustomModal/AwardsCustomModal";
import TasksList from "../../components/TasksList/TasksList";

import withLoader from "../../hocs/withLoader/withLoader";

import {
    AwardsContainer,
    AwardsCardsContainer,
    SubmitButton
} from "./Awards.style";

const Awards = () => {
    const dispatch = useDispatch();
    const userAuthorized = useSelector(state => state.userInfo.token);
    const gifts = useSelector(state => state.awards.gifts);

    const [giftsToBuyList, setGiftsToBuyList] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);

    const modifyBuyList = (id) => {
        if (giftsToBuyList.includes(id)) {
            const filteredArr = giftsToBuyList.filter(item => item !== id);
            setGiftsToBuyList(filteredArr);
        } else {
            setGiftsToBuyList(oldArr => [...oldArr, id]);
        }
    }

    const submitSelectedGifts = () => {
        setModalVisibility(true);
        dispatch(patchSelectedGifts(userAuthorized, giftsToBuyList));
    }

    useEffect(() => {
        dispatch(getGiftsData(userAuthorized));
    }, []);

    return (
        <AwardsContainer>
            <AwardsTitle />
            <AwardsCardsContainer>
                {
                    gifts && <TasksList TasksList={gifts} status={CardBtnTypes.TOGGLE} modifyBuyList={modifyBuyList} />
                }
            </AwardsCardsContainer>
            <SubmitButton onClick={submitSelectedGifts}>
                Submit
            </SubmitButton>
            { modalVisibility &&
                <BaseModal setModalVisibility={setModalVisibility}>
                    <AwardsCustomModal gifts={gifts} giftsToBuyList={giftsToBuyList} />
                </BaseModal>
            }
        </AwardsContainer>
    )
}

export default withLoader(Awards);