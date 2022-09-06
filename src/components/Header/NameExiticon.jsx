import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from 'react-router-dom'

import { fetchLogout } from "../../ducks/userInfo"
import {
    ExitIconWrapper,
    MenuInitiaLetterCircle,
    MenuInitiaLetter,
    MenuName
} from "./Header.styled"
import ExitIcon from "../../assets/image/Header-exit-icon.svg"

const NameExiticon = () => {
    let userName = 'email'
    const dispatch = useDispatch()
    const logout = () => dispatch(fetchLogout(formData))
    const userData = useSelector(state => state.userInfo.userData)
    if (userData) {
        userName = userData.email
    }
    const nameLetter = userName && (userName.charAt(0))
    return (
        <>
            <MenuInitiaLetterCircle>
                <MenuInitiaLetter>{nameLetter}</MenuInitiaLetter>
            </MenuInitiaLetterCircle>
            <MenuName>{userName}</MenuName>
            <NavLink to="auth" onClick={logout}>
                <ExitIconWrapper src={ExitIcon} alt="ExitIcon" />
            </NavLink>
        </>
    )
}

export default NameExiticon


