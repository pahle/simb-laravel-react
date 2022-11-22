import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CImage, CCarouselItem } from '@coreui/react';


const CarouselMitigasi = () => {
    return (
        <CCarousel controls className="max-w-[300px] rounded-[15px] overflow-hidden ">
            <CCarouselItem>
                <CImage className="d-block" width="300px" src="/assets/images/CarouselMitigasi/Bencana1.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block" width="300px" src="/assets/images/CarouselMitigasi/Bencana2.jpeg" alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block" width="300px" src="/assets/images/CarouselMitigasi/Bencana3.jpeg" alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    );
}

export default CarouselMitigasi;