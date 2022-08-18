import styled, { css } from "styled-components"

export const fontRegular = css` 
    font-family: "Montserrat-Regular";
    font-weight: 500;
    line-height: 15px;
    font-size: 12px;
    letter-spacing: 0.04em;
`;

export const elementMenu = css` 
    padding-left: 16px;
    padding-right: 16px;
    height: 19px;
    display: grid;
    align-items: center;
    ${fontRegular}
    &:hover {
        color: black;
        font-weight: bold;
        box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.8), 
        inset 10px 10px 15px rgba(70, 70, 70, 0.12);
      }
`;

export const ContainerHeder = styled.div` 
    position: fixed;
    height: 64px;
    top: 0;
    left: 0;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 20%);
    width: 100%; 
    @media (max-width: 270px){
        min-width: 270px;
    }
    @media (max-width: 295px){
        padding: 0 10px;
    }
`;

export const LeftBlock = styled.div` 
    min-height: 30px;
    width: min-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoHeader = styled.div` 
    width: 103px;
    min-width: 103px;
    font-family: 'Montserrat-700';
    font-size: 16px;
    letter-spacing: 0.08em;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuHeaderBlock = styled.nav` 
    display: flex;
    align-items: center;
    min-width: 160px;
    justify-content: flex-end;
`;

export const MenuAuthorization = styled.div`
    ${elementMenu}
    border-right: 1px solid #858598;
    color: rgb(133, 133, 152);
`;

export const MenuContact = styled.div` 
    ${elementMenu}
`;

export const PointsBalance = styled.div`
    max-width: 85px;                         
    color: #A6ABB9;
    display: flex;
    ${fontRegular}; 
    @media (min-width: 1000px){
        margin-left:130px;
    }
    @media (max-width: 1000px){
        margin-left:40px;
    }
    @media (max-width: 330px){
        margin-left:20px;
    }
`;

export const NumberBalance = styled.div`
    margin-left: 8px;
    display: flex;
    font-family: 'Montserrat-700';
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    letter-spacing: 0.04em;
    color: #000000;
`;

export const MenuSection = styled.div`
    ${elementMenu}
    border-right: 1px solid #858598;
`;

export const MenuInitiaLetterCircle = styled.div`
    background: #2196F3;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-left: 24px;
    display: grid;
    align-items: end;
    @media (max-width: 531px){
        margin-left:20px;
    }
`;

export const MenuInitiaLetter = styled.div`
    width: 26px;
    height: 24px;
    font-family: 'Montserrat-700';
    font-size: 17px;
    line-height: 22px;
    display: -ms-flexbox;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    display: grid;
    align-items: end;
    justify-content: center;
`;

export const MenuName = styled.div`
    margin-left: 8px;
    padding-right: 16px;
    height: 19px;
    display: grid;
    align-items: center;
    font-family: 'Montserrat-700';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;
    border-right: 1px solid #858598;
    color: #858598;
    @media (max-width: 531px){
        border-right: 1px solid white;
        color: white;
    }
`;

export const MobileHamburgerLine = styled.div`
    border-bottom: 1px solid #858598;
`;

export const MobileHamburgerContainer = styled.nav`
    position: relative;
    width: 22px;
    height: 14px;
    border-top: 1px solid #858598;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #858598;
    justify-content: center;
    cursor: pointer;
    &:hover {
        width: 23px;
        height: 15px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        box-shadow:         
        rgb(0 0 0 / 19%) 1px 3px 20px 0px, 
        inset -10px -10px 15px rgb(255 255 255 / 80%), 
        inset 10px 10px 15px rgb(70 70 70 / 12%);
        ${MobileHamburgerLine}{
            border-bottom: 1px solid black;
        }
    }
    @media (max-width: 300px){
        margin-left:20px;
    }
`;

export const MobileHamburgerbackground = styled.nav`
    position: fixed;
    width: 274px;
    height: 100%;
    right: 0px;
    top: 0px;
    background: #FFBC33;
    box-shadow: -15px 0px 20px rgba(0, 0, 0, 0.25);
    Z-index: 10;
    overflow: hidden;
    transition: 0.5s;
`;

export const MobileHamburgerSectionStyle = css`
    height: 44px;
    width: 100%;
    border-bottom: 1px solid #ffffff;
    display: grid;
    align-items: center;
    padding-left: 20px;
    ${fontRegular}
    &:hover {
    box-shadow: 
    rgb(0 0 0 / 19%) 1px 3px 10px 0px, 
    inset -6px -6px 8px rgb(255 255 255 / 80%), 
    inset 6px 6px 8px rgb(70 70 70 / 12%);
  }
`;

export const MobileHamburgerSectionMenuUp = styled.div`
${MobileHamburgerSectionStyle}
    margin-top: 80px;
    border-top: 1px solid #ffffff;
`;

export const MobileHamburgerSectionMenu = styled.div`
${MobileHamburgerSectionStyle}
`;

export const MobileHamburgerLoginBox = styled.div`
    position: absolute;
    margin-top: 18px;
`;

export const MobileHamburgerCross = styled.div`
    height: 22px;
    width: 1px;
    background-color: #ffffff;
    transform: rotate(45deg);
    Z-index: 11;
    position: absolute;
`;
export const MobileHamburgerCross1 = styled.div`
    height: 22px;
    width: 1px;
    background-color: #ffffff;
    transform: rotate(90deg);
    Z-index: 12;
    position: absolute;
`;

export const MobileHamburgerCrossBox = styled.div`
    height: 22px;
    width: 22px;
    top: 20px;
    right: 20px;
    padding-left: 11px;
    position: absolute;
    &:hover {
        box-shadow: 
        inset rgb(0 0 0 / 19%) 0px 0px 10px 0px,
        rgb(0 0 0 / 19%) 1px 3px 10px 0px;
        border-radius: 50px;
        padding-left: 10.5px;
        padding-top: 1.2px;
        cursor: pointer;
        ${MobileHamburgerCross}, ${MobileHamburgerCross1}{
            background-color: black;
            height: 20px;
        }
        ${MobileHamburgerCross}{
            transition: 200ms;
            transform: rotate(135deg);
        }
    }
`;