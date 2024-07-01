import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselWrapper = styled.div`
  width: 100%; /* Độ rộng của carousel */
  margin: 0 auto; /* Canh giữa carousel */
  margin-top: 100px;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: 10px; /* Điều chỉnh vị trí nút điều hướng */
  }

  .slick-dots li button:before {
    color: #49557e; /* Màu của nút điều hướng */
  }

  .slick-slide {
    background: none; /* Loại bỏ background mặc định của slide */
    width: 100%; /* Độ rộng tự động */
  }

  .slick-slide > div {
    height: 500px; /* Chiều cao của div chứa ảnh */
    max-height: 1000px; /* Giới hạn chiều cao tối đa */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-slide img {
    width: auto;
    max-width: 100%; /* Đảm bảo ảnh không vượt quá chiều rộng của slide */
    max-height: 100%; /* Đảm bảo ảnh không vượt quá chiều cao của div */
    object-fit: contain; /* Đảm bảo ảnh hiển thị đầy đủ */
    margin: 0 auto; /* Canh giữa ảnh */
  }
`;

function CompactCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <CarouselWrapper>
      <StyledSlider {...settings}>
        <div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0642/0561/9418/files/diamond-price-guide-one-carat.jpg"
              alt="Image 1"
            />
          </div>
        </div>

        <div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0445/3027/0372/files/shutterstock_1054734593.jpg?v=1672308430"
              alt="Image 3"
            />
          </div>
        </div>
      </StyledSlider>
    </CarouselWrapper>
  );
}

export default CompactCarousel;
