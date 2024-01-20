// import React from 'react'
// import './Blob.scss'

// export const Blob = () => {
//   return (
//     <div className='blob absolute top-[5%] left-[5%] w-[400px] h-[300px] rounded-full bg-slate-800'></div>
//   )
// }

import React from 'react';
import PropTypes from 'prop-types';
import './Blob.scss';

export const Blob = ({ width, height, backgroundColor, top, left }) => {
  const blobStyle = {
    width: width || '400px',
    height: height || '300px',
    backgroundColor: backgroundColor || 'bg-slate-800',
    top: top || '5%',
    left: left || '5%',
  };

  return (
    <div className={`blob absolute rounded-full ${blobStyle.backgroundColor}`} style={blobStyle}></div>
  );
};

Blob.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
};
