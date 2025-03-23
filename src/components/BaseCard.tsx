import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { BASE_COLORS } from '~/utils/constants/common';
import { routerAbsolute } from '~/utils/constants/route';
import { formatVND } from '~/utils/helpers';

type CartProps = {
    image?: string;
    name?: string;
    priceFrom?: number
    priceTo?: number
}

const BaseCard = (props: CartProps) => {
    const nav = useNavigate();
    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{
                    height: {
                        xs: "120px",
                        md: "170px",
                        lg: "200px"
                    }
                }}
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    fontSize: {
                        lg: "20px",
                        md: "16px",
                        xs: "14px"
                    }
                }}>
                    {props.name}
                </Typography>
                <Typography variant="h6" sx={{
                    color: 'red', fontWeight: "bold", fontSize: {
                        lg: "16px",
                        md: "14px",
                        xs: "12px"
                    }
                }}>
                    {formatVND(props.priceFrom ?? 0)} {props.priceTo && `- ${formatVND(props.priceTo ?? 0)}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ color: BASE_COLORS.BLUE }} onClick={() => {
                    nav(`${routerAbsolute.productDetail}/ga-giong-lai-ho-mao-ga`)
                }}>Xem chi tiết</Button>
            </CardActions>
        </Card>
    )
}

export default BaseCard