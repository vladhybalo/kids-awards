import React from "react";
import {
	Containerheder, Logoheader,
	NavheaderBlock, AutorizMenu,
	Vlinemenu, ContactMenu
} from "./Header.styled"

const HeaderDesktopGuest = () => {
	return (
		<Containerheder>
			<Logoheader>
				KidsLike
				<img src={window.location.origin + '/src/assets/image/HeaderKidsLogo.svg'} />
			</Logoheader>
			<NavheaderBlock>
				<AutorizMenu>Авторизация</AutorizMenu>
				<Vlinemenu><img src={window.location.origin + '/src/assets/image/HeaderNavVline.svg'} /></Vlinemenu>
				<ContactMenu>Контакты</ContactMenu>
			</NavheaderBlock>
		</Containerheder>
	)
}

export default HeaderDesktopGuest


