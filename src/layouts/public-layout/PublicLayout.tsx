import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box } from "@mui/material";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Outlet } from "react-router-dom";
import Facebook from '~/assets/social-media/facebook.svg';
import TikTok from '~/assets/social-media/tiktok.svg';
import Zalo from '~/assets/social-media/zalo.svg';
import Header from "./components/header/Header";
import { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
const actions = [
    { icon: <img src={Facebook} />, name: 'Facebook', action: 'FACEBOOK' },
    { icon: <img src={Zalo} />, name: 'Zalo', action: 'ZALO' },
    { icon: <img src={TikTok} />, name: 'TikTok', action: 'TIKTOK' },
    { icon: <PhoneInTalkIcon />, name: '095464534534', action: 'PHONE' },
];

const handleContact = (action: string) => {
    if (action === "FACEBOOK") {
        window.open("https://www.facebook.com/", "_blank");
        return;
    } else if (action === "ZALO") {
        window.open("https://www.zalo.com/", "_blank");
        return;
    } else if (action === "TIKTOK") {
        window.open("https://www.tiktok.com/", "_blank");
        return;
    } else return;
}
const PublicLayout = () => {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setIsFixed(true);
            } else if (window.scrollY < 10) {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <Box
            sx={{
                minHeight: "100vh",
                overflowX: "hidden",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: isFixed ? "fixed" : "static",
                    top: "-100px",
                    left: 0,
                    width: "100%",
                    backgroundColor: "white",
                    boxShadow: isFixed ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
                    transform: isFixed ? "translateY(55%)" : null,
                    transition: isFixed ? "transform 0.5s ease-in-out" : null,
                    zIndex: 1000,
                }}
            >
                <Header />
            </Box>
            <Outlet />
            <Footer />
            <Box >
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'fixed', bottom: 50, right: 25 }}
                    icon={<LocalPhoneIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            sx={action.action === "PHONE" ? { bgcolor: "red", color: "white" } : null}
                            onClick={() => handleContact(action.action)}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </Box>
    )
}

export default PublicLayout