import {useState} from 'react'
import {
    GeistProvider,
    Grid,
    Page,
    Image,
    Tabs,
    CssBaseline,
    Button,
    Card,
    Text,
    Link,
    Spacer
} from '@geist-ui/core';
import {FaGithub} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {IoMoonOutline} from "react-icons/io5";

interface Props {
    theme?: string
}

function ImageLogo({theme} : Props) {
    if (theme == "light") {
        return <Image style={{filter: "invert(100%)"}} src="/src/assets/logo.jpg" alt="Logo" height="100px"/>;
    }
    return <Image src="/src/assets/logo.jpg" alt="Logo" height="100px"/>;
}

function App() {
    const [themeType, setThemeType] = useState('dark')
    const switchThemes = () => {
        setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
    }
    const [activeTab, setActiveTab] = useState('home');
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <>

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
                    <Text></Text>
                </>
            case 'blog':
                return (<>
                    <h1>Blog</h1>
                    <Spacer/>
                    <Card>
                        <Text h2>Article 1</Text>
                        <Text>Description of Article 1</Text>
                    </Card>
                    <Spacer/>
                    <Card>
                    <Text h2>Article 2</Text>
                        <Text>Description of Article 2.</Text>
                    </Card>
                    <Spacer/>
                    <Card>
                        <Text h2>Article 3</Text>
                        <Text>Description of Article 3.</Text>
                    </Card>
                </>);
            case 'projects':
                return (
                    <>
                        <h1>Projects</h1>
                        <Spacer/>
                        <Card>
                            <Text h2>Project 1</Text>
                            <Text>Description of project 1.</Text>
                        </Card>
                        <Spacer/>
                        <Card>
                            <Text h2>Project 2</Text>
                            <Text>Description of project 2.</Text>
                        </Card>
                        <Spacer/>
                        <Card>
                            <Text h2>Project 3</Text>
                            <Text>Description of project 3.</Text>
                        </Card>
                    </>
                );
            case 'contacts':
                return <Text>Contact section</Text>;
            default:
                return null;
        }
    };

    return (
        <>
            <Page>
                <GeistProvider themeType={themeType}>
                    <CssBaseline/>
                    <Grid.Container alignItems="flex-start" height={2} marginTop={-2} direction={"row"}>
                        <Grid xs={1} justify="flex-start" alignContent={"center"} alignItems={"center"}
                              direction={"row"}
                              height={1}>
                            <ImageLogo theme={themeType}/>
                        </Grid>
                        <Grid xs={8} alignContent={"center"} alignItems={"center"} direction={"row"} height={2}
                              justify="flex-start">
                            <Text h3>Habe</Text>
                        </Grid>
                        <Grid xs={10} justify={"flex-start"} alignContent={"center"} alignItems={"center"}
                              direction={"row"}
                              height={2}>
                            <Tabs hideDivider hideBorder value={activeTab} onChange={setActiveTab}>
                                <Tabs.Item value="home" label="Home"/>
                                <Tabs.Item value="blog" label="Blog"/>
                                <Tabs.Item value="projects" label="Projects"/>
                                <Tabs.Item value="contacts" label="Contacts"/>
                            </Tabs>
                        </Grid>
                        <Grid xs={2} justify={"flex-start"} alignContent={"center"} alignItems={"center"}
                              direction={"row"}
                              height={2}>
                            <Link placeholder onPointerEnterCapture onPointerLeaveCapture
                                  href="https://github.com/NikitaBersenev" marginRight="10px" target="_blank">
                                <FaGithub/> </Link>
                            <Link placeholder onPointerEnterCapture onPointerLeaveCapture href="https://t.me/lewyngal"
                                  marginRight="10px" target="_blank"><FaTelegram/></Link>
                            <Button onClick={switchThemes}
                                    placeholder onPointerEnterCapture onPointerLeaveCapture
                                    iconRight={<><IoMoonOutline fontSize="40px"/> &nbsp; Theme</>} auto
                                    scale={10 / 70}/>

                        </Grid>
                    </Grid.Container>

                    <div style={{
                        position: "absolute",
                        top: "60px",
                        zIndex: 123123,
                        height: "calc(0.0625 * 16px)",
                        backgroundColor: "#333",
                        width: "200%",
                        left: -100
                    }}/>

                    <main style={{padding: '20px'}}>
                        {renderContent()}
                    </main>
                </GeistProvider>
            </Page>
        </>
    )
}

export default App
