import React from 'react';
import BaseLayout from '../Components/Templates/BaseLayout';
import HomeMenu from '../Components/Organisms/Home/HomeMenu';
import HomeFeedPanel from '../Components/Organisms/Home/HomeFeedPanel';
import styled from 'styled-components';

const UserHomePageLayout = styled.div`
    display: grid;
    grid-template-columns: 220px auto 200px;
`;

export default function UserHomePage(): JSX.Element {
    return (
        <BaseLayout>
            <UserHomePageLayout>
                <HomeMenu />
                <HomeFeedPanel />
            </UserHomePageLayout>
        </BaseLayout>
    );
}
