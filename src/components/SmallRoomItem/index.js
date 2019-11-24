/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Box, Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Swiper from 'react-id-swiper';
import { Link } from '@reach/router';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import smallRoom from '../../assets/small_room.jpg';
import 'swiper/css/swiper.css';
import './style.css';

function SmallRoomItem(props) {
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    height: 300,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <div container className="container-room-item">
      <div className="container-img">
        <Swiper {...params} style={{ width: '100%', height: '100%' }}>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
            <div className="container-top">
              <div className="province">Đồng nai</div>
              {props.sale && (
                <div className="sale">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon
                      style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                    />
                    <div>35%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
            <div className="container-top">
              <div className="province">Đồng nai</div>
              {props.sale && (
                <div className="sale">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon
                      style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                    />
                    <div>35%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
            <div className="container-top">
              <div className="province">Đồng nai</div>
              {props.sale && (
                <div className="sale">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon
                      style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                    />
                    <div>35%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
            <div className="container-top">
              <div className="province">Đồng nai</div>
              {props.sale && (
                <div className="sale">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon
                      style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                    />
                    <div>35%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
            <div className="container-top">
              <div className="province">Đồng nai</div>
              {props.sale && (
                <div className="sale">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon
                      style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                    />
                    <div>35%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%' }} alt="img" />
            <div className="container-top">
              <div className="province">Đồng nai</div>
              {props.sale && (
                <div className="sale">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon
                      style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                    />
                    <div>35%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
            <div className="container-top">
              <div className="province">Đồng nai</div>
              {props.sale && (
                <div className="sale">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon
                      style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                    />
                    <div>35%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Swiper>
      </div>
      <div style={{ marginTop: '10px', padding: '0 10px' }}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Box className="price" fontSize={18}>
            <Box display="inline" color="#9708CC">
              $
            </Box>
            1.5tr/đêm
          </Box>
          <Box style={{ fontSize: '14px' }}>
            <div style={{ display: 'flex' }}>
              <StarIcon style={{ color: '#9708CC', fontSize: '18px' }} />
              <p>4.95</p>
            </div>
          </Box>
        </Grid>
        <div style={{ display: 'flex', fontSize: '14px' }}>
          <PersonIcon style={{ color: '#9708CC', fontSize: '20px' }} />
          <Box>3 người - 1 phòng - 1 dòng</Box>
        </div>
        <Box fontWeight="fontWeightBold" fontSize={18} style={{ lineHeight: '25px' }}>
          <Link to="/" style={{ color: 'rgba(43, 43, 43, 0.8)' }}>
            PVL service apartment near Thảo Điền - Sunshine With Bacony - 301
          </Link>
        </Box>
      </div>
    </div>
  );
}

export default SmallRoomItem;
