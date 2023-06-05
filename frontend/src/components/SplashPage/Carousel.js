import React, { useEffect, useState } from "react";
import './Carousel.css';

const Carousel = () => {
    const images = [
        "https://img.freepik.com/free-photo/coffee-mugs-light-beige-textured-wallpaper_53876-167206.jpg?w=2000",
        "https://wallpaperaccess.com/full/7157545.jpg",
        "https://papers.co/wallpaper/papers.co-mv01-heart-coffee-cappuccino-cup-light-table-29-wallpaper.jpg"
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
        }, 4500)
        
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