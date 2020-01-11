/* eslint-disable no-prototype-builtins */
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

const useEventListener = (target, type, listener, ...options) => {
  React.useEffect(() => {
    const targetIsRef = target.hasOwnProperty('current');
    const currentTarget = targetIsRef ? target.current : target;
    if (currentTarget) currentTarget.addEventListener(type, listener, ...options);
    return () => {
      if (currentTarget) currentTarget.removeEventListener(type, listener, ...options);
    };
  }, [target, type, listener, options]);
};

function BodyHomedetail(props) {
  // eslint-disable-next-line no-unused-vars
  const [checked, setChecked] = React.useState(true);
  const [fix, setFix] = React.useState(false);
  useEventListener(document, 'scroll', () => {
    const temp = window.pageYOffset >= 400 && window.pageYOffset <= 730;
    setFix(temp);
  });
  const handleChange = () => {
    // setChecked(prev => !prev);
  };

  // const handleScroll = () => {};
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={8} sm={7} xs={12}>
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
        <Grid item md={4} sm={5} xs={12}>
          <div
            style={{
              position:
                fix && props.width !== 'xs' && props.width !== 'sm' && props.width !== 'md'
                  ? 'relative'
                  : 'static',
            }}
          >
            <div
              className="animation-form"
              style={{
                position:
                  fix && props.width !== 'xs' && props.width !== 'sm' && props.width !== 'md'
                    ? 'fixed'
                    : 'static',
                width: props.width === 'xs' ? '310px' : props.width === 'sm' ? '340px' : '350px',
                top: 60,
              }}
            >
              <ReservationForm />
              <div style={{ height: '50px' }} />
              <InformationUserForm />
            </div>
          </div>
        </Grid>
        {/* <Grid item md={8} sm={8} xs={12}>

        </Grid> */}
      </Grid>
      <div className="compare">
        <div>
          {/* <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="H"
          /> */}
          <Box onClick={handleChange} fontWeight={500} fontSize={20} className="compare-now">
            Homestay nào phù hợp với bạn?
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
