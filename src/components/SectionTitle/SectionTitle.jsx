import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({
  title,
  color = 'dark',
  position = 'left',
  className,
}) => {
  return (
    <h2
      className={`section-title ${
        color === 'light'
          ? 'section-title_color_light'
          : 'section-title_color_dark'
      } ${
        position === 'center'
          ? 'section-title_position_center'
          : 'section-title_position_left'
      } ${className}`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
