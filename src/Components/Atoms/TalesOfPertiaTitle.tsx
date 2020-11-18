import React from 'react';
import styled from 'styled-components';
import Colours from '../../Assets/Colours';

export const MainTitle = styled.h1`
    font-family: WildBreath;
    font-size: 48px;
    margin: 4px 16px;
    color: ${Colours.BLACK};
`;
export default function TalesOfPertiaTitle(): JSX.Element {
    return <MainTitle>Tales of Pertia</MainTitle>;
}
