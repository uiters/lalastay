/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import { InputSearchForCompare, withLayout } from 'components';
import Swiper from 'react-id-swiper';
import { Box, Container, Grid } from '@material-ui/core';
import { navigate } from '@reach/router';
import WifiIcon from '@material-ui/icons/Wifi';
import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
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
import garden from '../../assets/garden.png';
import parking from '../../assets/parking.png';

import './style.css';

function CompareHomestaty() {
  const [gallerySwiper, setGallerySwiper] = useState(null);
  const [thumbnailSwiper, setThumbnailSwiper] = useState(null);
  const [_gallerySwiper, setGallerySwiper_] = useState(null);
  const [_thumbnailSwiper, setThumbnailSwiper_] = useState(null);
  const [close, setClose] = useState(false);

  const gallerySwiperParams = {
    getSwiper: setGallerySwiper,
    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const thumbnailSwiperParams = {
    getSwiper: setThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

  useEffect(() => {
    if (gallerySwiper !== null && thumbnailSwiper !== null) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const seGallerySwiperParams = {
    getSwiper: setGallerySwiper_,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const seThumbnailSwiperParams = {
    getSwiper: setThumbnailSwiper_,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

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

  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);
  const chooseHome = () => {
    setClose(false);
  };

  const closeHome = () => {
    setClose(true);
  };

  return (
    <Container>
      <div style={{ height: '100px' }} />
      <Box fontSize={32} fontWeight="bold">
        So sánh homestay
      </Box>
      <InputSearchForCompare choose={chooseHome} />

      {/* slide so sánh hai home stay */}
      <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
        <Grid item md={1} />
        <Grid item md={4}>
          <div className="container-show-image">
            <Swiper {...gallerySwiperParams}>
              <div className="swiper-slide ">
                <img style={{ width: '100%', height: '100%' }} src={ss1} alt="img" />
              </div>
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
            <div className="container-thum">
              <Swiper {...thumbnailSwiperParams}>
                <img className="slide-under swiper-slide swiper-slide-active" src={ss1} alt="img" />

                <img className="slide-under swiper-slide" src={ss2} alt="img" />

                <img className="slide-under swiper-slide" src={ss3} alt="img" />

                <img className="slide-under swiper-slide" src={ss4} alt="img" />

                <img className="slide-under swiper-slide" src={ss5} alt="img" />
              </Swiper>
            </div>
          </div>
          <Box fontSize={26} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
            Tuấn Vũ Homestay Đà Lạt - Double Doraemon Room 2
          </Box>
          <Box fontSize={20}>
            <i>Đà Lạt, Lâm Đồng Việt Nam</i>
          </Box>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button
              className="variant-button"
              type="button"
              onClick={() => navigate('/home-detail')}
            >
              CHI TIẾT {'>>'}
            </button>
          </div>
        </Grid>
        <Grid item md={2} />
        <Grid item md={4}>
          {!close && (
            <div className="container-show-image">
              <Swiper {...seGallerySwiperParams}>
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss6} alt="img" />
                </div>
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
              <div className="container-thum">
                <Swiper {...seThumbnailSwiperParams}>
                  <img className="slide-under swiper-slide" src={ss6} alt="img" />

                  <img className="slide-under swiper-slide" src={ss7} alt="img" />

                  <img className="slide-under swiper-slide" src={ss8} alt="img" />

                  <img className="slide-under swiper-slide" src={ss9} alt="img" />

                  <img className="slide-under swiper-slide" src={ss10} alt="img" />
                  <img className="slide-under swiper-slide" src={ss6} alt="img" />

                  <img className="slide-under swiper-slide" src={ss7} alt="img" />

                  <img className="slide-under swiper-slide" src={ss8} alt="img" />

                  <img className="slide-under swiper-slide" src={ss9} alt="img" />

                  <img className="slide-under swiper-slide" src={ss10} alt="img" />
                </Swiper>
              </div>
              <Box fontSize={26} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
                Tuấn Vũ Homestay Đà Lạt - Double Doraemon Room 2
              </Box>
              <Box fontSize={20}>
                <i>Đà Lạt, Lâm Đồng Việt Nam</i>
              </Box>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button
                  className="variant-button"
                  type="button"
                  onClick={() => navigate('/home-detail')}
                >
                  CHI TIẾT {'>>'}
                </button>
              </div>
            </div>
          )}
        </Grid>
        <Grid item md={1} />
      </Grid>
      <div className="content-compare">
        <Grid container style={{ padding: '15px 0' }}>
          <Grid item xs={4}>
            <Box>
              <Box display="inline">
                <StarIcon style={{ color: '#9708CC', fontSize: '16px' }} />
              </Box>
              <Box display="inline">4.95</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
              Đánh giá
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Box display="inline">
                <StarIcon style={{ color: '#9708CC', fontSize: '16px' }} />
              </Box>
              <Box display="inline">4.95</Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            backgroundColor: 'rgba(150, 150, 150, 0.05)',
            padding: '15px 0',
          }}
        >
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Grid container direction="column" justify="flex-start">
                  <Box>
                    <WifiIcon style={{ color: '#9708CC' }} />
                  </Box>
                  <Box>
                    <HomeIcon style={{ color: '#9708CC' }} />
                  </Box>
                  <Box>
                    <img alt="img" src={parking} />
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                  <Box>Wifi miễn phí</Box>
                  <Box>Có sân vườn</Box>
                  <Box marginBottom={1}>Có chỗ đậu xe</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
                Tiện nghi
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4}>
                <Grid container direction="column" justify="flex-start">
                  <Box>
                    <WifiIcon style={{ color: '#9708CC' }} />
                  </Box>
                  <Box>
                    <HomeIcon style={{ color: '#9708CC' }} />
                  </Box>

                  <Box>
                    <img alt="img" src={parking} />
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                  <Box>Wifi miễn phí</Box>
                  <Box>Có sân vườn</Box>
                  <Box marginBottom={1}>Có chỗ đậu xe</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container style={{ padding: '15px 0' }}>
          <Grid item xs={4}>
            <Box marginRight={3}>
              <Box>2,345,000 VNĐ/ngày</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
                Giá
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Box>2,345,000 VNĐ/ngày</Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            backgroundColor: 'rgba(150, 150, 150, 0.05)',
            padding: '15px 0',
          }}
        >
          <Grid item xs={4}>
            <Box>
              <Box> 3 người</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
              Số khách
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Box>4 người</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container style={{ padding: '15px 0' }}>
          <Grid item xs={4}>
            <Box marginRight={3}>
              <Box>Nhà riêng</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
              Loại homestay
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box marginLeft={3}>
              <Box>Khách sạn</Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            backgroundColor: 'rgba(150, 150, 150, 0.05)',
            padding: '15px 0',
          }}
        >
          <Grid item xs={4}>
            {' '}
            <Box marginRight={3}>
              <Box>2 km</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
              Khoảng cách từ bạn
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box marginLeft={3}>
              <Box> 3 km</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container style={{ padding: '15px 0' }}>
          <Grid item xs={4}>
            <Box marginRight={3}>
              <Box>Thung lũng tình yêu, Quảng trường, chợ đêm</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
              Gần với
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box marginLeft={3}>
              <Box>Cáp treo, Sân bay, núi langbian, Thác Preen</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            backgroundColor: 'rgba(150, 150, 150, 0.05)',
            padding: '15px 0',
          }}
        >
          <Grid item xs={4}>
            <Box marginRight={3}>
              Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
              Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homesta
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <Box fontSize={20} style={{ color: '#2B2B2B', fontWeight: 'bold' }}>
                Quy định
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box marginLeft={3}>
              Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
              Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
            </Box>
          </Grid>
        </Grid>
        <Grid container style={{ margin: '20px 0' }}>
          <Grid item xs={4}>
            <button
              className="variant-button datcho"
              type="button"
              onClick={() => navigate('/payment')}
            >
              ĐẶT NGAY
            </button>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <button
              className="variant-button datcho"
              type="button"
              onClick={() => navigate('/payment')}
            >
              ĐẶT NGAY
            </button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default withLayout(CompareHomestaty);
