import React from 'react';
import { Box } from '@material-ui/core';
import { navigate } from '@reach/router';
import './style.css';

function InformationUserForm() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="conatiner-info">
        <div style={{ textAlign: 'center' }}>
          <Box fontSize={20} fontWeight={600}>
            Đăng kí nhận ngay ưu đãi
          </Box>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ul>
            <li className="magin-15">
              <div className="date-arrival">
                <input placeholder="Họ và tên" className="input-reservation " />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <input placeholder="email" className="input-reservation" />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <button className="book-room" type="button" onClick={() => navigate('/payment')}>
                  ĐĂNG KÍ
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
