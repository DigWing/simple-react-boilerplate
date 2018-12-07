import React from 'react';

import './style.scss';

const BaseButton = ({ onClick, title }) =>
  <button className="base-button" onClick={onClick}>
    {title}
  </button>;

export default BaseButton;
