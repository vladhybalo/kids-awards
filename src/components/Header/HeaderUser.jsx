import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useLocation } from 'react-router-dom'
import useScreenWidth from "./ListenerWidth"
import { fetchLogout } from "../../ducks/userInfo"
import LogoHead from "./LogoHead"

import {
    ContainerHeader,
    ExitIconWrapper,
    LeftBlock,
    PointsBalance,
    NumberBalance,
    MenuHeaderBlock,
    MenuContact,
    MenuSection,
    MenuInitiaLetterCircle,
    MenuInitiaLetter,
    MenuName,
    MobileHamburgerContainer,
    MobileHamburgerLine,
    MobileHamburgerbackground,
    MobileHamburgerDarkened,
    MobileHamburgerLoginBox,
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCrossHolder,
    MobileHamburgerSectionMenuUp,
    MobileHamburgerSectionMenu
} from "./Header.styled"
import {
    MAIN_DARK,
    MAIN_BACKGROUND,
    AUTH_TEXT_COLOR
} from "../../assets/themes/colors"

import ExitIcon from "../../assets/image/Header-exit-icon.svg"
import ExitIconMobile from "../../assets/image/Header-exit-icon-mobile.svg"

const linkActiveColor = ({ isActive }) => { return { color: isActive ? MAIN_DARK : MAIN_BACKGROUND } }
const linkActiveColorDesktop = ({ isActive }) => { return { color: isActive ? MAIN_DARK : AUTH_TEXT_COLOR } }

const HeaderUser = () => {

    let userName = 'email'
    let userBalance = 0

    const dispatch = useDispatch()
    const logOut = () => dispatch(fetchLogout(formData))

    const userData = useSelector(state => state.userInfo.userData)
    if (userData) {
        userName = userData.email
        userBalance = userData.balance
    }

    const nameLetter = userName && (userName.charAt(0))

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    const width = (useScreenWidth() - 1)
    const location = useLocation()

    return (
        <>
            {width >= 870 &&                     // --------------- Desktop -------------
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        {location.pathname === '/' &&
                            <PointsBalance>
                                Points balance:
                                <NumberBalance>{userBalance}</NumberBalance>
                            </PointsBalance>
                        }
                    </LeftBlock>
                    <MenuHeaderBlock>
                        <NavLink to="/" style={linkActiveColorDesktop} >
                            <MenuSection>Home</MenuSection>
                        </NavLink>
                        <NavLink to="planning" style={linkActiveColorDesktop} >
                            <MenuSection>Planning</MenuSection>
                        </NavLink>
                        <NavLink to="awards" style={linkActiveColorDesktop} >
                            <MenuSection>Awards</MenuSection>
                        </NavLink>
                        <NavLink to="contacts" style={linkActiveColorDesktop} >
                            <MenuContact>Contacts</MenuContact>
                        </NavLink>
                        <MenuInitiaLetterCircle>
                            <MenuInitiaLetter>{nameLetter}</MenuInitiaLetter>
                        </MenuInitiaLetterCircle>
                        <MenuName>{userName}</MenuName>
                        <NavLink to="auth" onClick={logOut}>
                            <ExitIconWrapper src={ExitIcon} alt="ExitIcon" />
                        </NavLink>
                    </MenuHeaderBlock>
                </ContainerHeader>
            }
            {(width >= 530 && width <= 869) &&   // --------------- Tablet -------------
                <>
                    <ContainerHeader>
                        <LeftBlock>
                            <LogoHead />
                            <PointsBalance>
                                Points balance:
                                <NumberBalance>{userBalance}</NumberBalance>
                            </PointsBalance>
                        </LeftBlock>
                        <MenuHeaderBlock>
                            <MobileHamburgerContainer onClick={toggle} >
                                <MobileHamburgerLine />
                            </MobileHamburgerContainer>
                            <MenuInitiaLetterCircle>
                                <MenuInitiaLetter>{nameLetter}</MenuInitiaLetter>
                            </MenuInitiaLetterCircle>
                            <MenuName>{userName}</MenuName>
                            <NavLink to="auth" onClick={logOut}>
                                <ExitIconWrapper src={ExitIcon} alt="ExitIcon" />
                            </NavLink>
                        </MenuHeaderBlock>
                    </ContainerHeader>
                    {isOpen &&
                        <MobileHamburgerDarkened >
                        </MobileHamburgerDarkened>
                    }
                    <MobileHamburgerbackground Active={isOpen}>
                        <MobileHamburgerCrossBox onClick={toggle}>
                            <MobileHamburgerCross>
                                <MobileHamburgerCrossHolder />
                            </MobileHamburgerCross>
                        </MobileHamburgerCrossBox>
                        <NavLink to="/" onClick={toggle} style={linkActiveColor} >
                            <MobileHamburgerSectionMenuUp>Home</MobileHamburgerSectionMenuUp>
                        </NavLink>
                        <NavLink to="planning" onClick={toggle} style={linkActiveColor} >
                            <MobileHamburgerSectionMenu>Planning</MobileHamburgerSectionMenu>
                        </NavLink>
                        <NavLink to="awards" onClick={toggle} style={linkActiveColor} >
                            <MobileHamburgerSectionMenu>Awards</MobileHamburgerSectionMenu>
                        </NavLink>
                        <NavLink to="contacts" onClick={toggle} style={linkActiveColor} >
                            <MobileHamburgerSectionMenu>Contacts</MobileHamburgerSectionMenu>
                        </NavLink>
                    </MobileHamburgerbackground>
                </>
            }
            {width <= 529 && <>                 {/* --------------- Mobile ------------- */}
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        <PointsBalance>
                            Points balance:
                            <NumberBalance>{userBalance}</NumberBalance>
                        </PointsBalance>
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
                    <MobileHamburgerCrossBox onClick={toggle}>
                        <MobileHamburgerCross>
                            <MobileHamburgerCrossHolder />
                        </MobileHamburgerCross>
                    </MobileHamburgerCrossBox>
                    <NavLink to="/" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenuUp>Home</MobileHamburgerSectionMenuUp>
                    </NavLink>
                    <NavLink to="planning" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenu>Planning</MobileHamburgerSectionMenu>
                    </NavLink>
                    <NavLink to="awards" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenu>Awards</MobileHamburgerSectionMenu>
                    </NavLink>
                    <NavLink to="contacts" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenu>Contacts</MobileHamburgerSectionMenu>
                    </NavLink>
                </MobileHamburgerbackground>
            </>
            }
        </>
    )
}
export default HeaderUser


