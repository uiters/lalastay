import React, { useState, useEffect } from 'react';
import { SmallRoomItem } from 'components';
import Swiper from 'react-id-swiper';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  Grid,
} from '@material-ui/core';
import ss1 from '../../assets/ss1.jpg';
import ss2 from '../../assets/ss2.jpg';
import ss3 from '../../assets/ss3.jpg';
import ss4 from '../../assets/ss4.jpg';
import ss5 from '../../assets/ss5.jpg';
import ss6 from '../../assets/ss6.jpg';
import ss7 from '../../assets/ss7.jpg';
import ss8 from '../../assets/ss8.jpg';
import ss9 from '../../assets/ss9.jpg';
import ss10 from '../../assets/ss10.jpg';
import './style.css';

function CompareHomestaty() {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [_gallerySwiper, _getGallerySwiper] = useState(null);
  const [_thumbnailSwiper, _getThumbnailSwiper] = useState(null);

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

  const seGallerySwiperParams = {
    getSwiper: _getGallerySwiper,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const seThumbnailSwiperParams = {
    getSwiper: _getThumbnailSwiper,
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

  useEffect(() => {
    if (
      _gallerySwiper !== null &&
      _gallerySwiper.controller &&
      _thumbnailSwiper !== null &&
      _thumbnailSwiper.controller
    ) {
      _gallerySwiper.controller.control = _thumbnailSwiper;
      _thumbnailSwiper.controller.control = _gallerySwiper;
    }
  }, [_gallerySwiper, _thumbnailSwiper]);
  return (
    <Container>
      <div style={{ height: '100px' }} />
      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SmallRoomItem sale />
        <SmallRoomItem sale={false} />
      </div> */}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <div>
                {' '}
                <SmallRoomItem sale />
              </div>
            </TableCell>
            <TableCell>
              <div>
                {' '}
                <SmallRoomItem sale={false} />
              </div>
            </TableCell>
          </TableRow>
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

      <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
        <Grid item md={6}>
          <div className="container-show-image">
            <Swiper {...gallerySwiperParams}>
              <div className="swiper-slide" />
              <img style={{ width: '100%', height: '100%' }} src={ss1} alt="img" />
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss2} alt="img" />
              </div>
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss3} alt="img" />
              </div>
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss4} alt="img" />
              </div>
              <div>
                <img style={{ width: '100%', height: '100%' }} src={ss5} alt="img" />
              </div>
            </Swiper>
            <Swiper {...thumbnailSwiperParams}>
              <img className="slide-under swiper-slide" src={ss1} alt="img" />

              <img className="slide-under swiper-slide" src={ss2} alt="img" />

              <img className="slide-under swiper-slide" src={ss3} alt="img" />

              <img className="slide-under swiper-slide" src={ss4} alt="img" />

              <img className="slide-under swiper-slide" src={ss5} alt="img" />
            </Swiper>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="container-show-image">
            <Swiper {...seGallerySwiperParams}>
              <div className="swiper-slide" />
              <img style={{ width: '100%', height: '100%' }} src={ss6} alt="img" />
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss7} alt="img" />
              </div>
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss8} alt="img" />
              </div>
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss9} alt="img" />
              </div>
              <div>
                <img style={{ width: '100%', height: '100%' }} src={ss10} alt="img" />
              </div>
            </Swiper>
            <Swiper {...seThumbnailSwiperParams}>
              <img className="slide-under swiper-slide" src={ss6} alt="img" />

              <img className="slide-under swiper-slide" src={ss7} alt="img" />

              <img className="slide-under swiper-slide" src={ss8} alt="img" />

              <img className="slide-under swiper-slide" src={ss9} alt="img" />

              <img className="slide-under swiper-slide" src={ss10} alt="img" />
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CompareHomestaty;
