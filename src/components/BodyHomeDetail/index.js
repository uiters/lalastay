/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SmallRoomItem from '../SmallRoomItem';
import { ReservationForm, DescriptionHomeDetail, InformationUserForm } from '../index';
import './style.css';

function BodyHomedetail(props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <DescriptionHomeDetail scrollTop={props.scrollTop} />
        </Grid>
        <Grid item md={4} style={{ marginTop: '30px' }}>
          <ReservationForm />
          <div style={{ height: '50px' }} />
          <InformationUserForm />
        </Grid>
      </Grid>
      <div className="compare">
        <div>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Hiển thị danh sách so sách"
          />
          <Grid container>
            <Grow in={checked}>
              <Grid item md={3} lg={3} sm={4} className="container-room-view">
                <SmallRoomItem />
              </Grid>
            </Grow>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Grid item md={3} lg={3} sm={4} className="container-room-view">
                <SmallRoomItem />
              </Grid>
            </Grow>
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Grid item md={3} lg={3} sm={4} className="container-room-view">
                <SmallRoomItem />
              </Grid>
            </Grow>
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Grid item md={3} lg={3} sm={4} className="container-room-view">
                <SmallRoomItem />
              </Grid>
            </Grow>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default BodyHomedetail;
