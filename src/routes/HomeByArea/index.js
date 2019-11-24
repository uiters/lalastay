import React from 'react';
import './style.css';
import { Grid, Box } from '@material-ui/core';
import { SmallRoomItem, VideoIntro } from 'components';

function HomeByArea() {
  return (
    <>
      <VideoIntro />
      <div>
        <Box fontWeight={600} fontSize={24} marginBottom={5}>
          Đà lạt nay có gì
        </Box>
        <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem sale={false} />
          </Grid>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem sale={false} />
          </Grid>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem ssale={false} />
          </Grid>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem sale={false} />
          </Grid>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem sale={false} />
          </Grid>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem sale={false} />
          </Grid>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem sale={false} />
          </Grid>
          <Grid item md={3} xs={6} lg={3} sm={4}>
            <SmallRoomItem sale={false} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomeByArea;
