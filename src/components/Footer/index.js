/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './style.css';
import { Grid } from '@material-ui/core';

function Footer() {
  return (
    <div className="container-footer">
      <Grid container>
        <Grid md={6} xs={12} className="container-left">
          <div className="text-footer  ">
            <div className="contact-item">
              <HomeIcon className="icon-style small-icon" />
              <p>Khu Phố 6- Phường linh trung Quận Thủ Đức-TPHCM </p>
            </div>
            <div className="contact-item">
              <PhoneIcon type="phone" theme="twoTone" className="icon-style small-icon" />{' '}
              <span>0981853640</span>{' '}
            </div>
            <div className="contact-item">
              <EmailIcon type="mail" theme="twoTone" className="icon-style small-icon" />
              <span>info@lalastay.com</span>{' '}
            </div>
          </div>
        </Grid>
        <Grid md={6} xs={12} className="container-right">
          <div className="text-footer">
            <h3 style={{ color: 'rgba(0, 0, 0, 0.65)', fontWeight: '600' }}>Về chúng tôi</h3>
            <p>
              lalastay là một phần của Lala Holdings Inc., tập đoàn đứng đầu thế giới về du lịch
              trực tuyến và các dịch vụ liên quan.
            </p>
          </div>
        </Grid>
        <Grid md={12} container>
          <div className="container-end-footer">
            <div className="end-footer">
              <a href="https://github.com/uiters/lalastay">
                <FacebookIcon className="icon-contact" />
              </a>
              <a href="https://github.com/uiters/lalastay">
                <YouTubeIcon className="icon-contact" />
              </a>
              <a href="https://github.com/uiters/lalastay">
                <TwitterIcon className="icon-contact" />
              </a>
              <a href="https://github.com/uiters/lalastay">
                <InstagramIcon className="icon-contact" />
              </a>
            </div>
            <p className="license-text">
              © 2019 Lalastay. Bản quyền thuộc về Công ty TNHH Lalatay Việt Nam. Mọi hành vi sao
              chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.
            </p>
          </div>
        </Grid>
      </Grid>
      {/* <div className="container-contact-footer"></div> */}
    </div>
  );
}

export default Footer;
