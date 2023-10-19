import React from 'react'
import type {AppProps} from 'next/app';
import {NextPage} from "next";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: JSX.Element) => React.ReactElement;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};


export default function App({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <>
            <CssBaseline/>
            {getLayout(<Component {...pageProps} />)}
        </>
    );
}
