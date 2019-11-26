import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import wifi from '../../assets/wifi.svg';
import tea from '../../assets/tea.svg';
import tivi from '../../assets/tivi.svg';
import hairdry from '../../assets/hairdry.svg';
import kettle from '../../assets/kettle.svg';
import map from '../../assets/map.PNG';

import './style.css';

function BodyHomedetail() {
  return (
    <Container>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Box className="name-home">Home statay Gâu đần</Box>
        <button className="variant-button" type="button">
          Đặt ngay
        </button>
      </Grid>
      <Box fontSize={24} fontWeight={300}>
        Đà lạt, Lâm Đồng, Việt Nam - vị trí tuyệt vời xem <b>*Map</b>
      </Box>
      <div>
        <Box fontWeight={300} fontSize={18} lineHeight={2}>
          Nằm ở trung tâm thành phố Đà lạt và chỉ cách quảng trường 2 phút đi bộ, chúng tôi cung cấp
          các lựa chọn phòng riêng và phòng ngủ tập thể dành cho các cá nhân, khách du lịch bụi và
          các nhóm khách. Nằm ở trung tâm thành phố Đà lạt và chỉ cách quảng trường 2 phút đi bộ,
          chúng tôi cung cấp các lựa chọn phòng riêng và phòng ngủ tập thể dành cho các cá nhân,
          khách du lịch bụi và các nhóm khách. Nằm ở trung tâm thành phố Đà lạt và chỉ cách quảng
          trường 2 phút đi bộ, chúng tôi cung cấp các lựa chọn phòng riêng và phòng ngủ tập thể dành
          cho các cá nhân, khách du lịch bụi và các nhóm khách.
        </Box>
        <div>
          <Box fontWeight={600} fontSize={18}>
            Tiện nghi
          </Box>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <img className="convenient-img" src={wifi} alt="wifi" />
            <img className="convenient-img" src={hairdry} alt="hairdry" />
            <img className="convenient-img" src={tivi} alt="tivi" />
            <img className="convenient-img" src={tea} alt="tea" />
            <img className="convenient-img" src={kettle} alt="kettle " />
          </Grid>
        </div>
        <div style={{ fontSize: '18px', display: 'flex' }}>
          <Box width={200} fontWeight={600}>
            Loại homestaty
          </Box>
          <Box>Nhà riêng</Box>
        </div>
        <div style={{ fontSize: '18px', display: 'flex' }}>
          <Box width={200} fontWeight={600}>
            Thông tin nhà{' '}
          </Box>
          <Box>phòng khách, 1 phòng tắm, 1 phòng ngủ, 1 nhà bếp 2,</Box>
        </div>
        <div style={{ fontSize: '18px', display: 'flex' }}>
          <Box width={200} fontWeight={600}>
            Giá
          </Box>
          <Box>2.5Tr</Box>
        </div>
        <div style={{ fontSize: '18px', display: 'flex' }}>
          <Box width={200} fontWeight={600}>
            Thời hian ở tối thiểu
          </Box>
          <Box>1 ngày</Box>
        </div>
        <div style={{ fontSize: '18px' }}>
          <Box width={200} fontWeight={600}>
            Quy định
          </Box>
          <Box>
            Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
            Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
          </Box>
        </div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ fontSize: '18px' }}
        >
          <Box fontWeight={600}>Liên hệ</Box>
          <Box>Số điện thoại: 0987654310</Box>
          <Box>Email: lalastay@gmail.con</Box>
        </Grid>
        <div>
          <Box>Map</Box>
          <Box width="100%" height={250}>
            <img
              alt="map"
              src={map}
              style={{ width: '100%', height: '100%', alignItems: 'center' }}
            />
          </Box>
        </div>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Box>Để lại Email hoặc số điện thoại để nhận ưu đãi tốt nhẩt</Box>
          <div style={{ marginBottom: '100px' }}>
            <Box display="inline" className="search-container" />
            <Box display="inline" className="button-search-container">
              <button className="b-search" type="button" />
            </Box>
          </div>
        </Grid>
      </div>
    </Container>
  );
}

export default BodyHomedetail;