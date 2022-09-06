import React from "react"
import { PropTypes } from "prop-types"
import { NavLink } from 'react-router-dom'

import { MAIN_DARK, MAIN_BACKGROUND } from "../../assets/themes/colors"

import {
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCrossHolder,
    MobileHamburgerSectionMenuUp,
    MobileHamburgerSectionMenu
} from "./Header.styled"

const linkActiveColor = ({ isActive }) => { return { color: isActive ? MAIN_DARK : MAIN_BACKGROUND } }

const Navigation = (props) => {
    const toggle = () => { props.func() }
    return (
        <>
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
        </>
    )
}

Navigation.propTypes = {
    func: PropTypes.func
}

export default Navigation


