import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const Slider = ({ images }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40

  const [photoIndex, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ padding: `0 ${chevronWidth}` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCard={2}
        infiniteLoop
        gutter={20}
        leftChevron={<ArrowBackIosIcon />}
        rightChevron={<ArrowForwardIosIcon />}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {images.map((img, index) => {
          return <img 
                  key={index}
                  src={img}
                  style={{ "width": "100%", "height": "100%" }}
                  onClick={() => {
                    setIsOpen(true),
                    setIndex(index)
                  }}
                />
        })}

        {isOpen && (
          <Lightbox 
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setIndex((photoIndex + 1) % images.length)}
            clickOutsideToClose={true}
            enableZoom={false}
            imagePadding={100}
          />
        )}
      </ItemsCarousel>
    </div>
  )
}

export default Slider