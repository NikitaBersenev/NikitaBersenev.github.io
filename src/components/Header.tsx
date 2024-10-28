import {Button, Grid, Image, Link as LinkGeist, Tabs, Text} from "@geist-ui/core";
import {FaGithub, FaTelegram} from "react-icons/fa";
import {IoMoonOutline} from "react-icons/io5";

interface Props2 {
    theme?: string
}

interface Props {
    themeType?: string,
    activeTab?: string,
    setActiveTab?: (el: string) => void,
    switchThemes?: () => void
}

function ImageLogo({theme}: Props2) {
    if (theme == "light") {
        return <Image style={{filter: "invert(100%)"}} src="/src/assets/logo.jpg" alt="Logo" height="50px"/>;
    }
    return <Image src="/src/assets/logo.jpg" alt="Logo" style={{minHeight: "50px", minWidth: "50px"}} height="50px"
                  width="50px"/>;
}

export const Header = ({themeType, setActiveTab, switchThemes, activeTab}: Props) => {
    return (
        <>
            <Grid.Container alignItems="flex-start" height={2} marginTop={-2} direction={"row"}>
                <Grid xs={4} sm={3} md={2} lg={1} justify="flex-start" alignContent={"center"} alignItems={"center"}
                      direction={"row"}
                      height={1}>
                    <ImageLogo theme={themeType}/>
                </Grid>
                <Grid xs={4} sm={3} md={2} lg={1} alignContent={"center"} alignItems={"center"} direction={"row"}
                      height={2}
                      justify="flex-start">
                    <Text h3>Habe</Text>
                </Grid>
                <Grid xs={0} sm={15} md={16} lg={20} justify={"center"} alignContent={"center"} alignItems={"center"}
                      direction={"row"}
                      height={2}>
                    <Tabs hideDivider hideBorder value={activeTab} onChange={setActiveTab}>
                        <Tabs.Item value="" label="Home"/>
                        <Tabs.Item value="blog" label="Blog"/>
                        <Tabs.Item value="projects" label="Projects"/>
                        <Tabs.Item value="contacts" label="Contacts"/>
                    </Tabs>
                </Grid>
                <Grid xs={0} sm={3} md={4} lg={2} justify={"flex-start"} alignContent={"center"} alignItems={"center"}
                      direction={"row"}
                      height={2}>
                    <LinkGeist placeholder onPointerEnterCapture onPointerLeaveCapture
                               href="https://github.com/NikitaBersenev" marginRight="10px" target="_blank">
                        <FaGithub/> </LinkGeist>
                    <LinkGeist placeholder onPointerEnterCapture onPointerLeaveCapture href="https://t.me/lewyngal"
                               marginRight="10px" target="_blank"><FaTelegram/></LinkGeist>
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
        </>
    );
}