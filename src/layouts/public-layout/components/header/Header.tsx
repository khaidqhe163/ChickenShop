import { Search } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, Menu, MenuItem, OutlinedInput, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '~/assets/logo.jpg';
import { setBrandValue } from "~/features/BrandSlice";
import { BASE_COLORS } from "~/utils/constants/common";
import { routerAbsolute } from "~/utils/constants/route";
import { BRAND } from "~/utils/data/product";
import styles from './header.module.css';
import MobileMenu from "./MobileMenu";
const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const open = Boolean(anchorEl);
    const nav = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const dispatch = useDispatch();
    const handleClose = (brand: number) => {
        if (brand === 1) {
            dispatch(setBrandValue('All'))
        } else if (brand === 2) {
            dispatch(setBrandValue(BRAND.SONG_CAU))
        } else if (brand === 3) {
            dispatch(setBrandValue(BRAND.SC_FEED))
        }
        setAnchorEl(null);
        console.log(routerAbsolute.productList);
        nav(`${routerAbsolute.productList}`)
    };

    return (
        <Box>
            <Typography sx={{
                bgcolor: BASE_COLORS.BLUE,
                textAlign: "center",
                color: "white",
                height: "30px",
                fontSize: "18px",
                p: "5px",
                boxSizing: "border-box",
                fontWeight: "bold"
            }}><i>Hotline: 0923.480.349</i></Typography>
            <Stack direction='row' sx={{
                height: "100px", py: "10px",
                boxSizing: "border-box",
                px: {
                    md: "100px",
                    xs: "20px"
                },
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
            }}>
                <Stack direction="row" height="100%" alignItems="center" gap={2} >
                    <img src={logo} alt="error-logo" style={{ height: "80%" }}></img>
                    <Typography sx={{
                        fontFamily: "Merriweather, serif",
                        fontWeight: "900",
                        fontStyle: "italic",
                        fontSize: {
                            md: "40px",
                            xs: "30px"
                        }
                    }}>Sông Cầu JSC</Typography>
                </Stack>
                <FormControl sx={{
                    width: "300px", display: {
                        md: "block",
                        xs: "none"
                    },
                }} variant="outlined" >
                    <InputLabel htmlFor="search"
                        size="small"
                        sx={{
                            "&.Mui-focused": {
                                color: BASE_COLORS.BLUE, // Màu label khi focus
                            },
                        }}>Tìm kiếm</InputLabel>
                    <OutlinedInput
                        id="search"
                        size="small"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Tìm kiếm"
                        sx={{
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: BASE_COLORS.BLUE,
                            },
                            borderRadius: "50px"
                        }}
                    />
                </FormControl>
                <Box sx={{
                    border: `2px solid ${BASE_COLORS.BLUE}`, height: "60%", width: "200px",
                    borderRadius: "50px",
                    textAlign: "center",
                    padding: "10px",
                    boxSizing: "border-box",
                    display: {
                        md: "block",
                        xs: "none"
                    },
                    ":hover": {
                        bgcolor: BASE_COLORS.BLUE,
                        cursor: "pointer",
                        ".hotline": {
                            color: "white"
                        }
                    }
                }}>
                    <Typography className="hotline" sx={{ fontWeight: "bold", color: BASE_COLORS.BLUE }}>0923.480.349</Typography>
                </Box>
                <IconButton sx={{
                    display: {
                        md: "none",
                        xs: "block"
                    }
                }} onClick={() => setOpenMobileMenu(true)}><MenuIcon /></IconButton>
            </Stack>
            <Stack direction='row' sx={{
                height: "50px",
                bgcolor: "#f4f4f4",
                boxSizing: "border-box",
                px: "100px",
                justifyContent: "center",
                alignItems: "center",
                display: {
                    md: "flex",
                    xs: "none"
                }
            }}>
                <Box className={styles['nav-item']} onClick={() => {
                    nav(`/`)
                }}>
                    <Typography>Trang Chủ</Typography>
                </Box>
                <Stack direction='row' gap={1} className={styles['nav-item']} onClick={() => {
                    nav(`${routerAbsolute.productDetail}/ga-giong-lai-ho-mao-ga`)
                }}>
                    <Typography>Gà Giống Lai Hồ Mào Cờ</Typography>
                </Stack>
                <Stack direction='row' gap={1} className={styles['nav-item']}
                    onClick={handleClick}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}>
                    <Typography>Thức Ăn Chăn Nuôi</Typography>
                    <ExpandMoreIcon />
                </Stack>
                <Stack direction='row' gap={1} className={styles['nav-item']} onClick={() => {
                    nav(`/gioi-thieu`)
                }}>
                    <Typography>Giới thiệu</Typography>
                </Stack>
            </Stack>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                    setAnchorEl(null);
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {
                    handleClose(1)
                }}>Tất Cả</MenuItem>
                <MenuItem onClick={() => {
                    handleClose(2)
                }}>Thương hiệu Sông Cầu</MenuItem>
                <MenuItem onClick={() => {
                    handleClose(3)
                }}>Thương hiệu SC Feed</MenuItem>
            </Menu>
            <MobileMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />
        </Box >
    )
}

export default Header