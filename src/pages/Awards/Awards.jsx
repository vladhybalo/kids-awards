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
    const gifts = useSelector(state => state.awards.gifts);
    const balance = useSelector(state => state.userInfo.userData.balance);

    const [giftsToBuyList, setGiftsToBuyList] = useState([]);
    const [userBalance, setUserBalance] = useState(balance);
    const [modalVisibility, setModalVisibility] = useState(false);

    const modifyBuyList = (id) => {
        let newBalance = null;

        if (gifts[id-1] < userBalance) {
            if (giftsToBuyList.includes(id)) {
                const filteredArr = giftsToBuyList.filter(item => item !== id);
                setGiftsToBuyList(filteredArr);
                newBalance = userBalance + gifts[id-1];
            } else {
                setGiftsToBuyList(oldArr => [...oldArr, id]);
                newBalance = userBalance - gifts[id-1];
            }
            setUserBalance(newBalance);
        }
        else {
            alert('Ooops:( You don`t have enough points to get this award');
        }
    }

    const submitSelectedGifts = () => {
        setModalVisibility(true);
        giftsToBuyList.length !== 0 && dispatch(patchSelectedGifts(giftsToBuyList));
    }

    useEffect(() => {
        dispatch(getGiftsData());
    }, []);

    return (
        <AwardsContainer>
            <AwardsTitle />
            <AwardsCardsContainer>
                {
                    gifts &&
                    <TasksList
                        TasksList={gifts}
                        status={CardBtnTypes.TOGGLE}
                        modifyBuyList={modifyBuyList}
                        userBalance={userBalance}
                    />
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