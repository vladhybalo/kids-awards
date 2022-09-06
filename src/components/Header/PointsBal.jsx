import React from "react"
import { useSelector } from "react-redux"

import { PointsBalance, NumberBalance } from "./Header.styled"

const PointsBal = () => {
    let userBalance = 0
    const userData = useSelector(state => state.userInfo.userData)
    if (userData) {
        userBalance = userData.balance
    }
    return (
        <PointsBalance>
            Points balance:
            <NumberBalance>{userBalance}</NumberBalance>
        </PointsBalance>
    )
}

export default PointsBal