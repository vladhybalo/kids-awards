import React, { useState } from "react"
import {
    // MobileHamburgerbackground,
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCrossHolder
} from "./Header.styled"

const HamburgerCross = ({ activeMobileMunu }) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    activeMobileMunu = isOpen
    return (
        <>
            <MobileHamburgerCrossBox onClick={toggle}>
                {/* <MobileHamburgerbackground Active={activeMobileMunu} /> */}
                <MobileHamburgerCross>
                    <MobileHamburgerCrossHolder />
                </MobileHamburgerCross>
            </MobileHamburgerCrossBox>
        </>
    )
}
export default HamburgerCross


