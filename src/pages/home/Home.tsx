import { Box, Button, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Carousel from 'react-multi-carousel'
import BaseCard from '~/components/BaseCard'
import { BASE_COLORS } from '~/utils/constants/common'
import CarouselComponent from './components/CarouselComponent'
import styles from './home.module.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import baobi1 from '~/assets/baobi/baobi1.jpg'
const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1450 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1450, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <Box sx={{
            px: {
                xs: "30px", sm: "50px", md: "100px", lg: "150px", xl: "200px"
            }
        }}>
            <CarouselComponent />
            <Box sx={{
                minHeight: "50px", bgcolor: BASE_COLORS.BLUE, mt: 2, display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: {
                        md: "18px",
                        xs: "12px"
                    }
                }}>NÔNG SẢN DŨNG HÀ – MANG SỨC KHOẺ VÀ CUỘC SỐNG AN LÀNH ĐẾN MỌI NƠI</Typography>
            </Box>
            <Box sx={{ bgcolor: "#f6f6f6", borderRadius: "20px", p: "30px", mt: 2 }}>
                <Stack direction='row' justifyContent="space-between">
                    <Typography sx={{
                        fontSize: {
                            lg: "25px",
                            md: "20px",
                            xs: "15px"
                        },
                        maxWidth: "70%"
                    }} fontWeight="bold">GÀ GIỐNG LAI HỒ MÀO GÀ THỤ TINH</Typography>
                    <Button sx={{ color: BASE_COLORS.BLUE }}>Xem tất cả</Button>
                </Stack>
                <Divider sx={{ bgcolor: BASE_COLORS.BLUE }}></Divider>
                <Carousel swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    additionalTransfrom={0}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass={styles.carouselItem}
                    partialVisible={true}
                >
                    <BaseCard image={baobi1}
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be3-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                </Carousel >
            </Box>
            <Box sx={{ bgcolor: "#f6f6f6", borderRadius: "20px", p: "30px", mt: 2 }}>
                <Stack direction='row' justifyContent="space-between">
                    <Typography sx={{
                        fontSize: {
                            lg: "25px",
                            md: "20px",
                            xs: "15px"
                        },
                        maxWidth: "70%"
                    }} fontWeight="bold">THỨC ĂN CHĂN NUÔI THƯƠNG HIỆU SÔNG CẦU</Typography>
                    <Button sx={{ color: "#1a691d" }}>Xem tất cả</Button>
                </Stack>
                <Divider sx={{ bgcolor: BASE_COLORS.GREEN }}></Divider>
                <Carousel swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    additionalTransfrom={0}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass={styles.carouselItem}
                    partialVisible={true}
                >
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be3-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                </Carousel >
            </Box>
            <Box sx={{ bgcolor: "#f6f6f6", borderRadius: "20px", p: "30px", mt: 2 }}>
                <Stack direction='row' justifyContent="space-between">
                    <Typography sx={{
                        fontSize: {
                            lg: "25px",
                            md: "20px",
                            xs: "15px"
                        },
                        maxWidth: "70%"
                    }} fontWeight="bold">THỨC ĂN CHĂN NUÔI THƯƠNG HIỆU SC FEED</Typography>
                    <Button sx={{ color: "#1a691d" }}>Xem tất cả</Button>
                </Stack>
                <Divider sx={{ bgcolor: BASE_COLORS.GREEN }}></Divider>
                <Carousel swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    additionalTransfrom={0}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass={styles.carouselItem}
                    partialVisible={true}
                >
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} priceTo={124000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be3-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                    <BaseCard image='https://nongsandungha.com/wp-content/uploads/2016/06/banner-web-be1-250x250.jpg'
                        name='Thức ăn đặc biệt cho heo con từ tập ăn - 12kg'
                        priceFrom={120000} />
                </Carousel >
            </Box>
            <Box sx={{ borderRadius: "20px", mt: 2 }}>
                <Typography sx={{
                    fontSize: {
                        lg: "30px",
                        md: "25x",
                        xs: "20px"
                    }
                }} fontWeight="bold">Liên Hệ</Typography>
                <Stack
                    direction={isMobile ? "column" : "row"}
                    gap={2}
                    sx={{ alignItems: "center" }}
                >
                    <Box sx={{ width: isMobile ? "100%" : "60%" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.506216904016!2d105.52271427471398!3d21.012421688340616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1739698720165!5m2!1svi!2s"
                            width="100%"
                            height="450"
                            loading="lazy"
                            style={{ border: 0 }}
                        ></iframe>
                    </Box>

                    <Box
                        sx={{
                            width: isMobile ? "100%" : "50%",
                            px: isMobile ? "20px" : "50px",
                        }}
                    >
                        <Stack direction="row" gap={2} alignItems="center">
                            <FmdGoodIcon sx={{ fontSize: "40px", color: "#007bff" }} />
                            <Box sx={{ color: "#3a3a3a" }}>
                                <Typography variant="h5" fontWeight="bold">
                                    Địa chỉ
                                </Typography>
                                <Typography fontSize="20px">
                                    Khu Công Nghệ Cao Hòa Lạc, km 29, Đại lộ, Thăng Long, Hà Nội, Việt Nam
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack direction="row" gap={2} alignItems="center" mt={3}>
                            <PhoneInTalkIcon sx={{ fontSize: "40px", color: "#007bff" }} />
                            <Box sx={{ color: "#3a3a3a" }}>
                                <Typography variant="h5" fontWeight="bold">
                                    Số điện thoại
                                </Typography>
                                <Typography fontSize="20px">098.348.9923</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box >
    )
}
export default Home