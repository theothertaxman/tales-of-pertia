import React from 'react';
import { Button, Divider, TextField } from '@material-ui/core';
import { navigate } from '@reach/router';

export default function RegisterForm(): JSX.Element {
    return (
        <>
            <TextField id="standard-basic" label="Your email" />
            <TextField id="standard-basic" label="Your password" type="password" />
            <Button onClick={() => navigate('home')}>Register</Button>
            <Divider />
            <p>Do you have an account?</p>
            <Button onClick={() => navigate('login')}> Log in </Button>
        </>
    );
}
