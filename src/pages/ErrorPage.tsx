import React from 'react';
import {useRouteError, isRouteErrorResponse} from 'react-router-dom';
import {CssBaseline, GeistProvider, Page, Spacer, Text} from "@geist-ui/core";

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <>
            <Page style={{zIndex: 200000}}>
                <GeistProvider themeType={"dark"}>
                    <CssBaseline/>
                    <main style={{padding: '20px'}}>
                        <Spacer h={10}/>
                        <Text h1>Oops!</Text>
                        <Text h2>Sorry, an unexpected error has occurred.</Text>
                        <Text h2><i>{errorMessage}</i></Text>
                    </main>
                </GeistProvider>
            </Page>
        </>
    );
};

export default ErrorPage;