import React, {ReactElement} from 'react';
import {Project} from "./Project.tsx";

export const Projects: React.FC = () => {
    const projects: ReactElement[] = []
    for(let i = 0; i < 20; i++) {
        projects.push(<Project key={i} />);
    }
    return (
        <>
            <h1>Blog</h1>
            {projects}
        </>
    );
};
