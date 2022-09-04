import React, { useState } from "react"
import {
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCrossHolder
} from "./Header.styled"

const HamburgerCross = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    return (
        <MobileHamburgerCrossBox onClick={toggle}>
            <MobileHamburgerCross>
                <MobileHamburgerCrossHolder />
            </MobileHamburgerCross>
        </MobileHamburgerCrossBox>
    )
}
export default HamburgerCross


