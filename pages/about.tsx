import Link from 'next/link';
import { FC } from 'react';
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';

const AboutPage = () => {
    return (
        <>

            <h1>About Page</h1>

            <h1 className="title">
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className="description">
                Get started by editing{ ' ' }
                <code className="code">pages/about.js</code>
            </p>

        </>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
};