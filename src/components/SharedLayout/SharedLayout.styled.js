import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
margin: 0 auto;
padding: 0 auto;
`;

export const Header = styled.header` 
display: flex;
align-items: center;
justify-content: space-between;
gap: 12px;
padding: 8px 0;
margin-bottom: 16px;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

>nav {
    display: flex;
}

`;

export const Link = styled(NavLink)` 
padding: 10px 15px;
font-size: 18px;
text-decoration: none;
color: black;
font-weight: 700;


&.active {
    color: red;
}

&:hover {
    color: blue;
    text-decoration: underline;
}

`;