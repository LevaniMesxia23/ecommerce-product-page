// import React from "react";
// import styled from "styled-components";
// import Product1 from "../../public/images/image-product-1.jpg";

// export default function MainImages() {
//   return (
//     <>
//       <Container>
//         <div>
//           <img src={Product1} alt="" />

          
//         </div>
//       </Container>
//     </>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;

//   div {
//     position: relative;

//     img {
//       width: 100%;
//       min-width: 21.4375rem;
//       height: 18.75rem;
//       flex-shrink: 0;
//     }
    
//   }
// `;






import Product1 from "../../public/images/image-product-1.jpg";
import Product2 from "../../public/images/image-product-2.jpg";
import Product3 from "../../public/images/image-product-3.jpg";
import Product4 from "../../public/images/image-product-4.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Product1} alt="Product1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Product2} alt="Product2" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Product3} alt="Product3" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Product4} alt="Product4" />
        </SwiperSlide>

        {/* <svg
            className="left"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M22.8572 14.2857L17.1429 20L22.8572 25.7143"
              stroke="#1D2026"
              stroke-width="3"
            />
          </svg>

          <svg
            className="rigth"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M17.1428 14.2857L22.8571 20L17.1428 25.7143"
              stroke="#1D2026"
              stroke-width="3"
            />
          </svg> */}
      </Swiper>
    </>
  );
}
