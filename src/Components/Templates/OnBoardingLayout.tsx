import React from 'react';
import styled from 'styled-components';
import Colours from '../../Assets/Colours';

type OnBoardingLayoutProps = {
    children: JSX.Element | JSX.Element[];
};

const Body = styled.div`
    display: grid;
    grid-template-columns: 140px auto 140px;
    background-color: ${Colours.BLACK};
`;
const SideBar = styled.div`
    background-color: ${Colours.DARK_WOOD};
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colours.LIGHT_WOOD};
    height: 95vh;
    padding-top: 16px;
`;
export default function OnBoardingLayout(props: OnBoardingLayoutProps): JSX.Element {
    return (
        <Body>
            <SideBar />
            <ContentContainer>{props.children}</ContentContainer>
            <SideBar />
        </Body>
    );
}
