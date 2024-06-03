import React from 'react'
import Carousel from "react-carousel-mui";
import theme from "../theme.js";
import CustomCard from "../components/CustomCard";

export default function() {
    const srcList = "https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg "
    .repeat(10)
    .split(" ")
    .slice(0, 10);

  return (
    <div>
        <Carousel
        items={srcList}
        itemsPerPage={{
          xs: 1,
          sm: 1,
          tablet: 2,
          md: 1,
          lg: 1,
          xl: 1
        }}
        itemRenderer={(item) => <CustomCard url={item} />}
        maxContainerWidth={theme.breakpoints.values["md"]}
      />
    </div>
  )
}
