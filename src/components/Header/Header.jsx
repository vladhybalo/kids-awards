import React from "react"
import { useSelector } from "react-redux"
import HeaderAuth from "./HeaderAuth"
import HeaderUser from './HeaderUser'

const Header = () => {

    const stateUsInfouserData = useSelector(state => state.userInfo.userData)
    return (
        <>
            {!stateUsInfouserData && // ----- AUTH -------
                <HeaderAuth />
            }
            {stateUsInfouserData && // ------ USER -------
                <HeaderUser />
            }
        </>
    )
}
export default Header

