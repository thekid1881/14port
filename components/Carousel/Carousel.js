'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import styles from "./Carousel.module.css";
import { slidesData } from "../ServiceMenu";

export default function Carousel() {
    const swiperRef = useRef(null);

    const handleSwiperInit = useCallback((swiper) => {
        swiperRef.current = swiper;
    }, []);

    const handleMouseEnter = () => swiperRef.current?.autoplay?.stop();
    const handleMouseLeave = () => swiperRef.current?.autoplay?.start();

    return (
        <div
            className="max-w-3xl mx-auto backdrop-blur-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                onSwiper={handleSwiperInit}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                spaceBetween={30}
                slidesPerView={1}
                className="rounded-lg overflow-hidden"
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index} className="{styles.slide}">
                        <div className={styles.imageWrapper}>
                            <h2 className={styles.caption}>{slide.caption}</h2>
                            <ul className={styles.detail}>
                                {slide.detail.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}