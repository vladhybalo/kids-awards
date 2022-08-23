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
    const userAccess = useSelector(state => state.userInfo.token);
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
        dispatch(patchSelectedGifts(userAccess, giftsToBuyList));
    }

    useEffect(() => {
        dispatch(getGiftsData(userAccess));
    }, []);

    return (
        <AwardsContainer>
            <AwardsTitle />
            <AwardsCardsContainer>
                {
                    gifts && gifts.map(award =>
                        <ImproviseCard key={award.id} onClick={() => modifyBuyList(award.id)}>
                            <Checkbox>
                                {award.title}
                            </Checkbox>
                        </ImproviseCard>
                    )
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