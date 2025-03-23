import { Box, Stack, Typography } from "@mui/material"
import chicken from '~/assets/chicken/ga.png'
const AboutMe = () => {
    return (
        <Stack
        sx={{
          px: { xs: "20px", sm: "40px", md: "80px", lg: "120px", xl: "160px" },
          py: 5,
          gap: 4,
          alignItems: "center"
        }}
        direction={{ xs: "column", md: "row" }}
      >
        <Box
          sx={{
            width: { xs: "80%", md: "40%" },
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              width: "100%",
              maxWidth: "300px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
            }}
            src="https://cdnphoto.dantri.com.vn/U8ZvGZi2GU3MXTzAepeQdIxaAts=/thumb_w/680/2024/01/31/ga-trong-dep-1706686806285.jpg"
            alt="Gà giống"
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#3c4ff4" }}>
            Giới thiệu về Công ty Cổ phần Đầu tư và Phát triển Sông Cầu
          </Typography>
          <Typography mt={2} sx={{ textAlign: "justify", lineHeight: 1.8 }}>
            Công ty Cổ phần Đầu tư và Phát triển Sông Cầu được thành lập vào năm 2014, được đăng ký kinh doanh lần đầu với hai lĩnh vực chính là sản xuất con giống gia cầm và kinh doanh thức ăn chăn nuôi.
          </Typography>
          <Typography mt={2} sx={{ textAlign: "justify", lineHeight: 1.8 }}>
            Thời điểm đầu công ty sản xuất con giống gà ta lai và lai chọi, sau nhiều năm tìm hiểu và phát triển. Năm 2020, ông Nguyễn Văn Uy, Chủ tịch HĐQT quyết định ra mắt và phát triển giống gà Lai Hồ với tiêu chí chất lượng đặt lên hàng đầu. Gà Lai Hồ nhanh chóng được thị trường đón nhận tích cực.
          </Typography>
          <Typography mt={2} sx={{ textAlign: "justify", lineHeight: 1.8 }}>
            Đến năm 2023, Ban quản trị quyết định phát triển thêm mảng sản xuất thức ăn chăn nuôi nhằm phục vụ bà con trong phát triển nông nghiệp.
          </Typography>
          <Typography mt={2} sx={{ textAlign: "justify", lineHeight: 1.8 }}>
            Hiện nay công ty đang thực hiện sứ mệnh vươn lên để trở thành một trong những thương hiệu uy tín tại Việt Nam về mảng sản xuất con giống và sản xuất thức ăn chăn nuôi.
          </Typography>
        </Box>
      </Stack>
    )
}

export default AboutMe