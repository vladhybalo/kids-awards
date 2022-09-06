import React, { useState } from "react"
import { NavLink, useLocation } from 'react-router-dom'

import { MAIN_DARK, AUTH_TEXT_COLOR } from "../../assets/themes/colors"

import LogoHead from "./LogoHead"
import PointsBal from "./PointsBal"
import MobileMenu from "./MobileMenu"
import NameExiticon from "./NameExiticon"
import Navigation from "./Navigation"
import {
    DesktopWidth,
    TabletWidth,
    MobileWidth,
    ContainerHeader,
    LeftBlock,
    MenuHeaderBlock,
    MenuContact,
    MenuSection,
    MobileHamburgerContainer,
    MobileHamburgerLine,
    MobileHamburgerDarkened,
    MobileHamburgerbackground,
} from "./Header.styled"

const linkActiveColorDesktop = ({ isActive }) => { return { color: isActive ? MAIN_DARK : AUTH_TEXT_COLOR } }

const HeaderUser = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    const location = useLocation()
    const childToggle = () => { setIsOpen(!isOpen) }
    return (
        <>
            {/* ====== 870=< Desktop ====== */}
            <DesktopWidth>
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        {location.pathname === '/' &&
                            <PointsBal />
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
                        <NameExiticon />
                    </MenuHeaderBlock>
                </ContainerHeader>
            </DesktopWidth>
            {/* ==== 531=< Tablet <=869 ==== */}
            <TabletWidth>
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        <PointsBal />
                    </LeftBlock>
                    <MenuHeaderBlock>
                        <MobileHamburgerContainer onClick={toggle} >
                            <MobileHamburgerLine />
                        </MobileHamburgerContainer>
                        <NameExiticon />
                    </MenuHeaderBlock>
                </ContainerHeader>
                {isOpen &&
                    <MobileHamburgerDarkened >
                    </MobileHamburgerDarkened>
                }
                <MobileHamburgerbackground Active={isOpen}>
                    <Navigation func={childToggle} />
                </MobileHamburgerbackground>
            </TabletWidth>
            {/* // ======= Mobile <=530 ====== */}
            <MobileWidth>
                <MobileMenu />
            </MobileWidth>
        </>
    )
}

export default HeaderUser


