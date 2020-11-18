import React from 'react';
import OnBoardingLayout from '../Components/Templates/OnBoardingLayout';
import RegisterForm from '../Components/Organisms/RegisterForm';
import { MainTitle } from '../Components/Atoms/TalesOfPertiaTitle';

export default function RegisterPage(): JSX.Element {
    return (
        <OnBoardingLayout>
            <h1 style={{ fontFamily: 'WildBreath' }}>Join us for endless adventures</h1>
            <RegisterForm />
        </OnBoardingLayout>
    );
}
