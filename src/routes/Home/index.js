/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CityViewer, RoomViewer, withLayout, Footer } from 'components';
import { Container } from '@material-ui/core';
import showcaseImage from 'assets/vietnam.png';
import './style.css';
import { navigate } from '@reach/router';

function Home() {
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <div>
      {matches && (
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="background-overlay" />
          <img className="showcase-image" alt="vietnam" src={showcaseImage} />
          <div className="showcase-button-container">
            <p style={{ color: '#fff', fontSize: '20px' }}>Hà Giang - Mùa hoa tam giác mạch</p>
            <div className="showcase-button">
              <div>Khám phá ngay</div>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      )}
      <div className="img-introduce">
        <div className="title-introduce">
          <div>Đà Lạt đang chờ bạn khám phá, còn chờ đợi gì nữa?</div>
          <div className="button-xemngay">
            <button
              type="button"
              className="variant-button"
              onClick={() => {
                console.log('akaka');
                navigate('/home-by-area');
              }}
            >
              XEM NGAY {'>'}
            </button>
          </div>
        </div>
      </div>
      <Container style={{ marginTop: '40px' }}>
        <CityViewer
          tilte="Địa điểm nổi bật hôm nay"
          sologen="Đây là những địa điểm nổi bật nhất Lalastay"
        />
        <RoomViewer
          sale={true}
          tilte="Chỗ này rẻ nhất luôn"
          sologen="Đây là những chỗ ở rẻ bật nhất của lalastay"
        />
        <CityViewer
          tilte="Hay những địa điểm bạn chưa bao giờ tới"
          sologen="Lalastay sẽ dẫn bạn đến đây"
        />
        <RoomViewer
          sale={false}
          tilte="Các chỗ ở được đặt nhiều nhất nhất"
          sologen="Đây là những chỗ ở nổi bật nhất của lalastay"
        />
      </Container>
      <Footer />
    </div>
  );
}

export default withLayout(Home);
