import React, { useState, useEffect } from 'react';
import './style.css';

import { SmallRoomItem } from 'components';
import Swiper from 'react-id-swiper';
import { Table, TableBody, TableCell, TableHead, TableRow, Container } from '@material-ui/core';

function CompareHomestaty() {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);
  return (
    <>
      <div style={{ height: '100px' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SmallRoomItem sale />
        <SmallRoomItem sale={false} />
      </div>
      <Container>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '200px' }}>Tên homestay</TableCell>
              <TableCell>Homestaty gâu đần</TableCell>
              <TableCell>Biệt thự ngoi nhà ma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Đánh giá</TableCell>
              <TableCell>Homestaty gâu đần</TableCell>
              <TableCell>Biệt thự ngoi nhà ma</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Loại homestay</TableCell>
              <TableCell>Nhà riêng</TableCell>
              <TableCell>Phòng riêng</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Chi phí</TableCell>
              <TableCell>2,340,000VNĐ/ ngày</TableCell>
              <TableCell>2,340,000VNĐ/ ngày</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Số khách tối đa</TableCell>
              <TableCell>3 người</TableCell>
              <TableCell>2 người</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Quy định</TableCell>
              <TableCell>
                Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
                Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
              </TableCell>
              <TableCell>
                Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
                Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Đà lạt, Lâm Đồng, Việt Nam</TableCell>
              <TableCell>Bảo Lộc, Lâm Đồng, Việt Nam</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
      <div>
        <Swiper {...gallerySwiperParams}>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/1)',
              height: '300px',
              width: '100%',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/2)',
              height: '300px',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/3)',
              height: '300px',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/4)',
              height: '300px',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/5)',
              height: '300px',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
            }}
          />
        </Swiper>
        <Swiper {...thumbnailSwiperParams}>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/1)',
              height: '100px',
              width: '20%',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/2)',
              height: '100px',
              width: '20%',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/3',
              height: '100px',
              width: '20%',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/4)',
              height: '100px',
              width: '20%',
            }}
          />
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(http://lorempixel.com/600/600/nature/5)',
              height: '100px',
              width: '20%',
            }}
          />
        </Swiper>
      </div>
    </>
  );
}

export default CompareHomestaty;
