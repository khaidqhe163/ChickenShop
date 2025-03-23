import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import { Carousel } from "react-responsive-carousel"
import baobi1 from '~/assets/baobi/baobi1.jpg'
import baobi2 from '~/assets/baobi/baobi2.jpg'
import baobi3 from '~/assets/baobi/baobi3.jpg'
import baobi4 from '~/assets/baobi/baobi4.jpg'
import { BASE_COLORS } from "~/utils/constants/common"
import { formatVND } from "~/utils/helpers"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChickenDetail = () => {
    return (
        <Box sx={{
            px: {
                xs: "30px", sm: "50px", md: "100px", lg: "150px", xl: "200px"
            },
            py: 5
        }}>
            <Grid container>
                <Grid item xs={6}>
                    <Carousel autoPlay={true}
                        showThumbs={true}
                        transitionTime={2}
                        infiniteLoop={true}
                    >
                        <div>
                            <img src={baobi1} />
                        </div>
                        <div>
                            <img src={baobi2} />
                        </div>
                        <div>
                            <img src={baobi3} />
                        </div>
                        <div>
                            <img src={baobi4} />
                        </div>
                    </Carousel>
                </Grid>
                <Grid item xs={12} md={6} px={2}>
                    <Typography variant="h4" fontWeight="bold" color="#333">Gà Lai Hồ Mào Cờ</Typography>

                    {/* Giá sản phẩm */}
                    <Box bgcolor={"#f9f9f9"} width="100%" height="100px" mt={2} display="flex" alignItems="center" justifyContent="center" borderRadius="8px" boxShadow="0px 4px 10px rgba(0,0,0,0.1)">
                        <Typography variant="h5" sx={{
                            color: 'red',
                            fontWeight: "bold",
                            fontSize: { lg: "28px", md: "24px", xs: "20px" },
                            textAlign: "center"
                        }}>
                            {formatVND(120000)} - {formatVND(140000)}
                        </Typography>
                    </Box>

                    {/* Thông tin sản phẩm */}
                    <Box mt={3} p={2} borderRadius="8px" bgcolor="#fff" boxShadow="0px 4px 10px rgba(0,0,0,0.1)">
                        <Typography variant="h6" fontWeight="bold" color={BASE_COLORS.BLUE} mb={1}>THÔNG TIN SẢN PHẨM</Typography>
                        <Grid container width="100%" rowGap={2}>
                            {/* Thời gian nuôi */}
                            <Grid item xs={4}>
                                <Typography fontWeight="bold" color="#444">Thời gian nuôi</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="#666">Chỉ từ 90 – 95 ngày</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>

                            {/* Trọng lượng */}
                            <Grid item xs={4}>
                                <Typography fontWeight="bold" color="#444">Trọng lượng</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="#666">2,5 – 2,6kg/con</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>
                            <Grid item xs={4}>
                                <Typography fontWeight="bold" color="#444">Ngoại hình</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="#666">Chân to, tròn, chắc chắn, màu đỏ cam đặc trưng.</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={8} p={1} sx={{ border: `2px solid ${BASE_COLORS.BLUE}`, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", background: "#fff" }}>
                    <Box sx={{ height: "40px", width: "100%", bgcolor: BASE_COLORS.BLUE }}>
                        <Typography variant="h6" lineHeight="40px" px={3} color="white"
                            fontWeight="bold">MÔ TẢ</Typography>
                    </Box>
                    <Typography mt={2}><b>Gà Lai Hồ Mào Cờ Thụ Tinh – Giống Gà Chất Lượng Cao từ Sông Cầu Gà Lai Hồ Mào Cờ Thụ Tinh</b> là một giống gà cao sản được lai tạo từ gà Hồ, một trong những giống gà quý hiếm của Việt Nam, kết hợp với quy trình chọn lọc giống tiên tiến. Đây là giống gà phù hợp với nhiều mô hình chăn nuôi nhờ vào khả năng thích nghi tốt, chất lượng thịt cao và hiệu quả kinh tế vượt trội.</Typography>
                    <Box textAlign="center"><img style={{ width: "80%", marginTop: "10px" }} src="https://media.baobinhphuoc.com.vn/Content/UploadFiles/EditorFiles/images/2017/Quy1/maxresdefault.jpg"></img></Box>
                    <Typography mt={1}>Đặc điểm nổi bật của Gà Lai Hồ Mào Cờ Thụ Tinh:</Typography>
                    <Stack direction='row' gap={1} mt={1}>
                        <CheckCircleIcon sx={{ color: "green" }} />
                        <Typography><b style={{ color: BASE_COLORS.BLUE }}>Thời gian nuôi ngắn:</b> Chỉ từ 90 – 95 ngày, giúp rút ngắn chu kỳ chăn nuôi và tối ưu chi phí</Typography>
                    </Stack>
                    <Stack direction='row' gap={1} mt={1}>
                        <CheckCircleIcon sx={{ color: "green" }} />
                        <Typography><b style={{ color: BASE_COLORS.BLUE }}>Ngoại hình đẹp, khỏe mạnh:</b> Chân to, tròn, chắc chắn, màu đỏ cam đặc trưng. Gà trống trưởng thành có bộ lông màu cánh gián bóng mượt, thể hiện sự mạnh mẽ và oai phong. Gà mái trưởng thành có bộ lông vàng nhạt, nhẹ nhàng và thanh thoát. </Typography>
                    </Stack>
                    <Stack direction='row' gap={1} mt={1}>
                        <CheckCircleIcon sx={{ color: "green" }} />
                        <Typography><b style={{ color: BASE_COLORS.BLUE }}>Trọng lượng trung bình cao:</b> Đạt khoảng 2,5 – 2,6kg/con, đảm bảo năng suất tốt. </Typography>
                    </Stack>
                    <Stack direction='row' gap={1} mt={1}>
                        <CheckCircleIcon sx={{ color: "green" }} />
                        <Typography>Khả năng thích nghi tốt, phù hợp với mọi mô hình chăn nuôi, từ nuôi thả vườn đến nuôi trang trại quy mô lớn.</Typography>
                    </Stack>
                    <Stack direction='row' gap={1} mt={1}>
                        <CheckCircleIcon sx={{ color: "green" }} />
                        <Typography>Tỷ lệ hao hụt thấp, chỉ khoảng 1%, giúp người chăn nuôi giảm thiểu rủi ro.</Typography>
                    </Stack>
                    <Stack direction='row' gap={1} mt={1}>
                        <CheckCircleIcon sx={{ color: "green" }} />
                        <Typography>Hiệu suất chuyển đổi thức ăn (FCR) tiêu chuẩn: 2,8, đảm bảo tối ưu chi phí thức ăn mà vẫn đạt được tốc độ tăng trưởng tốt. Giá trị kinh tế và tiềm năng chăn nuôi Nhờ vào chất lượng thịt ngon, săn chắc, thơm ngọt và giá trị dinh dưỡng cao, gà Lai Hồ Mào Cờ Thụ Tinh đang được thị trường ưa chuộng.</Typography>
                    </Stack>
                    <Typography mt={2}>Giống gà này không chỉ mang lại hiệu quả kinh tế cao mà còn dễ chăm sóc, ít bệnh tật, phù hợp với cả những hộ chăn nuôi nhỏ lẻ và trang trại quy mô lớn. Với những ưu điểm vượt trội, gà Lai Hồ Mào Cờ Thụ Tinh là sự lựa chọn lý tưởng cho người chăn nuôi mong muốn đạt hiệu quả kinh tế cao và bền vững!</Typography>
                </Grid>
                <Grid item xs={4} px={1}>
                    <Box sx={{ border: `2px solid ${BASE_COLORS.BLUE}`, p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", background: "#fff" }}>
                        <Typography fontWeight='bold'>Sông Cầu trên Zalo</Typography>
                        <Box height="5px" bgcolor={BASE_COLORS.BLUE} width="60px" mt={3}></Box>
                        <Typography mt={1}>Liên hệ với chúng tôi để được tư vấn thêm</Typography>
                        <Box textAlign="center"><img style={{ width: "80%", marginTop: "10px" }} src="https://nongsandungha.com/wp-content/uploads/2022/07/qr-code-zalo.jpg"></img></Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default ChickenDetail