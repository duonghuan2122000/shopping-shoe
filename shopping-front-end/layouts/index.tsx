import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

type LayoutProps = {
    children: React.ReactNode,
    title?: string
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}

Layout.defaultProps = {
    title: 'Shopping'
}

export default Layout;