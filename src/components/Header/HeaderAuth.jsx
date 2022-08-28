import React, { useState } from "react"
import { NavLink, useLocation } from 'react-router-dom'
import useScreenWidth from "./ListenerWidth"
import LogoHead from "./LogoHead"
import MenuAuthDeskTab from "./MenuAuthDeskTab"
import {
    ContainerHeader,
    LeftBlock,
    PointsBalance,
    NumberBalance,
    MenuHeaderBlock,
    MobileHamburgerContainer,
    MobileHamburgerLine,
    MobileHamburgerbackground,
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCrossHolder,
    MobileHamburgerSectionMenuUp,
    MobileHamburgerSectionMenu
} from "./Header.styled"
import { MAIN_DARK, MAIN_BACKGROUND } from "../../assets/themes/colors"

const linkActiveColor = ({ isActive }) => { return { color: isActive ? MAIN_DARK : MAIN_BACKGROUND } }

const HeaderAuth = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    const width = (useScreenWidth() - 1)
    const location = useLocation()

    return (
        <>
            {width >= 769 &&                    // --------------- Desktop -------------
                <ContainerHeader>
                    <LogoHead />
                    <MenuHeaderBlock>
                        <MenuAuthDeskTab />
                    </MenuHeaderBlock>
                </ContainerHeader>
            }
            {(width >= 481 && width <= 768) &&   // --------------- Tablet -------------
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        {location.pathname === '/' &&
                            <PointsBalance>
                                Points balance:
                                <NumberBalance>0</NumberBalance>
                            </PointsBalance>
                        }
                    </LeftBlock>
                    <MenuHeaderBlock>
                        <MenuAuthDeskTab />
                    </MenuHeaderBlock>
                </ContainerHeader>
            }
            {width <= 480 && <>                 {/* -------------- Mobile ------------ */}
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        {location.pathname === '/' &&
                            <PointsBalance>
                                Points balance:
                                <NumberBalance>0</NumberBalance>
                            </PointsBalance>
                        }
                    </LeftBlock>
                    <MobileHamburgerContainer onClick={toggle}>
                        <MobileHamburgerLine />
                    </MobileHamburgerContainer>
                </ContainerHeader>
                <MobileHamburgerbackground Active={isOpen}>
                    <MobileHamburgerCrossBox onClick={toggle}>
                        <MobileHamburgerCross>
                            <MobileHamburgerCrossHolder />
                        </MobileHamburgerCross>
                    </MobileHamburgerCrossBox>
                    <NavLink to="auth" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenuUp>Authorization</MobileHamburgerSectionMenuUp>
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

export default HeaderAuth