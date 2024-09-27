import React from 'react';
import { Card } from 'semantic-ui-react';
import TutorialCard from './Card2';

const CardList2 = ({ tutorials }) => (
  <Card.Group itemsPerRow={3}>
    {tutorials.map((tutorial, index) => (
      <TutorialCard key={index} {...tutorial} />
    ))}
  </Card.Group>
);

export default CardList2;
