import React from 'react';
import TopBar from '../Organisms/TopBar';
import styled from 'styled-components';
import Colours from '../../Assets/Colours';

type BaseLayoutProps = {
    children: JSX.Element | JSX.Element[];
};

const ContentContainer = styled.div`
    display: flex;
    background: ${Colours.LIGHT_WOOD};
    min-height: 900px;
    justify-content: center;
`;

export default function BaseLayout(props: BaseLayoutProps): JSX.Element {
    return (
        <>
            <TopBar />
            <ContentContainer>{props.children}</ContentContainer>
        </>
    );
}
