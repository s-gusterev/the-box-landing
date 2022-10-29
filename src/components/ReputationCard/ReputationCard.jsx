import React from 'react';
import './ReputationCard.css';
const ReputationCard = ({ image, title, paragraph }) => {
  return (
    <div className='reputation-card'>
      <img className='reputation-card__img' src={image} alt={title} />
      <h3 className='reputation-card__title'>{title}</h3>
      <p className='reputation-card__paragraph'>{paragraph}</p>
    </div>
  );
};

export default ReputationCard;
