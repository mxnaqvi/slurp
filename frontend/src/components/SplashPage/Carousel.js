import React, { useEffect, useState } from "react";
import './Carousel.css';

const Carousel = () => {
    const images = [
        "https://wallpaperaccess.com/full/7157523.jpg",
        "https://wallpapers.com/images/hd/bag-and-cup-of-coffee-01pjkia0sox3a71m.jpg",
        "https://w0.peakpx.com/wallpaper/801/916/HD-wallpaper-caffe-latte-on-white-ceramic-cup-beside-silver-and-black-laptop-computer.jpg"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselIndex = () => {
        if (currentIndex === images.length - 1) {
            return setCurrentIndex(0);
        }

        return setCurrentIndex(currentIndex + 1);
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            carouselIndex()
        }, 3000)
        
        return () => clearInterval(interval);
    }, [currentIndex])

    return (

        <div id="carousel-container">
            <div className="carousel-inner" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <div className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                            key={index}>
                            <img src={img} alt={`Slide ${index}`} />
                        </div>
                    ))}
            </div>
      </div>
    )

}

export default Carousel;