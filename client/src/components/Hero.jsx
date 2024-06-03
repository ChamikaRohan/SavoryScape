import React from 'react';
import Carousel from "react-carousel-mui";
import theme from "./HeroParts/theme.js";
import CustomCard from "./CustomCard.jsx";
import HeroBanner1 from "../assets/HeroBanner1.jpeg";
import HeroBanner2 from "../assets/HeroBanner2.jpeg";
import HeroBanner3 from "../assets/HeroBanner3.jpeg";
import HeroBanner4 from "../assets/HeroBanner4.jpeg";
import HeroBanner5 from "../assets/HeroBanner5.jpeg";
import { Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

export default function CarouselWithText() {
    const srcList = [HeroBanner1, HeroBanner2, HeroBanner3, HeroBanner4, HeroBanner5];

    return (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Additional content on top */}
            <Typography variant="p" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 1, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: "20px" , marginLeft:"20px",marginRight:"20px", fontFamily: "Poppins Medium"}}>
                <TypeAnimation
                sequence={[
                'Discover the culinary wonders within our archives',
                1000, 
                'Discover the secrets to exquisite homemade dishes',
                1000,
                'Discover the joy of cooking with us',
                1000,]}
                wrapper="span" speed={50} style={{ fontSize: '2em', display: 'inline-block' }} repeat={Infinity}/>
            </Typography>

            {/* Carousel */}
            <Carousel 
                items={srcList}
                itemsPerPage={{
                    xs: 1,
                    sm: 1,
                    tablet: 1,
                    md: 1,
                    lg: 1,
                    xl: 1
                }}
                itemRenderer={(item) => <CustomCard url={item} />}
                maxContainerWidth={theme.breakpoints.values["md"]}
            />
        </div>
    );
}
