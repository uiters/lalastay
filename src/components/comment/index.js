import React from 'react';
import { Box, Input } from '@material-ui/core';
import avatar from '../../assets/avatar.jpg';

import './style.css';

function Comment() {
  return (
    <div>
      <Box display="inline">
        <img src={avatar} className="avatar" alt="avatar" />
      </Box>
      <Box display="inline" className="comment-content">
        <Input placeholder="Bình luận ..." className="comment" />
      </Box>
    </div>
  );
}

export default Comment;
