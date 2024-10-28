import React from 'react';
import {Article} from "./Article.tsx";
import {ReactElement} from "react";

export const Articles: React.FC = () => {
    const articles: ReactElement[] = []
    for(let i = 0; i < 20; i++) {
        articles.push(<Article key={i} />);
    }
    return (
        <>
            <h1>Blog</h1>
            {articles}
        </>
    );
};

