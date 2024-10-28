import React from 'react';
import {Spacer, Text} from "@geist-ui/core";

export const Home: React.FC = () => {
    return (
        <>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Spacer h={10}/>
            <Text h1>Portfolio</Text>
            <Text h1>Nikita Bersenev</Text>
        </>
    );
};
