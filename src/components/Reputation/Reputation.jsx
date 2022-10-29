import React from 'react';

import { SectionTitle, ReputationCard } from '../../components';
import { reputationCards } from '../../utils/constans';

import './Reputation.css';

const Reputation = () => {
  return (
    <section className='reputation container'>
      <SectionTitle
        title='Our Reputation'
        position='center'
        className='reputation__title'
      />
      <ul className='reputation__list'>
        {reputationCards.map((card, index) => (
          <li key={index} className='reputation__item'>
            <ReputationCard
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reputation;
