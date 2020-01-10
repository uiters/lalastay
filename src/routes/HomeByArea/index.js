/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-plusplus */
import React from 'react';
import './style.css';
import { Grid, Box, Container } from '@material-ui/core';
import { SmallRoomItem, VideoIntro, withLayout } from 'components';

function HomeByArea() {
  // Khi su luoi bieng len ngoi

  const renderRom = () => {
    const titles = [
      '[Lily Home] căn 1 ngủ tầng 4',
      'Hanami Service Apartment',
      'Home Sweet Home High Floor 1Br Apartment',
      'Mây homestay Vũng Tàu',
      'CityHomes ⭐️ Vinhomes Metropolis Hà Nội',
      'Apartment Newlife Bãi Cháy Hạ Long',
      'Gom Homestay Vũng Tàu',
      'Aloha Hanoi Homestay 24',
    ];
    const result = [];
    for (let i = 1; i < 53; i++) {
      const index = Math.floor(Math.random() * 7);
      const item = (
        <Grid item md={3} lg={3} sm={4} key={i} className="container-room-view">
          <SmallRoomItem sale={i % 3 === 0 ? true : false} tilte={titles[index]} />
        </Grid>
      );
      result.push(item);
    }
    return result;
  };
  return (
    <>
      <VideoIntro />
      <Container>
        <Box fontWeight={600} fontSize={24} marginBottom={3}>
          Đà Lạt nay có gì ?
        </Box>
        <Grid direction="row" container justify="center" alignItems="center" spacing={2}>
          {renderRom()}
        </Grid>
      </Container>
    </>
  );
}

export default withLayout(HomeByArea);
