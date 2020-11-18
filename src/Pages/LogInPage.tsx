import React from 'react';
import OnBoardingLayout from '../Components/Templates/OnBoardingLayout';
import LoginForm from '../Components/Organisms/LoginForm';

export default function LogInPage(): JSX.Element {
    return (
        <OnBoardingLayout>
            <h1 style={{ fontFamily: 'WildBreath' }}>Log in</h1>
            <LoginForm />
        </OnBoardingLayout>
    );
}
