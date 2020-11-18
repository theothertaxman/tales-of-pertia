import React from 'react';
import styled from 'styled-components';
import Colours from '../Assets/Colours';
import { Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';
import TalesOfPertiaTitle from '../Components/Atoms/TalesOfPertiaTitle';

const TopBarContainer = styled.div`
    display: grid;
    grid-template-columns: 400px auto 100px 100px;
    height: 55px;
    background-color: ${Colours.DARK_WOOD};
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 800px;
    background-color: ${Colours.LIGHT_WOOD};
    color: ${Colours.RED};
`;

const Footer = styled.div`
    height: 90px;
    background-color: ${Colours.BLACK};
`;

const useStyles = makeStyles({
    root: {
        justifySelf: 'flex-end',
        margin: '8px 16px',
        fontFamily: 'Basalt',
    },
});

export default function LandingPage(): JSX.Element {
    const classes = useStyles();
    return (
        <>
            <TopBarContainer>
                <TalesOfPertiaTitle />
                <div />
                <a>
                    <Button classes={{ root: classes.root }} onClick={() => navigate('register')}>
                        {' '}
                        Register
                    </Button>
                </a>
                <a>
                    <Button classes={{ root: classes.root }} onClick={() => navigate('login')}>
                        {' '}
                        Log in
                    </Button>
                </a>
            </TopBarContainer>
            <ContentContainer>
                <Divider />
            </ContentContainer>
            <Footer>Something random</Footer>
        </>
    );
}
