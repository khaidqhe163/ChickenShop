import { Box, Divider, Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import baobi1 from '~/assets/baobi/baobi1.jpg'
import { BASE_COLORS } from "~/utils/constants/common"
import { CAM_CO } from "~/utils/data/product"
import { formatVND } from "~/utils/helpers"

const CamCo = () => {
    const { id } = useParams();
    const product = CAM_CO.find(item => item.id === id)
    return (
        <Box sx={{
            px: {
                xs: "30px", sm: "50px", md: "100px", lg: "150px", xl: "200px"
            },
            py: 5
        }}>
            <Grid container>
                <Grid item xs={6}>
                    <Box>
                        <img src={baobi1} style={{ width: " 100%" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} px={2}>
                    <Typography variant="h4" fontWeight="bold" color="#333">{product?.name}</Typography>

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
                                <Typography fontWeight="bold" color="#444">Thương hiệu</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="#666">{product?.brand}</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>

                            {/* Trọng lượng */}
                            <Grid item xs={4}>
                                <Typography fontWeight="bold" color="#444">Thành phần chính</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="#666">Khô đậu lành, Ngô, Cám gạo, Các Acid amin, Vitamin và khoáng chất. Bổ sung các chủng Probiotics nguồn gốc Châu Âu. Không sử dụng các chất cấm</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>
                            <Grid item xs={4}>
                                <Typography fontWeight="bold" color="#444">Hướng dẫn sử dụng</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="#666">{product?.guild}</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider /></Grid>
                            <Grid item xs={4}>
                                <Typography fontWeight="bold" color="#444">Hạn sử dụng</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="#666">{product?.expiredDate}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CamCo