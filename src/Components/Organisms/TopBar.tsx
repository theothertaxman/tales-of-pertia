import React from 'react';
import styled from 'styled-components';
import TalesOfPertiaTitle from '../Atoms/TalesOfPertiaTitle';
import { Button } from '@material-ui/core';
import Colours, { Palette2 } from '../../Assets/Colours';
import UserAvatar from '../Atoms/UserAvatar';
import UserActionsMenu from '../Molecules/UserActionsMenu';
import { navigate } from '@reach/router';

const TopBarContainer = styled.div`
    display: grid;
    grid-template-columns: 400px auto 120px 120px 75px;
    align-items: center;
    grid-template-rows: 55px;
    background-color: ${Palette2.DARK_BROWN};
`;
export default function TopBar(): JSX.Element {
    return (
        <TopBarContainer>
            <TalesOfPertiaTitle />
            <div />
            <Button> My campaigns </Button>
            <Button onClick={() => navigate('/character')}> My character</Button>
            <UserActionsMenu />
        </TopBarContainer>
    );
}
