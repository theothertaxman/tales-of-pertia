import React from 'react';
import { RouteComponentProps } from '@reach/router';
import LandingPage from '../Pages/LandingPage';
import LogInPage from '../Pages/LogInPage';
import RegisterPage from '../Pages/RegisterPage';
import UserHomePage from '../Pages/UserHomePage';
import CharacterPage from '../Pages/CharacterPage';

export const LandingPageRoute = (props: RouteComponentProps) => <LandingPage />;
export const LogInPageRoute = (props: RouteComponentProps) => <LogInPage />;
export const RegisterPageRoute = (props: RouteComponentProps) => <RegisterPage />;
export const UserHomePageRoute = (props: RouteComponentProps) => <UserHomePage />;
export const CharacterPageRoute = (props: RouteComponentProps) => <CharacterPage />;
