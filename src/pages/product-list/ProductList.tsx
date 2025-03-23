import { Box, Grid, Stack, Typography } from "@mui/material"
import camImg from '~/assets/baobi/baobi1.jpg'
import BaseCardCamCo from "~/components/BaseCardCamCo"
import { BASE_COLORS } from "~/utils/constants/common"
import { BRAND, CAM_CO, CAM_GA, CAM_NGAN } from "~/utils/data/product"
import styles from './productlist.module.css'
import BaseCard from "~/components/BaseCard"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from '../../app/store'
const categoryStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    textDecoration: "underline",
    mt: "20px"
}

const CATEGORY = {
    GA: "GA",
    CAM_LON: "CAM_LON",
    CAM_GA: "CAM_GA",
    CAM_VIT: "CAM_VIT",
}
type product = {
    id: string;
    name: string;
    brand: string;
    weight: number;
    tccs: string;
    mscam: string;
    image: Array<string>,
    guild: string;
    expiredDate: string;
}
const ProductList = () => {
    const [filter, setFilter] = useState<{ brand: string; category: string }>({ brand: "All", category: "All" })
    const brandState = useSelector((state: RootState) => state.brand);
    const [camGa, setCamGa] = useState<product[]>(CAM_GA);
    const [camLon, setCamLon] = useState<product[]>(CAM_CO);
    const [camNgan, setCamNgan] = useState<product[]>(CAM_NGAN);

    useEffect(() => {
        if (brandState.value !== "All") {
            setCamGa(CAM_GA.filter((item) => {
                return item.brand === brandState.value;
            }));
            setCamNgan(CAM_NGAN.filter((item) => {
                return item.brand === brandState.value;
            }));
            setCamLon(CAM_CO.filter((item) => {
                return item.brand === brandState.value;
            }));
        } else {
            setCamGa(CAM_GA);
            setCamLon(CAM_CO);
            setCamNgan(CAM_NGAN);
        }
        // if (filter.brand !== "All") {
        //     setCamGa(CAM_GA.filter((item) => {
        //         return item.brand === filter.brand;
        //     }));
        //     setCamNgan(CAM_NGAN.filter((item) => {
        //         return item.brand === filter.brand;
        //     }));
        //     setCamLon(CAM_CO.filter((item) => {
        //         return item.brand === filter.brand;
        //     }));
        // } else {
        //     setCamGa(CAM_GA);
        //     setCamLon(CAM_CO);
        //     setCamNgan(CAM_NGAN);
        // }
    }, [brandState.value])
    return (
        <Stack direction='row' px="150px" gap={2}>
            <Box mt={3}>
                <Box sx={{
                    width: "250px", borderRadius: "5px",
                    border: `1px solid ${BASE_COLORS.BLUE}`,
                    borderTop: `5px solid ${BASE_COLORS.BLUE}`,
                    px: "15px",
                    py: "10px"
                }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>THƯƠNG HIỆU</Typography>
                    <Box sx={{ height: "4px", width: "40px", bgcolor: BASE_COLORS.BLUE, mt: 1 }}>
                    </Box>
                    <Box className={`${styles["filter-item"]} ${filter.brand === "All" ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, brand: "All" })
                    }}>
                        <Typography>Tất Cả</Typography>
                    </Box>
                    <Box className={`${styles["filter-item"]} ${filter.brand === BRAND.SONG_CAU ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, brand: BRAND.SONG_CAU })
                    }}>
                        <Typography>Sông Cầu</Typography>
                    </Box>
                    <Box mt={1} sx={{ cursor: "pointer" }} className={`${filter.brand === BRAND.SC_FEED ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, brand: BRAND.SC_FEED })
                    }}>
                        <Typography>SC Feed</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    width: "250px", borderRadius: "5px",
                    border: `1px solid ${BASE_COLORS.BLUE}`,
                    borderTop: `5px solid ${BASE_COLORS.BLUE}`,
                    px: "15px",
                    py: "10px",
                    mt: 5
                }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>DANH MỤC SẢN PHẨM</Typography>
                    <Box sx={{ height: "4px", width: "40px", bgcolor: BASE_COLORS.BLUE, mt: 1 }}>
                    </Box>
                    <Box className={`${styles["filter-item"]} ${filter.category === "All" ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, category: "All" })
                    }}>
                        <Typography>Tất Cả</Typography>
                    </Box>
                    <Box className={`${styles["filter-item"]} ${filter.category === CATEGORY.GA ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, category: CATEGORY.GA })
                    }}>
                        <Typography>Gà</Typography>
                    </Box>
                    <Box className={`${styles["filter-item"]} ${filter.category === CATEGORY.CAM_GA ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, category: CATEGORY.CAM_GA })
                    }}>
                        <Typography>Cám Gà</Typography>
                    </Box>
                    <Box className={`${styles["filter-item"]} ${filter.category === CATEGORY.CAM_VIT ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, category: CATEGORY.CAM_VIT })
                    }}>
                        <Typography>Cám Vịt</Typography>
                    </Box>
                    <Box mt={1} sx={{ cursor: "pointer" }} className={`${filter.category === CATEGORY.CAM_LON ? styles["active-item"] : ""}`} onClick={() => {
                        setFilter({ ...filter, category: CATEGORY.CAM_LON })
                    }}>
                        <Typography>Cám Lợn</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: "calc(100% - 250px)" }}>
                {
                    (filter.category === CATEGORY.GA || filter.category === "All") && (
                        <>
                            <Typography sx={categoryStyle}>Gà Giống Lai Hồ Mào Cờ</Typography>
                            <Grid container>
                                <Grid item xs={3} p={1}>
                                    <BaseCard
                                        image={camImg}
                                        name="Gà Giống Lai Hồ Mào Cờ"
                                        priceFrom={120000}
                                    />
                                </Grid>
                            </Grid>
                        </>
                    )
                }
                {
                    (filter.category === CATEGORY.CAM_LON || filter.category === "All") && (
                        <>
                            <Typography sx={categoryStyle}>Cám Lợn</Typography>
                            <Grid container>
                                {
                                    camLon.map((item) => {
                                        return (
                                            <Grid item xs={3} p={1} key={item.id}>
                                                <BaseCardCamCo
                                                    image={camImg}
                                                    name={item.name}
                                                    priceFrom={120000}
                                                    tccs={item.tccs}
                                                    weight={item.weight}
                                                    mscam={item.mscam}
                                                    brand={item.brand}
                                                    id={item.id}
                                                />
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </>
                    )
                }
                {
                    (filter.category === CATEGORY.CAM_GA || filter.category === "All") && (
                        <>
                            <Typography sx={categoryStyle}>Cám Gà</Typography>
                            <Grid container>
                                {
                                    camGa.map((item) => {
                                        return (
                                            <Grid item xs={3} p={1} key={item.id}>
                                                <BaseCardCamCo
                                                    image={camImg}
                                                    name={item.name}
                                                    priceFrom={120000}
                                                    tccs={item.tccs}
                                                    weight={item.weight}
                                                    mscam={item.mscam}
                                                    brand={item.brand}
                                                    id={item.id}
                                                />
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </>
                    )
                }

                {
                    (filter.category === CATEGORY.CAM_VIT || filter.category === "All") && (
                        <>
                            <Typography sx={categoryStyle}>Cám Vịt</Typography>
                            <Grid container>
                                {
                                    camNgan.map((item) => {
                                        return (
                                            <Grid item xs={3} p={1} key={item.id}>
                                                <BaseCardCamCo
                                                    image={camImg}
                                                    name={item.name}
                                                    priceFrom={120000}
                                                    tccs={item.tccs}
                                                    weight={item.weight}
                                                    mscam={item.mscam}
                                                    brand={item.brand}
                                                    id={item.id}
                                                />
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </>
                    )
                }
            </Box>
        </Stack>
    )
}

export default ProductList