/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import RoomIcon from '@material-ui/icons/Room';
import withWidth from '@material-ui/core/withWidth';
import SmallRoomItem from '../SmallRoomItem';
import { ReservationForm, DescriptionHomeDetail, InformationUserForm } from '../index';
import './style.css';

function BodyHomedetail() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={8} sm={8} xs={12}>
          <div style={{ marginBottom: '15px' }}>
            <Grid container>
              <Grid item md={7} xs={12}>
                <Box fontSize={25} fontWeight={600}>
                  DANA COZY⭐️HOMESTAY NGUYÊN CĂN GIÁ RẺ TẠI ĐÀ NẴNG
                </Box>
              </Grid>
              <Grid item md={5} xs={12}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box fontSize={18} fontWeight={600}>
                    <span
                      style={{
                        textDecoration: 'line-through',
                        marginRight: '10px',
                        fontWeight: '400',
                      }}
                    >
                      1.500k/đêm
                    </span>
                    <span>1.235k/đêm</span>
                  </Box>
                </div>
              </Grid>
            </Grid>
            <Box style={{ display: 'flex', marginTop: '15px' }}>
              <Box>
                <RoomIcon style={{ fontSize: '22px', color: 'rgba(253, 136, 156, 1)' }} />
              </Box>

              <Box>Lâm Đồng, Đà Lạt</Box>
            </Box>
          </div>

          <DescriptionHomeDetail />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <ReservationForm />
          <div style={{ height: '50px' }} />
          <InformationUserForm />
        </Grid>
      </Grid>
      <div className="compare">
        <div>
          {/* <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="H"
          /> */}
          <Box onClick={handleChange} fontWeight={500} fontSize={20} className="compare-now">
            Homestay nào phù hợp với bạn? <b>Tìm hiểu thêm</b>
          </Box>
          <div style={{ display: checked ? 'block' : 'none' }}>
            <Grid container>
              <Grow in={checked}>
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow tilte="Apartment Newlife" />
                </Grid>
              </Grow>
              {/* Conditionally applies the timeout prop to change the entry speed. */}
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow tilte="Aloha Hanoi Homestay 24" />
                </Grid>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow tilte="Gom Homestay Vũng Tàu" />
                </Grid>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow sale tilte="[Lily Home] căn 1 ngủ tầng 4" />
                </Grid>
              </Grow>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withWidth()(BodyHomedetail);
