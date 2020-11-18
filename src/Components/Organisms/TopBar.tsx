import React from 'react';
import styled from 'styled-components';
import TalesOfPertiaTitle from '../Atoms/TalesOfPertiaTitle';
import { Button } from '@material-ui/core';
import Colours from '../../Assets/Colours';
import UserAvatar from '../Atoms/UserAvatar';
import UserActionsMenu from '../Molecules/UserActionsMenu';

const TopBarContainer = styled.div`
    display: grid;
    grid-template-columns: 400px auto 120px 120px 75px;
    align-items: center;
    grid-template-rows: 55px;
    background-color: ${Colours.DARK_WOOD};
`;
export default function TopBar(): JSX.Element {
    return (
        <TopBarContainer>
            <TalesOfPertiaTitle />
            <div />
            <Button> Mis campañas </Button>
            <Button> Mi personaje</Button>
            <UserActionsMenu />
        </TopBarContainer>
    );
}
