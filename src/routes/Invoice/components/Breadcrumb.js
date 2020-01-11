import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from '@reach/router';
import logo from 'assets/logo.png';

const Breadcrumb = () => {
  return (
    <div style={styles.container}>
      <Link to="/">
        <img alt="logo" height="38" width="38" style={styles.logo} src={logo} />
      </Link>
      <Link to="/payment" style={styles.rootLink}>
        1. Thông tin đặt phòng
      </Link>
      <ChevronRightIcon />
      <p style={styles.childLink}>2. Hóa đơn đặt phòng</p>
    </div>
  );
};

const styles = {
  container: {
    position: 'sticky',
    top: '0px',
    backgroundColor: '#fff',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
    border: '0.5px solid rgba(150, 150, 150, 0.4)',
    borderRadius: '4px',
  },
  logo: {
    left: '1.32%',
    right: '95.35%',
    top: '10.42%',
    bottom: '10.42%',
    marginLeft: '10px',
    color: '#000',
    borderRadius: '4px',
  },
  rootLink: {
    fontSize: '18px',
    lineHeight: '24px',
    color: '#969696',
    marginLeft: '48px',
  },
  childLink: {
    margin: 'auto 0',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '10px',
  },
};

export default Breadcrumb;
