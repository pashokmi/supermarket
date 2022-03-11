import React from 'react'
import Slider from 'react-slick'
import Box from 'src/ui/Box'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import { sliderContent } from 'src/components/Constats'

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <Box pt={45} mx={'auto'}>
      <Slider {...settings}>
        {sliderContent.map((items) => (
          <Box color={'red'} key={items.alt}>
            <Image
              src={items.image}
              alt={items.alt}
              width={1200}
              height={350}
              objectFit="contain"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

HomeSlider.propTypes = {}

export default HomeSlider
