import React from 'react';
import styled from 'styled-components';
import Colours from '../../../Assets/Colours';

const HomeFeedPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${Colours.DARK_WOOD};
    border-radius: 5px;
    margin: 32px 16px;
    height: 300px;
`;
export default function HomeFeedPanel(): JSX.Element {
    return <HomeFeedPanelContainer>Foo</HomeFeedPanelContainer>;
}
