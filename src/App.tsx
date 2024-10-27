import {useState} from 'react'
import {
    GeistProvider,
    Page,
    CssBaseline,
} from '@geist-ui/core';
import {Header} from "./components/Header.tsx";
import {Outlet, useNavigate} from "react-router-dom";

function App() {
    const [themeType, setThemeType] = useState('dark')
    const switchThemes = () => {
        setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
    }
    const navigate = useNavigate();
    const [activeTab] = useState('home');

    function handleSetActiveTab(el: string) {
        navigate("/" + el);
    }

    return (
        <>
            <Page style={{zIndex: 200000}}>
                <GeistProvider themeType={themeType}>
                    <CssBaseline/>
                    <Header setActiveTab={handleSetActiveTab} activeTab={activeTab} themeType={themeType}
                            switchThemes={switchThemes}/>

                    <main style={{padding: '20px'}}>
                        <Outlet/>
                    </main>
                </GeistProvider>
            </Page>
        </>
    )
}

export default App
