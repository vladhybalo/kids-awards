import React, { useState } from "react"
import { NavLink, useLocation } from 'react-router-dom'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import useScreenWidth from "./ListenerWidth"
import {
    ContainerHeder,
    LogoHeader,
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
    MobileHamburgerLoginBox,
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCross1,
    MobileHamburgerSectionMenuUp,
    MobileHamburgerSectionMenu
} from "./Header.styled"

import { ReactComponent as Logo } from "../../assets/image/HeaderKidsLogo.svg"
import { ReactComponent as ExitIcon } from "../../assets/image/HeaderNavExitIcon.svg"
import { ReactComponent as ExitIconMobile } from "../../assets/image/HeaderNavExitIconMobile.svg"

const UserBalance = 123
const UserName = 'UserName'
const logOut = () => localStorage.clear()

const cyrillicToTranslit = new CyrillicToTranslit()
const firstLetter = UserName && (UserName.charAt(0))
const nameLetter = cyrillicToTranslit.transform(firstLetter).toUpperCase()

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const width = (useScreenWidth() - 1)
    const location = useLocation()

    return (
        <>
            {!UserName && // ---------------------------------------------- AUTH ---------------
                <>
                    {width >= 769 &&                    // --------------- Desktop -------------
                        <ContainerHeder>
                            <LogoHead />
                            <MenuHeaderBlock>
                                <MenuAuthDeskTab />
                            </MenuHeaderBlock>
                        </ContainerHeder>
                    }
                    {(width >= 481 && width <= 768) &&   // --------------- Tablet -------------
                        <ContainerHeder>
                            <LeftBlock>
                                <LogoHead />
                                {location.pathname === '/home' &&
                                    <PointsBalance>
                                        Баланс баллов:
                                        <NumberBalance>0</NumberBalance>
                                    </PointsBalance>
                                }
                            </LeftBlock>
                            <MenuHeaderBlock>
                                <MenuAuthDeskTab />
                            </MenuHeaderBlock>
                        </ContainerHeder>
                    }
                    {width <= 480 && <>                 {/* --------------- Mobile ------------- */}
                        <ContainerHeder>
                            <LeftBlock>
                                <LogoHead />
                                {location.pathname === '/home' &&
                                    <PointsBalance>
                                        Баланс баллов:
                                        <NumberBalance>0</NumberBalance>
                                    </PointsBalance>
                                }
                            </LeftBlock>
                            <MobileHamburgerContainer onClick={toggle} >
                                <MobileHamburgerLine />
                            </MobileHamburgerContainer>
                        </ContainerHeder>
                        <MobileHamburgerbackground style={{ transform: isOpen ? "translateX(0%)" : "translateX(120%)", opacity: isOpen ? "1" : "0.3" }}>
                            <MobileHamburgerCrossBox onClick={toggle}>
                                <MobileHamburgerCross>
                                    <MobileHamburgerCross1 />
                                </MobileHamburgerCross>
                            </MobileHamburgerCrossBox>
                            <NavLink to="login" onClick={toggle}
                                style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                <MobileHamburgerSectionMenuUp>Авторизация</MobileHamburgerSectionMenuUp>
                            </NavLink>
                            <NavLink to="contacts" onClick={toggle}
                                style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                <MobileHamburgerSectionMenu>Контакты</MobileHamburgerSectionMenu>
                            </NavLink>
                        </MobileHamburgerbackground>
                    </>
                    }
                </>
            }
            {UserName && // ------------------------------------------------ USER ---------------
                <>
                    {width >= 870 &&                     // --------------- Desktop -------------
                        <ContainerHeder>
                            <LeftBlock>
                                <LogoHead />
                                {location.pathname === '/home' &&
                                    <PointBalUser />
                                }
                            </LeftBlock>
                            <MenuHeaderBlock>
                                <NavLink to="home"
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'rgb(133, 133, 152)' } }}>
                                    <MenuSection>Главная</MenuSection>
                                </NavLink>
                                <NavLink to="planning"
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'rgb(133, 133, 152)' } }}>
                                    <MenuSection>Планирование</MenuSection>
                                </NavLink>
                                <NavLink to="awards"
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'rgb(133, 133, 152)' } }}>
                                    <MenuSection>Награды</MenuSection>
                                </NavLink>
                                <NavLink to="contacts"
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'rgb(133, 133, 152)' } }}>
                                    <MenuContact>Контакты</MenuContact>
                                </NavLink>
                                <MenuInitiaLetterCircle>
                                    <MenuInitiaLetter>{nameLetter}</MenuInitiaLetter>
                                </MenuInitiaLetterCircle>
                                <MenuName>{UserName}</MenuName>
                                <NavLink to="login" onClick={`${toggle}${logOut}`}>
                                    <ExitIcon />
                                </NavLink>
                            </MenuHeaderBlock>
                        </ContainerHeder>
                    }
                    {(width >= 530 && width <= 869) &&   // --------------- Tablet -------------
                        <>
                            <ContainerHeder style={{ padding: '0 32px' }}>
                                <LeftBlock>
                                    <LogoHead />
                                    <PointBalUser />
                                </LeftBlock>
                                <MenuHeaderBlock>
                                    <MobileHamburgerContainer onClick={toggle} >
                                        <MobileHamburgerLine />
                                    </MobileHamburgerContainer>
                                    <MenuInitiaLetterCircle style={{ margin_left: '32px' }}>
                                        <MenuInitiaLetter>{nameLetter}</MenuInitiaLetter>
                                    </MenuInitiaLetterCircle>
                                    <MenuName>{UserName}</MenuName>
                                    <NavLink to="login" onClick={`${toggle}${logOut}`}>
                                        <ExitIcon />
                                    </NavLink>
                                </MenuHeaderBlock>
                            </ContainerHeder>
                            <MobileHamburgerbackground style={{ transform: isOpen ? "translateX(0%)" : "translateX(120%)", opacity: isOpen ? "1" : "0.3" }}>
                                <MobileHamburgerCrossBox onClick={toggle}>
                                    <MobileHamburgerCross>
                                        <MobileHamburgerCross1 />
                                    </MobileHamburgerCross>
                                </MobileHamburgerCrossBox>
                                <NavLink to="home" onClick={toggle}
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                    <MobileHamburgerSectionMenuUp>Главная</MobileHamburgerSectionMenuUp>
                                </NavLink>
                                <NavLink to="planning" onClick={toggle}
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                    <MobileHamburgerSectionMenu>Планирование</MobileHamburgerSectionMenu>
                                </NavLink>
                                <NavLink to="awards" onClick={toggle}
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                    <MobileHamburgerSectionMenu>Награды</MobileHamburgerSectionMenu>
                                </NavLink>
                                <NavLink to="contacts" onClick={toggle}
                                    style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                    <MobileHamburgerSectionMenu>Контакты</MobileHamburgerSectionMenu>
                                </NavLink>
                            </MobileHamburgerbackground>
                        </>
                    }
                    {width <= 529 && <>                 {/* --------------- Mobile ------------- */}
                        <ContainerHeder>
                            <LeftBlock>
                                <LogoHead />
                                <PointBalUser />
                            </LeftBlock>
                            <MobileHamburgerContainer onClick={toggle} >
                                <MobileHamburgerLine />
                            </MobileHamburgerContainer>
                        </ContainerHeder>
                        <MobileHamburgerbackground style={{ transform: isOpen ? "translateX(0%)" : "translateX(120%)", opacity: isOpen ? "1" : "0.3" }}>
                            <MobileHamburgerLoginBox>
                                <MenuHeaderBlock>
                                    <MenuInitiaLetterCircle>
                                        <MenuInitiaLetter>{nameLetter}</MenuInitiaLetter>
                                    </MenuInitiaLetterCircle>
                                    <MenuName>{UserName}</MenuName>
                                    <NavLink to="login" onClick={`${toggle}${logOut}`}>
                                        <ExitIconMobile />
                                    </NavLink>
                                </MenuHeaderBlock>
                            </MobileHamburgerLoginBox>
                            <MobileHamburgerCrossBox onClick={toggle}>
                                <MobileHamburgerCross>
                                    <MobileHamburgerCross1 />
                                </MobileHamburgerCross>
                            </MobileHamburgerCrossBox>

                            <NavLink to="home" onClick={toggle}
                                style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                <MobileHamburgerSectionMenuUp>Главная</MobileHamburgerSectionMenuUp>
                            </NavLink>
                            <NavLink to="planning" onClick={toggle}
                                style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                <MobileHamburgerSectionMenu>Планирование</MobileHamburgerSectionMenu>
                            </NavLink>
                            <NavLink to="awards" onClick={toggle}
                                style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                <MobileHamburgerSectionMenu>Награды</MobileHamburgerSectionMenu>
                            </NavLink>
                            <NavLink to="contacts" onClick={toggle}
                                style={({ isActive }) => { return { color: isActive ? 'black' : 'white' } }}>
                                <MobileHamburgerSectionMenu>Контакты</MobileHamburgerSectionMenu>
                            </NavLink>
                        </MobileHamburgerbackground>
                    </>
                    }
                </>
            }
        </>
    )
}
export default Header

const LogoHead = () => (
    <NavLink to="home">
        <LogoHeader>
            KidsLike
            <Logo />
        </LogoHeader>
    </NavLink>
)
const MenuAuthDeskTab = () => (
    <>
        <NavLink to="login"
            style={({ isActive }) => { return { color: isActive ? 'black' : 'rgb(133, 133, 152)' } }}>
            <MenuSection>Авторизация</MenuSection>
        </NavLink>
        <NavLink to="contacts"
            style={({ isActive }) => { return { color: isActive ? 'black' : 'rgb(133, 133, 152)' } }}>
            <MenuContact style={{ padding: '0px 0px 0px 16px' }} >Контакты</MenuContact>
        </NavLink>
    </>
)
const PointBalUser = () => (
    <PointsBalance>
        Баланс баллов:
        <NumberBalance>{UserBalance}</NumberBalance>
    </PointsBalance>
)