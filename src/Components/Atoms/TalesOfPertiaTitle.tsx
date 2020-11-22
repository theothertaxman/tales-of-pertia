import React from 'react';
import styled from 'styled-components';
import Colours, { Palette2 } from '../../Assets/Colours';

export const MainTitle = styled.h1`
    font-family: WildBreath;
    font-size: 56px;
    margin: 4px 16px;
    color: ${Palette2.YELLOW};
`;
export default function TalesOfPertiaTitle(): JSX.Element {
    return <MainTitle>Tales of Pertia</MainTitle>;
}
