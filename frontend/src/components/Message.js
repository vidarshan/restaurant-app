import React from 'react';

import '../assets/scss/components/alerts.scss';

const Message = ({ id, variant, message, size }) => {
  return (
    <>
      <div className={`custom-alert-${variant}-${size}`} key={id}>
        {message}
      </div>
    </>
  );
};

Message.defaultProps = {
  variant: 'danger',
  size: 'full',
};

export default Message;
