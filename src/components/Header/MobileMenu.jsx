import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from 'react-router-dom'

import { fetchLogout } from "../../ducks/userInfo"
import LogoHead from "./LogoHead"
import PointsBal from "./PointsBal"
import Navigation from "./Navigation"
import {
    ContainerHeader,
    ExitIconWrapper,
    LeftBlock,
    MenuHeaderBlock,
    MenuInitiaLetterCircle,
    MenuInitiaLetter,
    MenuName,
    MobileHamburgerContainer,
    MobileHamburgerLine,
    MobileHamburgerbackground,
    MobileHamburgerLoginBox
} from "./Header.styled"
import ExitIconMobile from "../../assets/image/Header-exit-icon-mobile.svg"

const MobileMenu = () => {
    let userName = 'email'
    const dispatch = useDispatch()
    const logOut = () => dispatch(fetchLogout(formData))
    const userData = useSelector(state => state.userInfo.userData)
    if (userData) {
        userName = userData.email
    }
    const nameLetter = userName && (userName.charAt(0))
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    const childToggle = () => { setIsOpen(!isOpen) }

    return (
        <>
            <ContainerHeader>
                <LeftBlock>
                    <LogoHead />
                    <PointsBal />
                </LeftBlock>
                <MobileHamburgerContainer onClick={toggle} >
                    <MobileHamburgerLine />
                </MobileHamburgerContainer>
            </ContainerHeader>
            <MobileHamburgerbackground Active={isOpen}>
                <MobileHamburgerLoginBox>
                    <MenuHeaderBlock>
                        <MenuInitiaLetterCircle>
                            <MenuInitiaLetter>{nameLetter}</MenuInitiaLetter>
                        </MenuInitiaLetterCircle>
                        <MenuName>{userName}</MenuName>
                        <NavLink to="auth" onClick={logOut}>
                            <ExitIconWrapper src={ExitIconMobile} alt="ExitIcon" />
                        </NavLink>
                    </MenuHeaderBlock>
                </MobileHamburgerLoginBox>
                <Navigation func={childToggle} />
            </MobileHamburgerbackground>
        </>
    )
}

export default MobileMenu


