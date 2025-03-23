import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import BoCongThuong from "~/assets/website-da-thong-bao-bo-cong-thuong.png";
import styles from "./footer.module.css";
import Facebook from "~/assets/social-media/facebook.svg";
import TikTok from "~/assets/social-media/tiktok.svg";
import Zalo from "~/assets/social-media/zalo.svg";
import { BASE_COLORS } from "~/utils/constants/common";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            gap={isMobile ? 3 : 5}
            sx={{
                bgcolor: BASE_COLORS.BLUE,
                px: isMobile ? "20px" : "200px",
                py: "50px",
                mt: 5,
                alignItems: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
            }}
        >
            {/* Company Info */}
            <Box sx={{ width: isMobile ? "100%" : "45%" }}>
                <Typography variant="h5" fontSize="30px" fontWeight="bold" color="white">
                    Công ty cổ phần đầu tư và phát triển Sông Cầu
                </Typography>
                <Typography fontSize="15px" color="white" mt={4}>
                    Số ĐKKD 0108783652 do Sở KHĐT Tp. Hà Nội cấp ngày 14/06/2019 tại SKH đầu tư Hà Nội
                </Typography>
                <Stack direction="row" gap={2} mt={2} justifyContent={isMobile ? "center" : "flex-start"}>
                    <FmdGoodIcon sx={{ color: "white" }} />
                    <Typography fontSize="15px" color="white">
                        Địa chỉ: Số 11 Kim Đồng | đường Giáp Bát | quận Hoàng Mai | Thành phố Hà Nội
                    </Typography>
                </Stack>
                <Stack direction="row" gap={2} mt={2} justifyContent={isMobile ? "center" : "flex-start"}>
                    <AccessTimeIcon sx={{ color: "white" }} />
                    <Typography fontSize="15px" color="white">
                        Giờ mở cửa 7h00 – 12h và 13h30 đến 22h hàng ngày
                    </Typography>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
                    <img src={BoCongThuong} style={{ marginTop: "20px", maxWidth: "100%" }} alt="BoCongThuong" />
                </Box>
            </Box>

            {/* About Us */}
            <Box sx={{ width: isMobile ? "100%" : "auto", mt: isMobile ? 3 : 0 }}>
                <Typography variant="h5" fontWeight="bold" color="white">
                    Về chúng tôi
                </Typography>
                <Typography mt={3}>
                    <Link to="/" className={styles.links}>
                        Thương hiệu Sông Cầu
                    </Link>
                </Typography>
                <Typography mt={2}>
                    <Link to="/" className={styles.links}>
                        Thương hiệu SC Feed
                    </Link>
                </Typography>
            </Box>

            {/* Customer Support & Social Media */}
            <Box sx={{ width: isMobile ? "100%" : "auto", mt: isMobile ? 3 : 0 }}>
                <Typography variant="h5" fontWeight="bold" color="white">
                    Tổng đài chăm sóc khách hàng
                </Typography>
                <Stack
                    gap={2}
                    direction="row"
                    sx={{ color: "white", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start" }}
                    mt={2}
                >
                    <PhoneInTalkIcon />
                    <Typography p={0} color="white">
                        Hotline:{" "}
                        <span style={{ fontSize: "30px", fontWeight: "bold" }}>0939.030.939</span>
                    </Typography>
                </Stack>
                <Typography variant="h5" fontWeight="bold" color="white" mt={3}>
                    THEO DÕI NÔNG SẢN DŨNG HÀ
                </Typography>
                <Box sx={{ display: "flex", gap: 2, justifyContent: isMobile ? "center" : "flex-start" }} mt={3}>
                    <a href="/">
                        <img src={Facebook} alt="Facebook" style={{ width: "30px", height: "30px" }} />
                    </a>
                    <a href="/">
                        <img src={TikTok} alt="TikTok" style={{ width: "30px", height: "30px" }} />
                    </a>
                    <a href="/">
                        <img src={Zalo} alt="Zalo" style={{ width: "30px", height: "30px" }} />
                    </a>
                </Box>
            </Box>
        </Stack>
    );
};

export default Footer;
