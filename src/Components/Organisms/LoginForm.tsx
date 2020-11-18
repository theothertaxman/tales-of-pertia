import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { navigate } from '@reach/router';

const LogInActionsContainer = styled.div`
    margin: 8px 16px;
`;
export default function LoginForm(): JSX.Element {
    return (
        <>
            <TextField id="standard-basic" label="Your email" />
            <TextField id="standard-basic" label="Your password" type="password" />
            <Button onClick={() => navigate('home')}>Log in</Button>
            <LogInActionsContainer>
                <Button>Forgot password</Button>
                <Button onClick={() => navigate('register')}>Create account</Button>
            </LogInActionsContainer>
        </>
    );
}
