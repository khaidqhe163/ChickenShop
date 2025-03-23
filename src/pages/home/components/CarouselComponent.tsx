import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '~/assets/banner/banner1.jpg';
import banner2 from '~/assets/banner/banner2.jpg';
import banner3 from '~/assets/banner/banner3.png';
const CarouselComponent = () => {
    return (
        <Carousel autoPlay={true}
            showThumbs={false}
            transitionTime={2}
            infiniteLoop={true}
        >
            <div>
                <img src={banner1} />
            </div>
            <div>
                <img src={banner2} />
            </div>
            <div>
                <img src={banner3} />
            </div>
        </Carousel>
    )
}

export default CarouselComponent