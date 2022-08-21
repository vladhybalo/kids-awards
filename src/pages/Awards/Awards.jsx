import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGiftsData, patchSelectedGifts } from "../../ducks/gifts";

import AwardsTitle from "../../components/AwardsTitle/AwardsTitle";
import BaseModal from "../../components/BaseModal/BaseModal";
import AwardsCustomModal from "../../components/AwardsCustomModal/AwardsCustomModal";

import withLoader from "../../hocs/withLoader/withLoader";

import {
    AwardsContainer,
    AwardsCardsContainer,
    ImproviseCard,
    Checkbox,
    SubmitButton
} from "./Awards.style";

const Awards = () => {
    const dispatch = useDispatch();
    let userAccess = useSelector(state => state.userInfo.token);
    const gifts = useSelector(state => state.gifts.gifts);

    if (!userAccess) {
        userAccess = localStorage.getItem('token');
    }

    const [giftsList, setGiftsList] = useState([]);
    const [giftsToBuyList, setGiftsToBuyList] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);

    const addToBuyList = (id) => {
        if (giftsToBuyList.includes(id)) {
            let filteredArr = giftsToBuyList.filter(item => item !== id);
            setGiftsToBuyList(filteredArr);
        } else {
            setGiftsToBuyList(oldArr => [...oldArr, id]);
        }
    }

    const submitSelectedGifts = () => {
        setModalVisibility(true);
        dispatch(patchSelectedGifts(userAccess, giftsToBuyList));
    }

    useEffect(() => {
        dispatch(getGiftsData(userAccess));
    }, []);

    useEffect(() => {
        if (gifts) {
            setGiftsList(gifts);
        }
    }, [gifts]);

    return (
        <AwardsContainer>
            <AwardsTitle />
            <AwardsCardsContainer>
                {
                    giftsList.map(award =>
                        {
                            return (
                                <ImproviseCard key={award.id} onClick={() => addToBuyList(award.id)}>
                                    <Checkbox>
                                        {award.title}
                                    </Checkbox>
                                </ImproviseCard>
                        )}
                    )
                }
            </AwardsCardsContainer>
            <SubmitButton onClick={submitSelectedGifts}>
                Submit
            </SubmitButton>
            <BaseModal setModalVisibility={setModalVisibility} modalVisibility={modalVisibility}>
                <AwardsCustomModal gifts={gifts} giftsToBuyList={giftsToBuyList}>
                </AwardsCustomModal>
            </BaseModal>
        </AwardsContainer>
    )
}

export default withLoader(Awards);