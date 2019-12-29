import React from 'react';
import { Box } from '@material-ui/core';
import { navigate } from '@reach/router';
import './style.css';

function InformationUserForm() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="conatiner-reservation">
        <div style={{ textAlign: 'center' }}>
          <Box fontSize={25} fontWeight={500}>
            Đặt Phòng
          </Box>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ul>
            <li className="magin-15">
              <div className="date-arrival">
                <input placeholder="Ngày đến" className="input-reservation " />
                <p style={{ position: 'absolute', right: 0, top: 10 }}>ahihi</p>
              </div>
            </li>
            <li className="magin-15">
              <div>
                <input placeholder="Ngày đi" className="input-reservation" />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <input placeholder="Người lớn" className="input-reservation" />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <input placeholder="Trẻ em" className="input-reservation" />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <button className="book-room" type="button" onClick={() => navigate('/payment')}>
                  Đặt phòng
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InformationUserForm;
