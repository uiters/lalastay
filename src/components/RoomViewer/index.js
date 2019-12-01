/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { SmallRoomItem } from 'components';

function RoomViewer(props) {
  const renderRom = () => {
    const result = [];
    for (let i = 0; i < 12; i++) {
      const item = (
        <Grid item md={3} xs={6} lg={3} sm={4} key={i}>
          <SmallRoomItem sale={i % 3 === 0 ? true : false} />
        </Grid>
      );
      result.push(item);
    }
    return result;
  };
  return (
    <>
      <div style={{ width: '100%', marginTop: '40px', marginBottom: '40px' }}>
        <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
          <Grid item sm={12}>
            <div style={{ marginBottom: '20px' }}>
              <Box fontWeight={600} fontSize={24} color="#2B2B2B">
                {props.tilte}
              </Box>
              <Box fontWeight={300} fontSize={24} color="rgba(43, 43, 43, 0.8)">
                {props.sologen}
              </Box>
            </div>
          </Grid>
          {renderRom()}
        </Grid>
      </div>
    </>
  );
}

export default RoomViewer;
