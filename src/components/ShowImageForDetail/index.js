/* eslint-disable react/no-array-index-key */
import React from 'react';
import Swiper from 'react-id-swiper';
import './style.css';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import s5 from '../../assets/s5.jpg';

function ShowImageForDetail() {
  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const imgs = [s1, s2, s3, s4, s5, s3, s2, s4, s5];
  return (
    <div className="conatiner-slie-img">
      <Swiper {...params}>
        {/* <div className="container-img">
          <img src={s1} alt="ảnh" className="image" />
        </div>
        <div className="container-img">
          <img src={s2} alt="ảnh" className="image" />
        </div>
        <div className="container-img">
          <img src={s3} alt="ảnh" className="image" />
        </div>
        <div className="container-img">
          <img src={s4} alt="ảnh" className="image" />
        </div>
        <div className="container-img">
          <img src={s5} alt="ảnh" className="image" />
        </div>
        <div className="container-img">
          <img src={s2} alt="ảnh" className="image" />
        </div> */}
        {imgs &&
          imgs.map((img, index) => {
            return (
              <div className="slie-img" key={new Date() + index}>
                <img src={img} alt="ảnh" className="image" />
              </div>
            );
          })}
      </Swiper>
    </div>
  );
}

export default ShowImageForDetail;
