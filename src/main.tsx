import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import {Projects} from "./pages/Projects.tsx";
import {Articles} from "./pages/Articles.tsx";
import {Contacts} from "./pages/Contacts.tsx";
import {Home} from "./pages/Home.tsx";
import {Article} from "./pages/Article.tsx";
import {Project} from "./pages/Project.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/projects",
                element: <Projects/>,
                children: [
                    {
                        path: "/projects/:name",
                        element: <Project />,
                    },
                ]
            },
            {
                path: "/blog",
                element: <Articles/>,
                children: [
                    {
                        path: "/blog/:name",
                        element: <Article />,
                    },
                ]
            },
            {
                path: "/contacts",
                element: <Contacts/>,
            },
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
