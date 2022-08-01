import styled from "styled-components"

export const Containerheder = styled.div` 
position: fixed;
height: 64px;
top: 0;
left: 0;
z-index: 3;
display: flex;
padding: 0 12px;
justify-content: space-between;
align-items: center;
background-color: white;
box-shadow: 0px 2px 4px #00000026;
flex-direction: row;
width: 100%;
`;

export const Logoheader = styled.div` 
width: 103px;
min-width: 100px;
height: 20px;
margin-left: 16px;
font-family: 'Montserrat-700';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.08em;
color: #000000;
display: flex;
flex-direction: row;
padding: 0px;
align-content: center;
align-items: center;
justify-content: space-between;
`;

export const NavheaderBlock = styled.div` 
margin-bottom: 1px;
display: flex;
align-items: flex-start;
min-width: 192px;
`;

export const AutorizMenu = styled.div` 
width: 90px;
min-height: 15px;
margin-top: 1px;
font-family: "Montserrat Medium";
font-weight: 400;
color: black;
font-size: 12px;
text-align: right;
letter-spacing: 0.48px;
`;

export const Vlinemenu = styled.div` 
height: 19px;
align-self: flex-end;
margin-left: 16px;
`;

export const ContactMenu = styled.div` 
width: 66px;
min-height: 15px;
margin-left: 15px;
margin-top: 1px;
font-family: "Montserrat Medium";
font-weight: 400;
color: rgb(133, 133, 152);
font-size: 12px;
letter-spacing: 0.48px;
`;
