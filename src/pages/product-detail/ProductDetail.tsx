import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import CamCo from "./components/CamCo"
import ChickenDetail from "./components/ChickenDetail"
const ProductDetail = () => {
    const { id } = useParams();
    return (
        <Box>
            {
                id?.includes('ga-giong-lai-ho-mao-ga') && (
                    <ChickenDetail />
                )
            }
            {
                id?.includes('cam') && (
                    <CamCo />
                )
            }
        </Box>
    )
}

export default ProductDetail