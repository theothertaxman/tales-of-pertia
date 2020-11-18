import React from 'react';
import styled from 'styled-components';
import Colours from '../../../Assets/Colours';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const HomeMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 32px 16px;
    padding: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${Colours.DARK_WOOD};
    height: 300px;
    align-self: center;
    border-radius: 5px;
`;

const withStyles = makeStyles({
    root: {
        fontFamily: 'Basalt',
        backgroundColor: Colours.LIGHT_WOOD,
        fontSize: '32px',
        margin: '8px',
    },
});
export default function HomeMenu(): JSX.Element {
    const classes = withStyles();
    return (
        <HomeMenuContainer>
            <Button classes={{ root: classes.root }}>Campañas</Button>
            <Button classes={{ root: classes.root }}>Personaje</Button>
            <Button classes={{ root: classes.root }}>Config</Button>
        </HomeMenuContainer>
    );
}
